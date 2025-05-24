import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import tokar from "../../assets/Tokar.png"
import { useDispatch, useSelector } from "react-redux"
import { authFail, authStart, logoutSuccess, setToken } from "../../redux/slices/userSlice"
import { logout } from "../../services/authServices"
import { toast } from "sonner"

const NavbarComponent = () => {
  const { user , isAuthenticated} = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const avatarFallback = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();


  const handleLogout = async() => {
    try {
      dispatch(authStart());
      const response = await logout();
      dispatch(logoutSuccess());
      toast.success("Successfully Logged Out !!!");
      dispatch(setToken(null));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
    catch (error) {
      console.log("Error While Loggin Out : " , error.message);
      dispatch(authFail(error.message));
    }
  }

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + Links */}
      <div className="flex items-center space-x-8">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={tokar} alt="Tokar Logo" className="h-20 w-20 rounded-md" />
        </NavLink>
        <NavLink to="/" className="hover:text-emerald-400 text-xl font-semibold">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-emerald-400 text-xl font-semibold">
          About
        </NavLink>
        <NavLink to="/features" className="hover:text-emerald-400 text-xl font-semibold">
          Features
        </NavLink>
      </div>

      {/* Right: Play Button + Profile */}
      <div className="flex items-center space-x-8">
        <motion.button
          onClick={() => navigate('/matchmaking')}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 rounded-lg font-semibold cursor-pointer"
        >
          Play Now
        </motion.button>

        {
          isAuthenticated === true ?
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-1 rounded-full hover:bg-slate-700">
                    <Avatar className="h-8 w-8 cursor-pointer size-14 text-black font-bold">
                      <AvatarFallback>{avatarFallback}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-slate-700 text-white">
                  <DropdownMenuItem>
                    <NavLink to="/profile">Profile</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <NavLink onClick={handleLogout}>Logout</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
            :
            <Button onClick={() => navigate('/login')} variant="outline" className="text-black border-white font-medium cursor-pointer">
              Login
            </Button>
        }
      </div>
    </nav>
  )
}

export default NavbarComponent