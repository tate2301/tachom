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
import BlogTopPostsPreview from "../components/sections/blog-top"
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
              <div className="w-full flex flex-wrap">
                <QualityAssurance />
                <ApplicationArchitecture />
                <Devops/>
              </div>
          </div>


          {/* START: Who we are Section */}
          <div className="py-12 p-4 lg:p-8 max-w-5xl flex mx-auto flex-wrap w-full mt-12">
              <div className="w-full py-4">
                <p className="text-3xl md:text-6xl font-bold">
                  We’re a full-service agency for disruptive companies and startups
                </p>
              </div>
              <div className="py-4 px-2 w-full md:w-1/2 text-xl">
                <p className="my-2">
                  We’re a team of designers and developers who spend our time solving problems and telling 
                  the stories of great companies. We help you think more deeply about what you’re offering 
                  people through your brand, products and services.
                </p>
                <p className="my-2">
                  Our mission is to work with companies who want to change the game. We want to help amazing 
                  tech startups get from zero to one and create beautiful things that make life better.
                </p>

                <p className="py-4">
                  <a href="#" className="text-blue-500 font bold hover:underline px-2">Get to know us</a>
                </p>
              </div>
              <div className="py-4 px-2 w-full md:w-1/2 text-xl">
                <p className="my-2">
                  That first bit (full-service agency) is a cool phrase that basically means we help you 
                  with everything we can, from idea to launch.
                </p>
                <p className="py-4">
                  Once you have a brilliant idea, we can work with you on a gameplan <b>(strategy)</b>, create a gorgeous 
                  logo and styleguide <b>(branding)</b>, design a beautiful, functional app <b>(product design)</b>, turn it into
                  high-performance code <b>(development)</b> and then help people find out about it <b>(motion design)</b>.
                </p>
                <p className="py-4">
                  <a href="#" className="text-blue-500 font bold hover:underline px-2">See what we're good at</a>
                </p>
              </div>
          </div>
          {/* END: Who we are Section */}

          {/*START: Any Project Section */}
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
          {/* END: Any Project Section */}

          <div className="py-12 p-4 lg:p-8 h-screen flex flex-wrap w-full mt-12">
            <BestTeamSection />
          </div>

          <div className="py-12 md:p-4 lg:p-8 min-h-screen flex flex-wrap  w-full mb-12">
            <TaglineSection />
          </div>

          <div className="py-12 w-full">
              <div className="flex flex-wrap justify-center w-auto max-w-5xl w-full mx-auto">
                <TailwindService />
                <Microservices />
              </div>
            </div>
          </div>

          

          
          
        {/* START: Blog Section */}
        <div className="md:py-12 p-4 lg:p-8 max-w-5xl flex mx-auto flex-wrap w-full md:mt-12">
              <div className="w-full py-4">
                <p className="text-yellow-500 py-1 font-bold">FROM THE BLOG</p>
                <p className="text-3xl md:text-6xl font-bold">
                  Our team also loves to write
                </p>
              </div>
              <div className="w-full">
                <BlogTopPostsPreview />        
              </div> 
              <div className="mt-8 flex justify-center w-full">
                <div>
                  <a href="/blog" className="py-2 px-8 border-2 border-blue-600 text-blue-600 font-bold rounded-full">Read more on our blog</a>
                </div>
              </div>
        </div>
        {/* END: Blog Section */}
        
        <Footer/>
      </div>
    </>
    
  )
}

export default IndexPage
