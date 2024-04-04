import { api } from "@/lib/axios";

interface Task {
    title: string;
    description: string;
  
}


export async function cadastrartask(data : Task ){
    await api.post('/tasks/cadastrar',data)
}