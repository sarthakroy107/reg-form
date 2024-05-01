"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import NormalInput from "@/components/forms/normal-input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { portalStatusSchema } from "@/lib/resolver";
import { toast } from "sonner";

const PortalStatus = () => {
  const form = useForm<TPortalSchema>({
    resolver: zodResolver(portalStatusSchema),
  });
  const onSubmit = (values: TPortalSchema) => {
    console.log(values);
    toast.success("Portal status updated");
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-black rounded-md px-3 text-white">
        Portal setting
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-2xl font-medium">
          Portal setting
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <NormalInput
            label="Opeing date"
            type="date"
            {...form.register("opening_dates")}
            error={form.formState.errors.opening_dates}
          />
          <NormalInput
            label="Opening time"
            type="time"
            {...form.register("openin_time")}
            error={form.formState.errors.openin_time}
          />
          <NormalInput
            label="Closing date"
            type="date"
            {...form.register("closing_dates")}
            error={form.formState.errors.closing_dates}
          />
          <NormalInput
            label="Closing time"
            type="time"
            {...form.register("closing_time")}
            error={form.formState.errors.closing_time}
          />
          <div className="flex gap-2">
            <Button type="submit" className="bg-black mt-2 text-white">
              Save
            </Button>
            <Button
              type="button"
              className="bg-white text-black border border-black mt-2 hover:text-white"
            >
              Force close
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PortalStatus;
