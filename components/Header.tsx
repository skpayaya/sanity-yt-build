import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mediumLogo from '../images/medium-logo.svg'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Image
            src={mediumLogo}
            alt="Medium Logo"
            width="176px"
            className="cursor-pointer object-contain"
          ></Image>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign in</h3>
        <h3 className="rounded-full border border-green-600 px-4 py-1 ">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
