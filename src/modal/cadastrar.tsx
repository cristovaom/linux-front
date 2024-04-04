import { cadastrartask } from "@/api/cadastrarTask";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const CadastrarSchema = z.object({
  title: z
    .string({
      required_error: "O campo título é obrigatório",
    })
    .min(1, { message: "O campo título é obrigatório" }),
  description: z
    .string({
      required_error: "O campo descrição é obrigatório",
    })
    .min(1, { message: "O campo título é obrigatório" }),
});
type CadastrarType = z.infer<typeof CadastrarSchema>;

export default function Cadastrar() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CadastrarType>({
    resolver: zodResolver(CadastrarSchema),
  });
  function onHandleSubmit(data: CadastrarType) {
    cadastrartask(data);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <Label>Titulo</Label>
          <Input placeholder="Titulo" {...register("title")} />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <Label>Descrição</Label>
          <Input placeholder="Descrição" {...register("description")} />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </>
  );
}
