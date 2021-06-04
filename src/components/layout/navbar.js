import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'

function Navbar() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full px-12 py-4 mx-20 " >
        <div className="flex items-center space-x-14">
          <Link href="/home" className="cursor-pointer">
            <a className="flex items-center space-x-3 text-red-500">
              <p className="text-5xl font-semibold ">Juno </p>
              <div className="capitalize">
                <p className="text-sm ">formerly </p>
                <p className="text-sm">hackeryou </p>
              </div>
            </a>
          </Link>
          <div className="flex items-center space-x-9">
            <Link href="/events">Free Events</Link>
            <Link href="/courses">
              <a className="flex items-center space-x-2">
                <p>Courses</p>
                <BsChevronDown className="w-3 h-3" />
              </a>
            </Link>
            <Link href="/bootcamps">
              <a className="flex items-center space-x-2">
                <p>Bootcamps</p>
                <BsChevronDown className="w-3 h-3" />
              </a>
            </Link>
            <Link href="/about">
              <a className="flex items-center space-x-2">
                <p>About</p>
                <BsChevronDown className="w-3 h-3" />
              </a>
            </Link>
            <Link href="/companies">
              <a className="flex items-center space-x-2">
                <p>ForCompanies</p>
                <BsChevronDown className="w-3 h-3" />
              </a>
            </Link>
          </div>
        </div>
        <div className="pr-32 mr-10">
          <button className="px-5 py-2 text-white capitalize bg-red-500">apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;