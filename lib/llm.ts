import { Replicate } from "langchain/llms/replicate";

export const streamingModel = new Replicate({
  model: "replicate/llama-2-70b-chat:2796ee9483c3fd7aa2e171d38f4ca12251a30609463dcfd4cd76703f22e96cdf",
  verbose: true,
  apiKey: process.env.REPLICATE_API_KEY,
  input: {
    prompt: "Human: Hello, who are you?\nAI: I am doing great. How can I help you today?\nHuman: I am looking for a restaurant in the center of town.\nAI:",
    stream: true,
  }
})

export const nonStreamingModel = new Replicate({
  model: "replicate/llama-2-70b-chat:2796ee9483c3fd7aa2e171d38f4ca12251a30609463dcfd4cd76703f22e96cdf",
  verbose: true,
  apiKey: process.env.REPLICATE_API_KEY,
  input: {
    prompt: "Human: Hello, who are you?\nAI: I am doing great. How can I help you today?\nHuman: I am looking for a restaurant in the center of town.\nAI:",
    stream: true,
  }
})
