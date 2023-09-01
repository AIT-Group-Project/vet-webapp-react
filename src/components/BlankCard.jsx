import React from 'react'

const BlankCard = () => {
  return (
    <div className='h-full flex justify-center items-center px-6 py-12 '>
        <div className=' w-96 h-96 bg-white border border-indigo-600 border-opacity-10 rounded-md shadow-xl'>
            {/*Card header */}
            <div className='px-12 py-12 border b-2 border-gray-200 dark:border-gray-400'>
                <div className='text-3xl font-semibold text-center mb-4'>

                </div>
            </div>
            {/*Card body*/}
            <div className='p-12 bg-gray-100 dark:bg-gray-400'>
                <div className='space-y-3 text-white'>

                </div>

            </div>
        </div>
    </div>
  )
}

export default BlankCard
