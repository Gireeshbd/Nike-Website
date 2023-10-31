import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constents/index";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="Logo" width={139} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href="item.href"
                className="font-montserrat leading-normal text-slate-gray text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="menu"
            width={50}
            height={45}
            className="p-2 hover:bg-blue-400 rounded-lg scale-50"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
