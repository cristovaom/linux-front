import { Button } from "./components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import Cadastrar from "./modal/cadastrar";
import { useEffect, useState } from "react";
import { listarTasks } from "./api/listarTasks";

export interface Task {
  id: string;
  title: string;
  description: string;
}

export function App() {
  const [data, setData] = useState<Task[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await listarTasks();
      setData(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Lista de veículos</h1>

        <div className="space-y-2.5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Cadastrar task</Button>
            </DialogTrigger>
            <DialogContent>
              <Cadastrar />
            </DialogContent>
          </Dialog>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]">Id</TableHead>
                  <TableHead className="w-[140px]">Nome</TableHead>
                  <TableHead className="w-[180px]">Descricao</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.id}</TableCell>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )} */}
        </div>
      </div>
    </>
  );
}

export default App;
