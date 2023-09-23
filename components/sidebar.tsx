import Image from 'next/image'
import SideNav from './side-nav'

export default function SideBar() {
  return (
    <div className="flex flex-col px-2 my-4 bg-white border-r">
      <div className="flex justify-center items-center gap-4 text-xl font-bold">
        {/* <Image src={Logo} width={40} height={40} alt="Medconnect Logo" /> */}
        <h2>Stockify</h2>
      </div>
      <SideNav />
    </div>
  )
}
