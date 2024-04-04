import { Task } from "@/App";
import { api } from "@/lib/axios";

export async function listarTasks(): Promise<Task[]> {
    try {
      const response = await api.get('/tasks/listar');
      return response.data; // Assumindo que 'data' é um array de objetos 'Task'
    } catch (error) {
      // Tratamento de erro apropriado
      console.error("Erro ao listar tasks:", error);
      throw new Error("Falha ao buscar tasks.");
    }
  }