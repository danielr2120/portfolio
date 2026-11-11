import { useTranslation } from "react-i18next";
import {FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub} from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import Moon from "../assets/moon.jpeg"


export function ContactPage() {
  const [t, i18n ] = useTranslation();
  const contact = [
    {id:1, href:"", logo: FaInstagram , title: t("contact.direct.instagram")},
    {id:2, href:"", logo: FaLinkedinIn , title: t("contact.direct.linkedin")},
    {id:3, href:"", logo: FaWhatsapp, title: t("contact.direct.whatsapp")},
    {id:4, href:"", logo: MdOutlineEmail , title: t("contact.direct.email")},
    {id:4, href:"", logo: FaGithub , title: t("contact.direct.github")},
  ]
  return (
    <div className="grid grid-cols-[4fr_6fr] mx-4 mt-5 px-8">
      <section>
        <div className="flex flex-col gap-8 mb-8">
          <p className="uppercase font-medium text-sm"> {t("contact.eyebrow")} </p>
          <h1 className="text-5xl font-bold"> {t("contact.title")} </h1>
          <p className="font-light"> {t("contact.description")} </p>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h2 className="uppercase font-bold"> {t("contact.direct.title")} </h2>
          <ul className="flex flex-col">
            {contact.map((list)=>{
              const Logo = list.logo
              return(
                <li key={list.id} className="border-b border-border/80">
                  <a href={list.href} className="flex items-center gap-5 py-2 hover:text-hover translate-1 duration-300 text-lg">
                    <Logo/>
                    {list.title}
                    <LuArrowUpRight className="mx-8"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div> 
      </section>

      <section>
        <img src={Moon} alt="" className="w-20 items-center flex" />
      </section>
    </div>

  )
}

