'use client';

import { useForm } from "react-hook-form";
import NormalInput from "@/components/forms/normal-input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/lib/resolver";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  const form = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema)
  });

  const onSubmit = (data: TLoginFormSchema) => {
    console.log(data);
    router.push('/super-admin');
    console.log('login success');
  };
  return (
    <div className="w-full md:min-w-[400px] max-w-[450px] min-h-[400px] shadow-sm shadow-black/25 rounded-sm flex flex-col items-center justify-center h-fit bg-white">
      <p className="text-2xl font-semibold mb-5">LOGIN</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-3">
        <NormalInput label="ID" className="w-64" {...form.register("id")} error={form.formState.errors.id} required={true} />
        <NormalInput label="Password" className="w-64" {...form.register("password")} error={form.formState.errors.password} required={true} />
        <Button type="submit">Login </Button>
      </form>
    </div>
  )
}

export default Page