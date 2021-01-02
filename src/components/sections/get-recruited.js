import React from 'react'

export default function GetRecruitedSection() {

    return(
            <>
                <div className="w-full py-8 px-4 mt-12 mx-auto">
                    <div className="w-full flex justify-center py-8">
                        <div className="h-32 w-32 md:h-36 md:w-36 lg:h-48 lg:w-48">
                            <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                                <div className="h-full p-4 bg-hacker rounded-md"></div>
                            </div>
                        </div>
                    </div>

                    <p className="text-center font-bold text-7xl">Careers</p>
                    <p className="py-2 text-center text-2xl">We don't hire. We recruit!</p>
                    <div className="divide-y w-full py-8">
                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Prepare
                            </p>
                            <p className="w-full md:w-3/4">
                                Watch the latest session videos and visit the Apple Developer Forum to see
                                if your questions have been answered. If not ask any question about any new 
                                technologoies or about an exisiting coding issue.
                            </p>
                        </div>

                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Apply
                            </p>
                            <p className="w-full md:w-3/4">
                                Watch the latest session videos and visit the Apple Developer Forum to see
                                if your questions have been answered. If not ask any question about any new 
                                technologoies or about an exisiting coding issue.
                            </p>
                        </div>

                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Interview
                            </p>
                            <p className="w-full md:w-3/4">
                                Watch the latest session videos and visit the Apple Developer Forum to see
                                if your questions have been answered. If not ask any question about any new 
                                technologoies or about an exisiting coding issue.
                            </p>
                        </div>
                    </div>
                </div>
            </>
            
    )
}