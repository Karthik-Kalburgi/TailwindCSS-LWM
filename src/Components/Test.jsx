import React from 'react'

const Test = () => {
  return (
    <>
    <div> <h1 className='text-center font-bold bg-green-400 text-4xl mt-2'>TailwindCSS Learn What Matters</h1></div>
   
    <div className='text-white grid text-2xl place-content-center h-screen'>Test
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
        <div>
            <button className='bg-sky-400 text-center mt-2 text-base p-2 rounded-xl hover:bg-yellow-400 hover:text-black '>Buynow</button>
        </div>
        <div className='text-center my-4'>
            <p className='text-white md:bg-green-400 sm:bg-red-500 '>Lorem ipsum dolor sit.</p>
        </div>
        <div className='mt-3 '>
            <div className='max-w-sm mx-auto bg-white text-black  rounded-xl shadow-lg overflow-hidden md:max-w-2xl  '>
                <div className='md:flex'>
                <div>
                    <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
                </div>
                <div className='p-5'>
                    <div className='uppercase tracking-wider overflow-hidden text-sm text-indigo-500 font-semibold'>
                        An awsm content
                    </div>
                    <a className='block mt-1 text-lg font-medium text-block hover:text-blue-700' href='#'>TailwindCSS is amazing once you understand the power of it </a>
                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adip.
                    </p>
                </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Test