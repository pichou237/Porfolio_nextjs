import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggle = ({ isOpen, toggleMenu }: MenuToggleProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden text-gray-600 focus:outline-none"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MenuToggle;
