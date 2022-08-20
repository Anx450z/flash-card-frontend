import axios, { AxiosResponse } from 'axios'
import { useContext } from 'react'
import ClearButton from '../components/common/ClearButton'
import { myContext } from '../Context'

const Navbar = () => {
  const context: any = useContext(myContext)

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
      .get('http://localhost:4000/auth/logout', { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          if (res.data === 'success') {
            window.location.href = '/'
          }
        }
      })
  }

  return (
    <>
      <div className=" fixed top-0 left-0 w-full shadow-sm">
        <div
          className="w-screen items-center justify-between
          bg-white py-4 px-7 md:flex md:px-10">
          <ul
            className="absolute left-0 z-[-1] w-full pb-7
              pl-9 transition-all duration-500 ease-in-out md:static md:z-auto md:flex
              md:w-auto md:items-center md:pb-0 md:pl-0">
            {links.map(link => (
              <li key={link.title} className="my-2 text-xl md:my-0 md:ml-8">
                <a
                  href={link.url}
                  className=" text-2xl font-bold
                  text-blue-500 duration-500  hover:text-blue-900">
                  {link.title}
                </a>
              </li>
            ))}
            {context ? (
              <>
                <ClearButton onClick={handleLogout} tailwind="absolute mx-3 right-0 border-2 px-4 py-2" > Logout</ClearButton>
              </>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="top-0 left-0 w-full mt-[90px]"></div>
    </>
  )
}

export default Navbar
