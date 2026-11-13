import { useTranslation } from "react-i18next";
import {FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub} from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import Moon from "../assets/moon.jpeg"
import { Card } from "../components/card";


export function ContactPage() {
  const [t] = useTranslation();
  const contact = [
    {id:1, href:"https://www.instagram.com/danielr_2120/", logo: FaInstagram , title: t("contact.direct.instagram"), user:"@danielr_2120"},
    {id:2, href:"https://www.linkedin.com/in/danielrevelo2120/", logo: FaLinkedinIn , title: t("contact.direct.linkedin"), user: "/danielrevelo2120"},
    {id:3, href:"https://wa.me/+573107737883", logo: FaWhatsapp, title: t("contact.direct.whatsapp"), user:"+57 310 773 7883"},
    {id:4, href:"", logo: MdOutlineEmail , title: t("contact.direct.email"), user: "danielrevelo2120@gmail.com"},
    {id:5, href:"https://github.com/danielr2120", logo: FaGithub , title: t("contact.direct.github"), user: "/danielr2120"},
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_6fr] mx-2 mt-5 px-4 lg:px-8 gap-8 lg:gap-10">
      <section>
        <div className="flex flex-col mb-10">
          <p className="uppercase font-bold text-sm mb-6 flex items-center after:ml-4 after:h-px after:flex-1 after:bg-background/30 after:max-w-25"> {t("contact.eyebrow")} </p>
          <h1 className="text-4xl font-bold max-w-137 mb-5 leading-[1.05] lg:text-5xl"> {t("contact.title")} </h1>
          <p className="font-light text-lg max-w-135 leading-[1.05]"> {t("contact.description")} </p>
        </div>
        <div className="flex flex-col mb-5">
          <h2 className="uppercase font-bold mb-4"> {t("contact.direct.title")} </h2>
          <ul className="flex flex-col">
            {contact.map((list)=>{
              const Logo = list.logo
              return(
                <li key={list.id} className="border-b border-border/30 max-w-90">
                  <a href={list.href} target="_blank" className="flex items-center gap-5 py-1 hover:text-hover duration-300 group">
                    <Logo className=""/>
                    <div className="flex-1">
                      <p className="font-bold">{list.title}</p>
                      <p className="font-extralight text-sm">{list.user}</p>
                    </div>

                    <LuArrowUpRight className="ml-auto group-hover:translate-1 group-hover:-translate-y-1 ease-out duration-300 group-hover:scale-120"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div> 
      </section>

      <section>
        <div className="w-full h-150 border-border rounded-3xl relative">
          <img src={Moon} alt="" className="rounded-3xl object-cover w-full h-full" />
          <Card className="absolute bottom-5 right-5 w-[60%]">
            { 
              <div className="text-black ml-6 mr-3">
                <span className="flex items-center font-extralight after:border-r after:flex-1 after:border-border/20 after:border mb-4 gap-3 after:max-w-20">
                {t("contact.availability.title")}
                </span>
                <h2 className="text-2xl font-extrabold leading-[0.90] mb-4 lg:text-3xl">{t("contact.availability.heading")}</h2>
                <p className="text-sm font-extralight">{t("contact.availability.message")}</p>
              </div>
             }
        </Card>
        </div>

          
      </section>
    </div>

  )
}

