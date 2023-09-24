import Image from 'next/image'
import SideNav from './side-nav'

import Logo from '@/public/logo.png'

export default function SideBar() {
  return (
    <div className="flex flex-col px-2 py-4 bg-white dark:bg-popover border-r h-full">
      <div className="flex justify-center items-center gap-4 text-xl font-bold">
        <Image
          src={Logo}
          width={40}
          height={40}
          className="invert"
          alt="Stockify Logo"
        />
        <h2 className="dark:white">Stockify</h2>
      </div>
      <SideNav />
    </div>
  )
}
