'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useForm } from 'react-hook-form';
import NormalInput from './forms/normal-input';
import { Button } from './ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { addCollegeSchema } from '@/lib/resolver';
import { toast } from 'sonner';

const AddNewCollege = () => {
  const form = useForm<TAddCollegeSchema>({ resolver: zodResolver(addCollegeSchema) });
  const onSubmit = (data: TAddCollegeSchema) => {
    console.log(data);
    toast.success('College added successfully');
  }
  return (
    <Dialog>
      <DialogTrigger className='p-2 text-white rounded-sm bg-[#3676d6]'>
        Add College
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-3xl font-semibold'>Add new college</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <NormalInput label='College name' {...form.register('college_name')} error={form.formState.errors.college_name} required={true} />
          <NormalInput label='Hostname' {...form.register('hostname')} error={form.formState.errors.hostname} required={true} />
          <Button type='submit' className='mt-3'>Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddNewCollege