
import { useTranslation } from "react-i18next";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";
import { FaReact, FaPython , FaDatabase } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

export function AboutPage() {

  const [t] = useTranslation()
  const about = [
    {id:1 , value:t('about.details.location.value'),description:t('about.details.location.description'), logo: MdOutlineLocationOn }, 
    {id:2 , value:t('about.details.specialty.value'),description:t('about.details.specialty.description'), logo: IoIosLaptop }, 
    {id:3 , value:t('about.details.experience.value'),description:t('about.details.experience.description'), logo: RiStackLine }, 
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
    <div className="flex flex-col mx-2 mt-5 px-4 lg:px-8 gap-8 lg:gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_6fr] ">
        <section>
          <div className="flex flex-col mb-10">
            <p className="uppercase font-bold text-sm mb-6 flex items-center after:ml-4 after:h-px after:flex-after:bg-background/30 after:max-w-25"> {t("about.eyebrow")} </p>
            <h1 className="text-4xl font-bold max-w-137 mb-5 leading-[1.05] lg:text-5xl"> {t("about.title")} </h1>
            <p className="font-light text-lg max-w-135 leading-[1.05] text-"> {t("about.description")} </p>
          </div>
           <div className="flex flex-col mb-5">
            <ul className="grid grid-cols-3">
              {about.map((about)=>{
                 const Logo = about.logo
                 return(
                   <li key={about.id} className="border-r border-border/30 max-w-90 flex items-center">
                    <Logo className="h-full w-[20%]"/>
                    <div className="flex flex-col">
                      <span> {about.value} </span>
                      <span> {about.description} </span>
                    </div>

                  </li>
                 )
              })}
             </ul>
          </div> 
        </section>
        <section>

        </section>
      </div>
      <div className="grid grid-cols-[1fr_1.25fr_1fr] gap-6 px-6 py-4">
        <section className="border-r border-border/30">
          <h2 className="font-semibold uppercase mb-4 leading-[1.05]">{t('about.approach.title')}</h2>
          <p className="font-extralight text-sm max-w-[80%]">{t('about.approach.description')}</p>
        </section>
        <section className="flex flex-col border-r border-border/30 gap-6">
          
          <h2 className="text-left font-semibold uppercase">{t('about.technologies.title')}</h2>
          <div className="flex items-center justify-center">
            <ul className="flex gap-8">
              {logos.map((logos)=>{
                const Logo = logos.logo
                return(
                  <div className="bg-text-secondary/30  p-3 rounded-xl">
                    <li key={logos.id}>
                      <Logo className="size-8"/>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>

        </section>
        <section className="mx-4 mb-5">
          <h2 className="font-semibold uppercase mb-4">{t('about.interests.title')}</h2>
          <div className="">
            <ul className="flex flex-wrap gap-3">
              {
                items.map((item)=>{
                  return(
                    <li className="border border-border rounded-3xl text-sm font-light">
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
