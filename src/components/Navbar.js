import React from 'react'

export default function Navbar() {

    return(
        <div className='flex space-x-8 py-8 sticky px-4 font-bold'>
                <a href="/" className="my-auto">
                    Home
                </a>
                <a href="/blog" className="my-auto">
                    Blog
                </a>
                <a href="/team" className="my-auto">
                    Hire
                </a>
                <a href="/career" className="my-auto">
                    Careers
                </a>
            </div>
            
    )
}

const a = () => (
    <a href="https://ojn1yd5k2bm.typeform.com/to/nA3tGPK2" target="_blank" className="py-1 px-2 md:px-4 bg-blue-600 text-white font-bold rounded-full">
        Start a project
    </a>
)