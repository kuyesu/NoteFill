// 1. Import document loaders for different file formats
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { JSONLoader } from 'langchain/document_loaders/fs/json'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { CSVLoader } from 'langchain/document_loaders/fs/csv'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'

// 2. Import Replicate language model and other related modules
import { Replicate } from 'langchain/llms/replicate'
import { RetrievalQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores/hnswlib'
import { HuggingFaceInferenceEmbeddings } from 'langchain/embeddings/hf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'


// 4. Import dotenv for loading environment variables and fs for file system operations
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config()

// 5. Initialize the document loader with supported file formats
const loader = new DirectoryLoader('./documents', {
  '.json': path => new JSONLoader(path),
  '.txt': path => new TextLoader(path),
  '.csv': path => new CSVLoader(path),
  '.pdf': path => new PDFLoader(path)
})

// 6. Load documents from the specified directory
console.log('Loading docs...')
const docs = await loader.load()
console.log('Docs loaded.')

// 7. Define a function to calculate the cost of tokenizing the documents

const VECTOR_STORE_PATH = 'Documents.index'
const question = 'Tell me about these docs'

// 8. Define a function to normalize the content of the documents
function normalizeDocuments(docs: any[]) {
  return docs.map(doc => {
    if (typeof doc.pageContent === 'string') {
      return doc.pageContent
    } else if (Array.isArray(doc.pageContent)) {
      return doc.pageContent.join('\n')
    }
  })
}

// 9. Define the main function to run the entire process
export const run = async () => {


  // 11. Check if the cost is within the acceptable limit

  const model = new Replicate({
    model: 'replicate/llama-2-70b-chat:2796ee9483c3fd7aa2e171d38f4ca12251a30609463dcfd4cd76703f22e96cdf',
  })

    let vectorStore

    // 13. Check if an existing vector store is available
    console.log('Checking for existing vector store...')
    if (fs.existsSync(VECTOR_STORE_PATH)) {
      // 14. Load the existing vector store
      console.log('Loading existing vector store...')
      vectorStore = await HNSWLib.load(
        VECTOR_STORE_PATH,
        new HuggingFaceInferenceEmbeddings({
          model: 'all-MiniLM-L6-v2'
        })
      )
      console.log('Vector store loaded.')
    } else {
      // 15. Create a new vector store if one does not exist
      console.log('Creating new vector store...')
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000
      })
      const normalizedDocs = normalizeDocuments(docs)
      const splitDocs = await textSplitter.createDocuments(normalizedDocs)

      // 16. Generate the vector store from the documents
      vectorStore = await HNSWLib.fromDocuments(
        splitDocs,
        new HuggingFaceInferenceEmbeddings({
          model: 'all-MiniLM-L6-v2',
        })
      )
      // 17. Save the vector store to the specified path
      await vectorStore.save(VECTOR_STORE_PATH)

      console.log('Vector store created.')
    }

    // 18. Create a retrieval chain using the language model and vector store
    console.log('Creating retrieval chain...')
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever())

    // 19. Query the retrieval chain with the specified question
    console.log('Querying chain...')
    const res = await chain.call({ query: question })
    console.log({ res })

}

// 21. Run the main function
run()
