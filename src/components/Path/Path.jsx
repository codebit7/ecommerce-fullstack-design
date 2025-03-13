import React from 'react'
import { FaChevronRight } from "react-icons/fa";

import './path.css'
const Path = () => {

    const items = [
        { label: "Home", href: "/" },
        { label: "Clothings", href: "/clothings" },
        { label: "Men's wear", href: "/mens-wear" },
        { label: "Summer clothing", href: "/summer-clothing" },
      ];
  return (
    <nav className="path container">
      <ol className="path-list">
        {items.map((item, index) => (
          <li key={index} className="path-item">
            <a href={item.href} className="path-link">
              {item.label}
            </a>
            {index < items.length - 1 && <FaChevronRight className="path-separator" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Path
