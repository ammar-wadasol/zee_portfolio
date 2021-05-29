import Navbar from './navbar'
import Footer from './footer'

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 p-6 overflow-y-auto md:p-8 md:bg-gray-200">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;