import Navbar from './navbar'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;