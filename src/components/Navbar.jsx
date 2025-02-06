import { useEffect, useState } from "react";
import Logo from "/logo.png"
import { Link } from "react-router-dom";
import { RiCloseLargeLine, RiMenu2Line, RiMenu3Fill, RiMenu3Line, RiMenuFill, RiShoppingCartLine, RiUserLine } from "react-icons/ri";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 font-parkisans ${
        isScrolled ? "bg-blue-400 shadow-md" : "bg-blue-500 text-white"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between p-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 xxl:px-24">
        <Link to="/">
          <div className="flex items-center gap-2 text-lg font-bold text-darkBlue lg:text-2xl xxl:text-[26px]">
            <img
              src={Logo}
              alt="Sneak Logo"
              className="w-8 xs:w-10 lg:w-12 xxl:w-14 "
            />
            SNEAK MART
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center space-x-6 font-medium lg:text-lg lg:space-x-8 xl:space-x-12">
          <li>
            <Link
              to="/"
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-darkBlue"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-darkBlue"
            >
              CATALOG
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-darkBlue"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-darkBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-darkBlue"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 xs:gap-5 sm:gap-8">
          <button>
            <Link to="/cart">
              <RiShoppingCartLine
                className={`w-6 h-6 lg:w-10 lg:h-6  xxl:w-10 ${
                  isScrolled ? "hover:text-white" : "hover:text-darkBlue"
                }`}
              />
            </Link>
          </button>
          <button>
            <Link to="/login">
              <RiUserLine
                className={`w-5 h-5 lg:w-10 lg:h-6 xxl:w-10 ${
                  isScrolled ? "hover:text-white" : "hover:text-darkBlue"
                }`}
              />
            </Link>
          </button>

          {/* Hamburger Menu */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenuFill
              className={`h-6 w-7 ${
                isScrolled ? "hover:text-white" : "hover:text-darkBlue"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full transform transition-transform duration-700 ease-in-out bg-gray-100 ${
            isMenuOpen ? "translate-x-0 text-darkBlue" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-6 right-5"
            onClick={() => setIsMenuOpen(false)}
          >
            <RiCloseLargeLine className="h-6 w-7 hover:text-primary xs:w-8 xs:h-8" />
          </button>
          <ul className="grid mt-28 space-y-8 font-medium text-xl">
            <li className="mx-auto">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-primary"
              >
                HOME
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-primary"
              >
                CATALOG
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-primary"
              >
                ABOUT
              </Link>
            </li>
            <li className="mx-auto">
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="/"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-primary"
              >
                CONTACT
              </Link>
            </li>

            <div></div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

