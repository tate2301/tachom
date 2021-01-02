import React from 'react'

export default function Microservices() {

    return(
            <>
            <div className="p-4 w-full lg:w-1/2 h-auto text-center">
                <div className='w-full relative rounded-xl bg-gray-100 px-8 py-12 h-full'>
                    <div className="w-full flex">
                        <div className="mx-auto h-40 w-40 rounded-xl border-4 border-white shadow-xl bg-gray-200">
                            <div className="h-full p-4 bg-serverless"></div>
                        </div>
                    </div>
                    <div className="space-y-8 py-8">
                        <p className="text-5xl font-bold text-gray-900">
                            Cloud Agnostic & Servless.
                        </p>
                        <p className="text-2xl text-gray-600 w-3/4 mx-auto">
                            The server is dead, long live the cloud. Our solutions can seamlessly be deployed on cloud platforms or on-premise infrastructures. They are cloud agnostic! 
                        </p>
                    </div>
                </div>
            </div>
            
            </>
            
    )
}