import {RAGChat,upstash} from "@upstash/rag-chat";
export const ragchat=new RAGChat({
model:upstash("meta-llama/Meta-Llama-3-8B-Instruct") //currently we have two model
}) 


