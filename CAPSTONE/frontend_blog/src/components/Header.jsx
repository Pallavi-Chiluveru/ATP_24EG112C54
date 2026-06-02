import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";
import logoImg from "../assets/image.png";

function Header() {
  const { isAuthenticated, logout } = useAuth((state) => state);
  const navigate = useNavigate();

  const linkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
      ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 min-h-[4rem]">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer hover:scale-105 transition-transform duration-300">
            <img src={logoImg} alt="InkFlow Logo" className="h-24 w-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-2 sm:space-x-6">
            <NavLink to="/" className={linkStyles}>
              Home
            </NavLink>

            {!isAuthenticated ? (
              <>
                <NavLink to="/register" className={linkStyles}>
                  Register
                </NavLink>
                <NavLink to="/login" className={linkStyles}>
                  Login
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-all duration-300 shadow-md shadow-red-200"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;