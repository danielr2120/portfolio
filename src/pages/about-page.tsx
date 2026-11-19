
import { useTranslation } from "react-i18next";
import { MapPin, Laptop, Layers } from "lucide-react";
import { FaReact, FaPython , FaDatabase } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import About_Photo from "../assets/moon2.jpg"

export function AboutPage() {

  const [t] = useTranslation()
  const about = [
    {id:1 , value:t('about.details.location.value'),description:t('about.details.location.description'), logo: MapPin }, 
    {id:2 , value:t('about.details.specialty.value'),description:t('about.details.specialty.description'), logo: Laptop }, 
    {id:3 , value:t('about.details.experience.value'),description:t('about.details.experience.description'), logo: Layers }, 
  ]
  const logos = [
    {id: 4, logo: FaReact}, 
    {id: 5, logo: FaPython}, 
    {id: 6, logo: FaDatabase}, 
    {id: 7, logo: SiVite}, 
    {id: 8, logo: BsTypescript}, 
    {id: 9, logo: RiTailwindCssFill}, 
  ]

  const items = t("about.interests.items", { returnObjects: true }) as string[];

  return (
    <div className="flex flex-col mx-2 mt-5 px-4 xl:px-12 lg:px-8 gap-10 lg:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55fr_45fr] gap-8">
        <section className="">
          <div className="flex flex-col mb-10">
            <p className="uppercase font-bold max-w-190 text-sm mb-6 flex items-center after:ml-4 after:h-px after:flex-1 after:bg-background/30 after:max-w-25"> {t("about.eyebrow")} </p>
            <h1 className="text-4xl max-w-180 font-bold mb-5 leading-[1.05] lg:text-5xl"> {t("about.title")} </h1>
            <p className="font-light text-lg max-w-160 leading-[1.05] text-"> {t("about.description")} </p>
          </div>
           <div className="flex flex-col mb-5 items-star">
            <ul className="grid gap-2 mx-4 min-w-0 divide-y xl:grid-cols-3 xl:divide-y-0 xl:divide-x divide-border/20">
              {about.map((about)=>{
                 const Logo = about.logo
                 return(
                   <li key={about.id} className="flex items-center gap-4 mx-3 py-4">
                    <Logo className="md:size-4 lg:size-6 xl:size-8 shrink-0"/>
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-lg"> {about.value} </span>
                      <span className="font-light text-sm"> {about.description} </span>
                    </div>
                  </li>
                 )
              })}
             </ul>
          </div> 
        </section>
        <section>
          <img src={About_Photo} alt="" className=" rounded-2xl object-cover w-full h-full"/>
        </section>
      </div>
      <div className="lg:grid grid-cols-[1fr_1.25fr_1fr] gap-6 py-4 w-full">

        <section className="flex flex-col py-4 border-b border-border/30 gap-4 lg:border-r lg:border-b-0">

          <h2 className="font-semibold uppercase leading-[1.05]">{t('about.approach.title')}</h2>
          <p className="font-extralight text-sm max-w-[80%]">{t('about.approach.description')}</p>

        </section>

        <section className="flex flex-col  gap-6 py-4 border-b border-border/30 lg:border-r  lg:border-b-0">
          
          <h2 className="text-left font-semibold uppercase">{t('about.technologies.title')}</h2>
          <div className="flex items-center mr-6 justify-center">
            <ul className="grid grid-cols-3 md:flex   lg:flex gap-6 p-0">
              {logos.map((logos)=>{
                const Logo = logos.logo
                return(
                  <div className="bg-text-secondary/30 p-3 rounded-xl hover:bg-hover/30 hover:translate-1 duration-300 ">
                    <li key={logos.id} className="">
                      <Logo className="size-6 lg:size-8 hover:rotate-360 transition-transform duration-500"/>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>

        </section>
 
        <section className=" py-4">
          
          <h2 className="font-semibold uppercase mb-4">{t('about.interests.title')}</h2>
          <div className="">
            <ul className="flex flex-wrap gap-3">
              {
                items.map((item)=>{
                  return(
                    <li className="p-2 border border-border rounded-3xl text-sm font-light">
                      <p>{item}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>

        </section>
      </div>
      
    </div>
    
  )
}
