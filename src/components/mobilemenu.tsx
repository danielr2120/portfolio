
import { IoIosMenu } from "react-icons/io";

interface MobileMenuProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const MobileMenu = ({title, isOpen, onToggle, children}: MobileMenuProps) => {

  return (
    <div>
      <button>
        <span>{title}</span>
        <IoIosMenu/>
      </button>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}
