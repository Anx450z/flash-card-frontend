import axios, { AxiosResponse } from "axios"
import { useContext } from "react"
import Button from "../components/common/Button"
import { myContext } from "../Context"


const Navbar = () => {

  const context:any = useContext(myContext)

  let links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Login',
      url: '/login',
    },
  ]
if (context) {
   links = [
    {
      title: `${context.firstName}`,
      url: '/',
    },
  ]
}

  const handleLogout = () => {
    axios
      .get("http://localhost:4000/auth/logout", { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          if (res.data === "success") {
            window.location.href = "/";
          }
        }
      });
  };

  return (
    <>
      <div className="w-full top-0 left-0">
        <div
          className="md:flex items-center justify-between
          py-4 md:px-10 px-7 bg-indigo-500">
          <ul className="md:flex md:items-center md:pb-0 pb-7 absolute
              md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0
              pl-9 transition-all duration-500 ease-in-out">
            {links.map(link => (
              <li key={link.title} className="md:ml-8 text-xl md:my-0 my-2">
                <a
                  href={link.url}
                  className=" font-bold text-sm
                  hover:text-indigo-600 duration-500  text-slate-100">
                  {link.title}
                </a>
              </li>
            ))}
            {context ? (
              <>
                <Button text="Logout" onClick={handleLogout} />   
              </>
              ) : (null)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
