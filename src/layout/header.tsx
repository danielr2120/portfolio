import { Link } from "react-router-dom"

type HeaderProps = {
  language: 'es' | 'en';
  toggleLanguage: () => void;
  text: {
    work: string;
    about: string;
    contact: string;
  }
};
export function Header({language, toggleLanguage}: HeaderProps) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About US</Link>
        <button onClick={toggleLanguage}>{language.toUpperCase()}</button>
      </nav>
    </header>
  )
}

