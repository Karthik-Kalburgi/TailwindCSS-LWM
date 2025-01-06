import React from 'react'

const Test = () => {
  return (
    <>
    <div> <h1 className='text-center font-bold bg-green-400 text-4xl mt-2'>TailwindCSS Learn What Matters</h1></div>
   
    <div className='text-white grid text-2xl place-content-center h-screen'>Test</div>
    <div className='p-5 mx-auto  max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <div>
            <img className='h-12 w-12  ' src="https://play-lh.googleusercontent.com/x5_bJXO_-4zH95U6-GSmZPHWX7iFe1JPmfGe26kV2fVrZS5Ebi7L_VFIOopAQ3XBDg"  />
        </div>
        <div>
            <div className='text-black text-2xl font-medium'>
                TailwindCSS
                <p className=' text-slate-500 text-base '>By- KK</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test