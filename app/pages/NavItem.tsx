import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void; // Permet la fermeture du menu en mobile
}

const NavItem = ({ href, label, onClick }: NavItemProps) => {
  return (
    <li className="flow-root text-center md:text-left">
      <Link
        href={href}
        className="block p-2 text-gray-500 hover:text-orange-400 transition"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
