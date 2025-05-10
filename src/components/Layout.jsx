import { Outlet } from "react-router-dom"
import NavbarComponent from "./common/NavbarComponent"
import FooterComponent from "./common/FooterComponent"

const Layout = () => {
  return(
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <NavbarComponent />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  )
}

export default Layout