export type ChatGPTAgent = "user" | "assistant";

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
  sources?: string[];
}

export type Id = string | number

export type Column = {
  id: Id
  title: string
  component: React.ReactNode
  className: string
}

export type Task = {
  id: Id
  columnId: Id
  content: string

}