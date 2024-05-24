import React from 'react'

export default function FacultyMain() {
  return (
    <div id=''>

       <div id='parrent' className='flex flex-col'>


            <div id='h-nav'>

                <nav className="bg-gray-900 text-white py-4 px-4">

                    <div className="container mx-auto flex items-center justify-between">

                        <div className="flex items-center gap-8">
                            <button className="text-white focus:outline-none focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                                
                            </button>
                            <span className="text-xl ml-3">Classroom</span>
                        </div>

                        <div className="flex items-center gap-8">
                            
                            <button className="text-white focus:outline-none focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                            <button>
                                Profile
                            </button>

                        </div>

                    </div>

                </nav>
            </div>

            <div id='content' className='flex flex-row  h-screen w-full'>

                <div id='v-nav' className='border border-gray-200 w-full max-w-64 h-full py-4 bg-gray-100'>
hii
                </div>

                <div id='main' className='flex flex-row justify-between bg-white w-full h-full ml-4 py-4 gap-4 pr-4'>

                    <div id='class1' className='flex flex-col border h-full max-h-64 w-full'>

                        <div className='border py-4 bg-red-400'>
                                <p>II CSE</p>
                                <p>C</p> 
                                <p>Mam</p>
                        </div>

                        <div className='border py-24 bg-black'>



                        </div>

                        <div className='border py-4 bg-orange-700'>

                            material

                        </div>

                    </div>
                  <div id='class1' className='flex flex-col border h-full max-h-64 w-full '>

                        <div className='border py-4 bg-red-400'>
                                <p>II CSE</p>
                                <p>C</p> 
                                <p>Mam</p>
                        </div>

                        <div className='border py-24 bg-black'>



                        </div>

                        <div className='border py-4 bg-orange-700'>

                            material

                        </div>

                    </div>

                    <div id='class1' className='flex flex-col border h-full max-h-64 w-full'>

                        <div className='border py-4 bg-red-400'>
                                <p>II CSE</p>
                                <p>C</p> 
                                <p>Mam</p>
                        </div>

                        <div className='border py-24 bg-black'>



                        </div>

                        <div className='border py-4 bg-orange-700'>

                            material

                        </div>

                    </div>



                </div>

            </div>

            

      </div>




    </div>
  )
}
