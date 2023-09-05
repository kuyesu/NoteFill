import { clsx, type ClassValue } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'
import { Message } from 'ai'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}


export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function scrollToBottom(containerRef: React.RefObject<HTMLElement>) {
  if (containerRef.current) {
    const lastMessage = containerRef.current.lastElementChild
    if (lastMessage) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'end'
      }
      lastMessage.scrollIntoView(scrollOptions)
    }
  }
}

// Reference:
// github.com/hwchase17/langchainjs/blob/357d6fccfc78f1332b54d2302d92e12f0861c12c/examples/src/guides/expression_language/cookbook_conversational_retrieval.ts#L61
export const formatChatHistory = (chatHistory: [string, string][]) => {
  const formattedDialogueTurns = chatHistory.map(
    dialogueTurn => `Human: ${dialogueTurn[0]}\nAssistant: ${dialogueTurn[1]}`
  )

  return formattedDialogueTurns.join('\n')
}

export function formattedText(inputText: string) {
  return inputText
    .replace(/\n+/g, ' ') // Replace multiple consecutive new lines with a single space
    .replace(/(\w) - (\w)/g, '$1$2') // Join hyphenated words together
    .replace(/\s+/g, ' ') // Replace multiple consecutive spaces with a single space
}

// Default UI Message
export const initialMessages: Message[] = [
  {
    role: 'assistant',
    id: '0',
    content:
      'Hi! I am your PDF assistant. I am happy to help with your questions about your PDF about German law.'
  }
]

interface Data {
  sources: string[]
}

// Maps the sources with the right ai-message
export const getSources = (data: Data[], role: string, index: number) => {
  if (role === 'assistant' && index >= 2 && (index - 2) % 2 === 0) {
    const sourcesIndex = (index - 2) / 2
    if (data[sourcesIndex] && data[sourcesIndex].sources) {
      return data[sourcesIndex].sources
    }
  }
  return []
}
