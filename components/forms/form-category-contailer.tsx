import { cn } from '@/lib/utils'
import React from 'react'

const FormCategoryContainer = ({ children, label, gridLayout = false }: { children: React.ReactNode, label: string, gridLayout?: boolean }) => {
  return (
    <div className='z-10 my-3'>
      <h3 className='w-fit -mb-3 pl-5'>
        <span className='bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-opacity-100 border-0 text-white font-semibold px-2.5 p-0.5 rounded-full z-20'>{label}</span>
      </h3>
      <div className={cn('container-border', gridLayout && 'grid-formatter')}>
        {children}
      </div>
    </div >
  )
}

export default FormCategoryContainer