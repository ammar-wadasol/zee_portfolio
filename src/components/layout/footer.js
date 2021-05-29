import Link from 'next/link'
import { RiSearchLine, RiListSettingsFill, RiHome3Line, RiCalendar2Line } from 'react-icons/ri'

function Footer() {
  return (
    <div className="flex justify-between p-2 md:hidden text-skin-inverted bg-skin-fill">
      <Link href="/home">
        <div className="flex flex-col items-center w-1/4 text-xs cursor-pointer">
          <RiHome3Line className="w-6 h-6" />
          <p>Home</p>
        </div>
      </Link>
      <Link href="/booking">
        <div className="flex flex-col items-center w-1/4 text-xs cursor-pointer">
          <RiCalendar2Line className="w-6 h-6" />
          <p>Booking</p>
        </div>
      </Link>
      <Link href="/batches">
        <div className="flex flex-col items-center w-1/4 text-xs cursor-pointer">
          <RiSearchLine className="w-6 h-6" />
          <p>Find Batch</p>
        </div>
      </Link>
      <Link href="/settings">
        <div className="flex flex-col items-center w-1/4 text-xs cursor-pointer">
          <RiListSettingsFill className="w-6 h-6" />
          <p>Settings</p>
        </div>
      </Link>
    </div>
  );
}

export default Footer;