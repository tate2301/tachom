import React from 'react'
import Navbar from './Navbar'
import MacosSection from './sections/macos'
import MobileDevelopmentSection from './sections/mobile'
import WebDesignSection from './sections/web-design'

export default function HeaderTop() {

    return (
        <div className="w-full bg-black text-gray-200 relative">
            <div className='flex flex-wrap justify-center w-full header-top-banner'>
                <div className="black-tint w-full"></div>
                <div className="max-w-5xl h-screen w-full mx-auto lg:px-0 relative">
                    <Navbar />
                    <div className="h-full flex mx-auto py-4 px-4 md:px-0 md:py-8">
                        <div className="w-full lg:w-1/2 flex flex-wrap my-auto">
                            <p className="font-bold text-4xl md:text-6xl my-auto w-full pt-8">
                                We integrate miracles and science
                            </p>
                            <p className="md:text-xl w-full py-4 text-gray-300 font-bold text-white">
                                In all our years of building awesome brands, designing websites and deploying apps. It was never personal. 
                                And we tell you now. What we are about to do, to your brilliant, disruptive idea. You are going to 
                                love it very very much. 
                            </p>
                            <div className="py-8 w-full">
                                <a href="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2" target="_blank" className="text-white py-2 px-8 rounded-full bg-blue-700 font-bold">Tell us your idea</a>
                            </div>
                        </div>
                        <div className="w-0 h-0 lg:w-1/2 lg:h-auto p-8">
                            <div className="w-full h-full bg-techicons"/>
                        </div>
                    </div>
                    
                </div>

                
            </div>
            <div className="py-12 px-4 header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <MobileDevelopmentSection />
                </div>
            </div>
            <div className="py-12 px-4 header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <WebDesignSection />
                </div>
            </div>
            <div className="py-12 px-4 h-620px header-section">
                <div className="p-auto h-full flex flex-wrap">
                    <MacosSection />
                </div>
            </div>
        </div>
    )
}