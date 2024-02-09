'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


import { BsFillBugFill } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";

const NavBar = () => {

  const currentPath = usePathname()

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ]

  return (
    <nav className='navbar'>
      <Link href="/">
        Logo
      </Link>
      <ul className='navbar-links'>
        {links.map((link, index) => (
          <li key={index} className={`navbar-link ${link.href === currentPath ? 'navbar-link-active' : ''}`}>
            <Link href={link.href}>
              <AiFillDashboard />
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar