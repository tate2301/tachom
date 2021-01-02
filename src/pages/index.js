import * as React from "react"
import HeaderTop from "../components/HeaderTop"
import SEO from "../components/seo"
import "../components/css/styles.css"

import "../utils/styles.css"
import TaglineSection from "../components/sections/TaglineSection"
import TailwindService from "../components/cards/tailwind-service"
import BestTeamSection from "../components/cards/best-team"
import Microservices from "../components/cards/microservices"
import PhlebeiaCard from "../components/case-study-products-cards/PhlebeiaCard"
import ApplicationArchitecture from "../components/cards/app-development"
import Devops from "../components/cards/devops"
import QualityAssurance from "../components/cards/quality-assurance"
import Footer from "../components/Footer"
// markup
const IndexPage = () => {
  return (
    <>
      <SEO/>
      <div className='pt-15 text-gray-800 bg-white relative'>
        <div className="flex flex-wrap justify-center">
          <HeaderTop />

          <div className="flex flex-wrap max-w-5xl w-full mx-auto py-8">
              <div className="py-12 px-4 lg:px-0 w-full  font-bold">
                <p className="text-md text-indigo-600">HOW WE CAN HELP</p>
                <p className="text-4xl text-black md:text-6xl">Make technology a competitive advantage in your business.</p>
              </div>
              <QualityAssurance />
              <ApplicationArchitecture />
              <Devops/>
          </div>

          <div className="py-12 p-4 lg:p-8 h-min-screen flex flex-wrap w-full mt-12">
            <div className="w-full h-full rounded-xl bg-gray-100 md:p-8 p-4 lg:p-12 flex flex-wrap max-w-5xl flex mx-auto">
              <div className="m-auto flex-wrap flex text-center justify-center md:w-3/4">
                  <p className="text-3xl font-bold">
                    Bring any project to life. Seriously.
                  </p>
                  <p className="py-8 text-center md:text-lg">
                    Our developers are trained and certified in building software solutions using diverse tools. From Static Sites, 
                    Machine Learning tasks, Wordpress Blogs to Database Management and Data Migration, we have you covered on every
                    step of the implementation of your project.
                  </p>
              </div>
              <div className="flex flex-wrap w-full w-full">
                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-python rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200 p-4">
                    <div className="h-full p-4 bg-wordpress rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-postgresql rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-data rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-webasm rounded-md"></div>
                  </div>
                </div>

                <div className="md:h-36 h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full h-40 w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-webdev rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-gatsby rounded-md"></div>
                  </div>
                </div>

                <div className="h-32 md:h-36 lg:h-48 w-1/2 md:w-1/4 md:p-4 p-2">
                  <div className="mx-auto h-full w-full rounded-xl border-4 border-white shadow-xl bg-gray-200">
                    <div className="h-full p-4 bg-typescript rounded-md"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


          <div className="py-12 p-4 lg:p-8 h-screen flex flex-wrap bg-milk w-full mt-12">
            <BestTeamSection />
          </div>

          <div className="py-12 md:p-4 lg:p-8 h-screen flex flex-wrap  w-full mb-12">
            <TaglineSection />
          </div>


          

          
          <div className="py-12 w-full">
            <div className="flex flex-wrap justify-center w-auto max-w-5xl w-full mx-auto">
              <TailwindService />
              <Microservices />
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
    
  )
}

export default IndexPage
