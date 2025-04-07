import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Guidelines", path: "/guidelines" },
    { name: "Approved Parts", path: "/parts" },
    { name: "FAQ", path: "/faq" },
    { name: "Resources", path: "/resources" },
    { name: "Examples", path: "/examples" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-center h-16">
        {navItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <Link to={item.path} className="relative px-6 py-2 transition-colors hover:text-[#177aff] group">
              {item.name}
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#177aff] transition-all duration-300 group-hover:w-[calc(100%-2rem)] -translate-x-1/2"></span>
            </Link>

            {index < navItems.length - 1 && <div className="h-8 w-[1px] bg-blue-800" />}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
