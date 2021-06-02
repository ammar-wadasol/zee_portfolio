import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'

function Navbar() {
  return (
    <div className=" w-full flex justify-between items-center px-32 py-5" >
      <div className="flex items-center space-x-14">
        <Link href="/home" className="cursor-pointer">
          <a className="flex items-center text-red-500 space-x-3">
            <p className="text-5xl font-semibold ">Juno </p>
            <div className="capitalize">
              <p className="text-sm">formerly </p>
              <p className="text-sm">hackeryou </p>
            </div>
          </a>
        </Link>

        <div className="flex items-center space-x-14">
          <Link href="/booking">Free Events</Link>

          <Link href="/booking">
            <a className="flex items-center space-x-2">
             <p>
           courses  
              </p>
              <BsChevronDown className="w-3 h-3"/>
            </a>
          </Link>

          <Link href="/batches">Bootcamps</Link>
          <Link href="/settings">About</Link>
          <Link href="/settings">ForCompanies</Link>
        </div>
      </div>
      <div>
        <button className="bg-red-500 text-white px-4 py-2 capitalize">
          apply now
</button>
      </div>
    </div>
  )
}

export default Navbar;