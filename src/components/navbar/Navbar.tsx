import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdown] = useState<boolean>(false)
  return (
    <div className="w-screen p-4 text-2xl flex flex-col items-center bg-primary-2 text-primary-4 font-semibold relative mb-4 md:flex-row md:justify-between">
      <Link
        className={`md:hidden flex justify-cente r items-center p-0.5 ${
          isDropdownOpen && 'border-b'
        }`}
        to="/"
      >
        AE
      </Link>
      <Link to="/" className="md:inline hidden ">
        Academic-Enroll
      </Link>
      <div
        className={`${
          !isDropdownOpen ? 'hidden' : 'w-screen'
        } flex flex-col items-center text-lg text-primary-3 mt-2 md:block md:flex-row`}
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-primary-4 mx-2' : 'mx-2'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/features"
          className={({ isActive }) =>
            isActive ? 'text-primary-4 mx-2' : 'mx-2'
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/studentlogin"
          className={({ isActive }) =>
            isActive ? 'text-primary-4 mx-2' : 'mx-2'
          }
        >
          Student
        </NavLink>
        <NavLink
          to="/adminlogin"
          className={({ isActive }) =>
            isActive ? 'text-primary-4 mx-2' : 'mx-2'
          }
        >
          Admin
        </NavLink>
      </div>

      <button
        className={`md:hidden flex absolute right-6 ${
          !isDropdownOpen && 'text-primary-3'
        }`}
        onClick={() => setDropdown((prev) => !prev)}
      >
        ☰
      </button>
    </div>
  )
}

export { Navbar }
