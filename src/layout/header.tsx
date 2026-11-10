import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export function Header() {

  const { t, i18n } = useTranslation();
  const NavItems =[
  {
    label:t("header.work"),
    path:"/", 
  },
  {
    label:t("header.about"),
    path:"/AboutPage", 
  },
  {
    label:t("header.contact"),
    path:"/ContactPage", 
  },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <header className="sticky top-0 z-20 pt-4 sm:pt-6 mx-4">

      <div className="relative bg-background/80 backdrop-blur-md rounded-3xl border border-border/20 overflow-hidden transition-all duration-300">
        <div className="flex justify-between items-center font-primary font-medium uppercase h-20 sm:h-22">
          <div className="hover:translate-0.5 duration-300 px-8">
            <NavLink to="/">
            <img src={Logo} alt="" className=" w-15"/>
            </NavLink>
        </div>
        <div className="flex items-center gap-4 text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300 px-10 md:hidden">
            <button
                onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
              >
                {i18n.language.toUpperCase()}
              </button>
              <button 
              className="md:hidden"
              onClick={onToggle} type="button">           
                  {isOpen ? <IoClose/> : <IoMenu/>}
            </button>
          </div>
        </div>

        {/* Nav para movil */}
        <nav className={`md:hidden ${isOpen? "max-h-48 opacity-100 translate-y-0 p-6 border-t border-white/30 overflow-hidden transition-all duration-300 ease-in-out}": "max-h-0 opacity-0 -translate-y-8 overflow-hidden transition-all duration-300 ease-in-out" }`}>
          <ul className="flex flex-col gap-5">
            {
              NavItems.map((data) => (
                <li className="" key={data.path}>
                  <NavLink 
                  to={data.path}
                  className={({isActive})=>
                  isActive 
                  ? "text-text-secondary font-semibold"
                  : "text-text-primary "
                }> 
                  {data.label}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>


        <nav className="hidden md:flex absolute right-0 top-0 h-22 items-center">
          <ul className="flex gap-8 px-8 items-center text-text-primary">  
              {
                NavItems.map((data) => (
                  <li className=" hover:translate-0.5 duration-300" key={data.path}>
                    <NavLink 
                    to={data.path}
                    className={({isActive})=>
                    isActive 
                    ? "text-text-secondary hover:text-text-secondary font-semibold"
                    : "text-text-primary hover:text-text-secondary "
                  }> 
                    {data.label}
                    </NavLink>
                  </li>
                ))
              }
          </ul>
          <div className="text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300 px-10">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
            >
              {i18n.language.toUpperCase()}
            </button>
          </div>
        </nav>    
      </div>

    </header>
  )
}

