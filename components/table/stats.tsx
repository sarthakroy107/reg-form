'use client';
import { Separator } from '@/components/ui/separator'

const Stats = () => {
  return (
    <div className='w-full border border-black/40 rounded-lg flex justify-evenly items-center my-7'>
      <div className='w-fit m-1 p-3 '>
        <p className='font-medium text-black/60'>Total Submitions</p>
        <p className='text-4xl text-black/75'>100</p>
      </div>
      <Separator orientation='vertical' className='h-20' />
      <div className='w-fit m-1 p-3 '>
        <p className='font-medium text-black/60'>Total Submitions</p>
        <p className='text-4xl text-black/75'>100</p>
      </div>
      <Separator orientation='vertical' className='h-20' />
      <div className='w-fit m-1 p-3 '>
        <p className='font-medium text-black/60'>Total Submitions</p>
        <p className='text-4xl text-black/75'>100</p>
      </div>
      <Separator orientation='vertical' className='h-20' />
      <div className='w-fit m-1 p-3 '>
        <p className='font-medium text-black/60'>Total Submitions</p>
        <p className='text-4xl text-black/75'>100</p>
      </div>
      <Separator orientation='vertical' className='h-20' />
      <div className='w-fit m-1 p-3'>
        <p className='font-medium text-black/60'>Total Submitions</p>
        <p className='text-4xl text-black/75'>100</p>
      </div>
    </div>
  )
}

export default Stats