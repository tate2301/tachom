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


                    <div className="py-12 mt-12">
                        <p className="py-4 text-3xl md:text-6xl font-bold">
                            Want to be part of a greater something?
                        </p>
                        <p className="text-xl md:text-3xl font-bold">
                            Become a member of the Tachom Developer Group, where individual imaginations gather together to pave the way to 
                            innovation. Here, you do more than just contribute to organizations — you engineer their success.
                        </p>
                    </div>

                    <div className="py-12 flex flex-wrap">
                        <div className="p-4 w-full md:w-1/2">
                                <div className="h-48 rounded bg-gray-100 p-8">
                                    <p className="py-1 font-bold md:text-xl">About us</p>
                                    <p className="py-1 font-bold text-2xl md:text-3xl">See what drives us</p>
                                </div>
                                <div className="h-48 rounded bg-gray-100">
                                    
                                </div>
                        </div>

                        <div className="p-4 w-full md:w-1/2">
                            <div className="h-48 h-full rounded bg-gray-100 p-8" 
                            style={{
                                backgroundImage: `url('/assets/macos-big-sur-large_2x.png')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}>
                                <div className="back-tint"></div>
                                <p className="py-1 font-bold md:text-xl">Teams</p>
                                <p className="py-1 font-bold text-2xl md:text-3xl">Find your calling</p>
                            </div>
                            <div className="h-48 rounded bg-gray-100">
                                
                            </div>
                        </div>

                        <div className="p-4 w-full md:w-1/2">
                                <div className="h-48 rounded bg-gray-100 p-8">
                                    <p className="py-1 font-bold md:text-xl">Digital Marketing</p>
                                    <p className="py-1 font-bold text-2xl md:text-3xl">What? We play at work?</p>
                                </div>
                                <div className="h-48 rounded bg-gray-100">
                                    
                                </div>
                        </div>

                        <div className="p-4 w-full md:w-1/2">
                                <div className="h-48 rounded bg-gray-100 p-8">
                                    <p className="py-1 font-bold md:text-xl">Support</p>
                                    <p className="py-1 font-bold text-2xl md:text-3xl">Bring people skills</p>
                                </div>
                                <div className="h-48 rounded bg-gray-100">
                                    
                                </div>
                        </div>
                    </div>

                    <div className="divide-y w-full py-8">
                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Prepare
                            </p>
                            <p className="w-full md:w-3/4">
                                At Tachom we take our clients seriously, that means we have to employ people who will add value to what
                                we can deliver to our clients. We love working with honest and authentic people, passionate about their 
                                work. You don’t need 10 years experience or a PhD in Psychology, you just need to know what you’re doing 
                                and understand why it’s so important in the grand scheme of things.
                            </p>
                        </div>

                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Apply
                            </p>
                            <p className="w-full md:w-3/4">
                                Now that you know how you can add value to our team, its time to apply. Send us an email at <span className="font-bold">careers@tachom.co.zw </span> 
                                telling us how you can add value to our team. Focus on your strengths and ambitions. There are no requirements 
                                but you must be at least be of legal working age.
                                
                                <br/><br/>Please do not send us your CV.
                            </p>
                        </div>

                        <div className="w-full py-12 flex flex-wrap justify-between">
                            <p className="w-full md:w-1/4 font-bold text-3xl py-2">
                                Interview
                            </p>
                            <p className="w-full md:w-3/4">
                                After we receive your application, we will see if there are any fitting roles for you and get back to you. 
                                If necessary we will create a role for you, our team is not built in stone. The customer isn’t always right… 
                                so it’s our job to teach them. We care deeply about our clients, working to give them the tools to succeed 
                                on their own and provide value wherever we’re able to. You might be the tool the they need, see you in your 
                                interview.

                                <br/><br/>
                                We will reply you even if there is no role for you. We are good people.
                            </p>
                        </div>
                    </div>
                </div>
            </>
            
    )
}