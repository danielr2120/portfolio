import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { useTranslation } from "react-i18next";


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

  
  return (
    <header className="sticky top-0 z-20 pt-4 mx-10 mt-4 px-8">
      <div className="flex justify-between items-center font-primary font-medium uppercase bg-background/85 backdrop-blur-md border-b border-border/20 rounded-2xl h-22">
        <div className="hover:translate-0.5 duration-300 px-8">
          <NavLink to="/">
          <img src={Logo} alt="" className=" w-15"/>
          </NavLink>
          
        </div>
        <nav className="">
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
            <li className="hover:text-text-secondary hover:translate-0.5 duration-300 px-10">
              <button
                onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
              >
                {i18n.language.toUpperCase()}
              </button>
            </li>
          </ul>      
        </nav>    
      </div>

    </header>
  )
}

