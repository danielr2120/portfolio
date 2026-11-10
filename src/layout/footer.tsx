import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/Logo.svg"
import { useTranslation } from "react-i18next";
import { FaGithub,FaRegCalendarAlt } from "react-icons/fa";
import { FaLinkedin, FaInstagram} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
  
export function Footer() {
  const { t } = useTranslation();
  const footer = {
    navigation: [
      { to: "/", title: t("footer.navigation.work") },
      { to: "/AboutPage", title: t("footer.navigation.about") },
      { to: "/ContactPage", title: t("footer.navigation.contact") }
    ],
    connect:[
      {to: "", title: t("footer.connect.github"), logo: FaGithub},
      {to: "", title: t("footer.connect.linkedin"), logo: FaLinkedin},
      {to: "", title: t("footer.connect.instagram"), logo: FaInstagram},
      {to: "", title: t("footer.connect.email"), logo: MdOutlineMail},
    ]
  };
  return (
    <footer className="mx-10 px-8 pt-12 pb-6">
      <div className="grid grid-cols-4 gap-8 font-primary bg-background/85 border-t border-white/20">
        <div className="">
          <Link to="/">
          <img src={Logo} alt="" className="w-16"/>
          <p className="text-2xl font-bold text-text-primary">DR</p>
          </Link>
          <p className="text-text-primary text-sm">{t("footer.brand.descriptor")}</p>
          <p className="text-text-primary">{t("footer.brand.description")}</p>
        </div>
        <div>
          <ul>
            <h2 className="font-accent font-semibold text-text-primary">{t("footer.navigation.title")}</h2>
            {
              footer.navigation.map((navigation)=>(
              <li>
                <NavLink to={navigation.to} className="font-primary text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300">
                  {navigation.title}
                </NavLink>
              </li>
              ))
            }
          </ul>
          </div>
          <div>
          <ul>
            <h2 className="font-accent font-semibold text-text-primary">{t("footer.connect.title")}</h2>
            {
              footer.connect.map((con)=>{
                const Logo = con.logo
                return(
                  <li>
                  <a href={con.to} className="font-primary text-text-primary hover:text-text-secondary hover:translate-0.5 duration-300 ">
                    {con.title}
                    <Logo/>
                  </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h2 className="font-accent font-semibold text-text-primary">{t("footer.availability.title")}</h2>
          <div className="font-accent font-semibold text-text-primary">
            <FaRegCalendarAlt/>
            <p > {t("footer.availability.message")} </p>

          </div>
                    
        </div>
      </div>
    </footer>

  )
}
