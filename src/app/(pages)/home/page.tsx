"use client"

import ContactMeComp from "@/app/components/ContactComp"
import Hero from "@/app/components/hero"
import AboutMeHome from "@/app/components/homeAbout"
import Recentproject from "@/app/components/recentproject"
const Home = () => {
  return (
    <>
    <div className="bg-white"><Hero/></div>
    <AboutMeHome/>
    <div className="mt-16 mx-6">
      <h2 className="text-4xl ml-10 font-bold">Recent Project</h2>
      <Recentproject/>
    </div>
    <ContactMeComp/>
    </>
  )
}

export default Home