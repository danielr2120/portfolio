import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { useTranslation } from "react-i18next";
import { FaGithub,FaRegCalendarAlt, FaPlus} from "react-icons/fa";
import { FaLinkedin, FaInstagram} from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import { useState } from "react";

  
export function Footer() {
  const { t } = useTranslation();
  const footer = {
    navigation: [
      { to: "/", title: t("footer.navigation.work") },
      { to: "/AboutPage", title: t("footer.navigation.about") },
      { to: "/ContactPage", title: t("footer.navigation.contact") }
    ],
    connect:[
      {to: "https://github.com/danielr2120", title: t("footer.connect.github"), logo: FaGithub},
      {to: "", title: t("footer.connect.linkedin"), logo: FaLinkedin},
      {to: "https://www.instagram.com/danielr_2120/", title: t("footer.connect.instagram"), logo: FaInstagram},
      {to: "", title: t("footer.connect.email"), logo: MdOutlineMail},
    ]
  };
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const onToggle = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <footer className="mx-4 pt-2 border-t border-white/80">
      <div className="bg-background/80">

      
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_3fr] gap-3 font-primary sm:gap-8">
        <div className="border-r border-white/20 sm:border-none md:border-none">
          <div className="hover:translate-1 duration-300 mb-4">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="" className="w-14"/>
              <p className="text-5xl text-text-primary">DR</p>
            </Link>
          </div>

          <p className="text-text-primary text-xs font-bold mt-1">{t("footer.brand.descriptor")}</p>
          <p className="text-text-primary text-sm pt-5">{t("footer.brand.description")}</p>
        </div>

        <div className="hidden  md:flex flex-col">
          <h2 className="font-accent font-semibold text-text-primary mb-5">{t("footer.navigation.title")}</h2>
          <ul className="space-y-3">
            {
              footer.navigation.map((navigation)=>(
              <li key={navigation.to}>
                <NavLink to={navigation.to} className="font-primary text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300 text-lg font-extralight flex">
                  {navigation.title}
                </NavLink>
              </li>
              ))
            }
          </ul>
        </div>

        {/* Navigation Responsive */}
        <div className="flex flex-col w-full border-t border-white/80 md:hidden">
          <div className="flex items-center justify-between mt-2 mb-2 min-h-10">
            <h2 className="font-accent font-semibold text-text-primary">{t("footer.navigation.title")}</h2>
            <button className="md:hidden text-white" onClick={() => onToggle("navigation")}>
              {openMenu === "navigation" ?  <RiSubtractLine/> : <FaPlus/>}
            </button>
          </div>
            <ul className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
              openMenu === "navigation"
                ? "gap-4 pt-3 pb-2 max-h-40 opacity-100 px-3"
                : "gap-0 py-0 max-h-0 opacity-0 px-3 -translate-y-2"
            }`}>
            {
              footer.navigation.map((navigation)=>(
              <li key={navigation.to}>
                <NavLink to={navigation.to} className="font-primary text-text-primary duration-300 text-lg font-extralight">
                  {navigation.title}
                </NavLink>
              </li>
              ))
            }
          </ul>
        </div>

        <div className="border-r border-white/20 hidden md:flex flex-col">
          <div>
            <h2 className="font-accent font-semibold text-text-primary mb-5">{t("footer.connect.title")}</h2>
          </div>
          
          <ul className="space-y-3">
            {
              footer.connect.map((con)=>{
                const Logo = con.logo
                return(
                  <li key={con.title}>
                    <a href={con.to} className="font-primary text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300 flex items-center gap-7 font-light text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Logo className="w-7 h-auto"/>
                      {con.title}
                      
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <div className="flex flex-col w-full border-t border-white/80 md:hidden">
          <div className="flex items-center justify-between mt-2 mb-2 min-h-10">
            <h2 className="font-accent font-semibold text-text-primary">{t("footer.connect.title")}</h2>
            <button className="md:hidden text-white" onClick={() => onToggle("connect")}>
              {openMenu === "connect" ?  <RiSubtractLine/> : <FaPlus/>}
            </button>
          </div>
          
          <ul className={`flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "connect" ? 
                "gap-4 pt-3 pb-2 max-h-60 opacity-100 px-3"
                : "gap-0 py-0 max-h-0 opacity-0 px-3 -translate-y-2"}`}>
            {
              footer.connect.map((con)=>{
                const Logo = con.logo
                return(
                  <li key={con.title}>
                    <a href={con.to} className="font-primary text-text-primary hover:text-text-secondary    hover:translate-0.5 duration-300 flex items-center gap-7 font-light text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Logo className="w-7 h-auto"/>
                      {con.title}
                      
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>


        <div className="border-t border-white/80 sm:border-none">
          <h2 className="font-accent font-semibold text-text-primary mb-2 mt-2">{t("footer.availability.title")}</h2>
          <div className="font-accent font-semibold text-text-primary flex items-center gap-3 font">
            <FaRegCalendarAlt className="w-7 h-auto"/>
            <p className="font-extralight"> {t("footer.availability.message")} </p>

          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mx-8 py-4 text-text-primary border-t border-white/80 sm:flex-row sm:justify-between">
        <p className="text-center">© {new Date().getFullYear()} <strong>Daniel Revelo</strong>  {t("footer.bottom.copyright")}</p>
        <div className="flex items-center">
          <FiMapPin/>
          <p>{t("footer.bottom.location")}</p>
        </div>
      </div>
      </div>
      
    </footer>

  )
}
