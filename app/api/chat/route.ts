import { kv } from '@vercel/kv'
import { ReplicateStream, StreamingTextResponse } from 'ai'
import Replicate from 'replicate'
import { experimental_buildLlama2Prompt } from 'ai/prompts'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'

export const runtime = 'edge'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY || ''
})

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json
  const userId = (await auth())?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  const response = await replicate.predictions.create({
    // You must enable streaming.
    stream: true,

    // The model must support streaming. See https://replicate.com/docs/streaming
    // This is the model ID for Llama 2 70b Chat
    version: '2796ee9483c3fd7aa2e171d38f4ca12251a30609463dcfd4cd76703f22e96cdf',
    // Format the message list into the format expected by Llama 2
    // @see https://github.com/vercel/ai/blob/99cf16edf0a09405d15d3867f997c96a8da869c6/packages/core/prompts/huggingface.ts#L53C1-L78C2
    input: {
      prompt: experimental_buildLlama2Prompt(messages),
      
      system_prompt: `<s>[INST] <<SYS>>
You are a helpful, respectful and honest. Always answer as
helpfully as possible, while being safe. Your answers should not include
any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content.
Please ensure that your responses are socially unbiased and positive in nature.

If a question does not make any sense, or is not factually coherent, explain
why instead of answering something not correct. If you don't know the answer
to a question, please don't share false information.


<</SYS>>
`
    }
  })

  const stream = await ReplicateStream(response, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await kv.hmset(`chat:${id}`, payload)
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      })
    }
  })

  return new StreamingTextResponse(stream)
}
