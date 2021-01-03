import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GetRecruitedSection from '../components/sections/get-recruited'
import SEO from '../components/seo'
import "../utils/styles.css"

export default function Careers() {

    return(
            <>
                <div className="w-full mx-auto">
                    <SEO title="Team"/>
                    <div className="max-w-5xl mx-auto">
                        <Navbar />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <GetRecruitedSection/>
                    </div>
                </div>
                <Footer/>

            </>
            
    )
}