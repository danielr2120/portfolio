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
      <div className="font-primary bg-background/85 border-t border-white/20">
        <div className="flex items-center">
          <Link to="/">
          <img src={Logo} alt="" className="w-20"/>
          <p className="text-7xl font-bold text-text-primary">DR</p>
          </Link>
          <p className="text-text-primary">{t("footer.brand.descriptor")}</p>
          <p className="text-text-primary">{t("footer.brand.description")}</p>
        </div>
        <div>
          <ul>
            <h2>{t("footer.navigation.title")}</h2>
            {
              footer.navigation.map((navigation)=>(
              <li>
                <NavLink to={navigation.to}>
                  {navigation.title}
                </NavLink>
              </li>
              ))
            }
          </ul>
          <ul>
            <h2>{t("footer.connect.title")}</h2>
            {
              footer.connect.map((con)=>{
                const Logo = con.logo
                return(
                  <li>
                  <NavLink to={con.to}>
                    {con.title}
                    <Logo/>
                  </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h2>{t("footer.availability.title")}</h2>
          <FaRegCalendarAlt/>
          <p> {t("footer.availability.message")} </p>
          
        </div>
      </div>
    </footer>

  )
}
