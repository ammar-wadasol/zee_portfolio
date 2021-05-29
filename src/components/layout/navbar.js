import Link from 'next/link'

function Navbar() {
  return (
    <div className="flex justify-between px-8 py-4 md:px-12 lg:px-16 text-skin-inverted bg-skin-fill">
      <Link href="/home" className="cursor-pointer">
        <a className="flex items-center">
          <p>Logo Here</p>
        </a>
      </Link>
      <div className="hidden space-x-8 md:flex text-normal md:text-xl">
        <Link href="/booking">Booking</Link>
        <Link href="/batches">Find Batch</Link>
        <Link href="/settings">Setting</Link>
      </div>
    </div>
  )
}

export default Navbar;