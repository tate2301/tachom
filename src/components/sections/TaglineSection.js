import React from 'react'

export default function TaglineSection() {

    return(
            <>
                <div className="flex flex-wrap py-12 md:p-4 md:p-8 lg:p-12 w-full">
                    <div className="w-full lg:px-12 md:px-8 px-4">
                        <p className="font-bold w-full">OUR SERVICES</p>
                        <p className="text-3xl font-bold md:text-5xl w-full">Are you not entertained?</p>
                    </div>

                    <div className="flex flex-wrap w-full">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded bg-white" style={{
                                    backgroundImage: `url('/assets/projects.png')`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Enterprise Software Development
                                </p>
                                <p className="md:text-xl py-2">
                                    High performance software and design systems according to your specifications.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded"
                                style={{
                                    backgroundImage: `url('/assets/continuity__e28lzmresgeq_large.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Digital Product Design (UI/UX)
                                </p>
                                <p className="md:text-xl py-2">
                                    Wireframing, sketching, prototyping, product design and design systems.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded bg-white"
                            style={{
                                backgroundImage: `url('/assets/ios-14-large_2x.png')`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Mobile Applications Development
                                </p>
                                <p className="md:text-xl py-2">
                                    Cross platform native and hybrid mobile apps with for Android & iOS.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded"
                            style={{
                                backgroundImage: `url('/assets/macos-big-sur-large_2x.png')`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'left'
                            }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Web Development
                                </p>
                                <p className="md:text-xl py-2">
                                    Secure, beautiful and accessible websites using industries best practises.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded"
                            style={{
                                backgroundImage: `url('/assets/workflow.png')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Machine Learning & AI
                                </p>
                                <p className="md:text-xl py-2">
                                    Intelligent systems, data mining, chat-bots and data driven solutions.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-4 md:p-8 lg:p-12">
                            <div className="w-full h-64 rounded"
                            style={{
                                backgroundImage: `url('/assets/venus-evans-wFZ9SYDiS2M-unsplash.jpg')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}>

                            </div>
                            <div className="py-4">
                                <p className="text-xl md:text-3xl font-bold">
                                    Digital Marketing
                                </p>
                                <p className="md:text-xl py-2">
                                    Increase your online presence, customer engagement and increase conversion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
    )
}