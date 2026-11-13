
import { useTranslation } from "react-i18next";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";


export function AboutPage() {
  const [t] = useTranslation()
  const about = [
    {id:1 , value:t('about.details.location.value'),description:t('about.details.location.description'), logo: MdOutlineLocationOn }, 
    {id:2 , value:t('about.details.specialty.value'),description:t('about.details.specialty.description'), logo: IoIosLaptop }, 
    {id:3 , value:t('about.details.experience.value'),description:t('about.details.experience.description'), logo: RiStackLine }, 
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_6fr] mx-2 mt-5 px-4 lg:px-8 gap-8 lg:gap-10">
          <section>
            <div className="flex flex-col mb-10">
              <p className="uppercase font-bold text-sm mb-6 flex items-center after:ml-4 after:h-px after:flex-1 after:bg-background/30 after:max-w-25"> {t("about.eyebrow")} </p>
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
    </div>
  )
}
