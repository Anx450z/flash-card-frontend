import axios, { AxiosResponse } from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ClearButton from '../components/common/ClearButton'
import { myContext } from '../Context'

const Navbar = () => {
  const context: any = useContext(myContext)
  const navigate = useNavigate()

  let links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/',
    },
    {
      title: 'Contact',
      url: '/',
    },
  ]
  if (context) {
    links = [
      {
        title: `${context.firstName}`,
        url: '/',
      },
      {
        title : 'Favorites',
        url: '#'
      }
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

  const handleLogin = () => navigate('/login')

  return (
    <>
      <div className=" fixed top-0 left-0 w-full shadow-sm z-[1]">
        <div
          className="w-screen items-center justify-between
          bg-white/[0.5] py-4 px-7 md:flex md:px-10 backdrop-blur-lg backdrop-saturate-200">
          <ul
            className="absolute left-0 z-[-1] w-full pb-7
              pl-9 transition-all duration-500 ease-in-out md:static md:z-auto md:flex
              md:w-auto md:items-center md:pb-0 md:pl-0">
            {context ? (
              <>
                <img
                  src={context.photo}
                  alt="profile"
                  className="w-[35px] rounded-full border-2 border-black/[0.5]"
                />
                <ClearButton
                  onClick={handleLogout}
                  tailwind="absolute mx-3 right-10 bg-black/[0.1] px-4 py-2">
                  {' '}
                  Logout
                </ClearButton>
              </>
            ) : (
              <ClearButton
                onClick={handleLogin}
                tailwind="absolute mx-3 right-10 bg-black/[0.1] px-4 py-2">
                {' '}
                Login
              </ClearButton>
            )}
            {links.map(link => (
              <li key={link.title} className="my-2 text-xl md:my-0 md:ml-8">
                <a
                  href={link.url}
                  className=" text-2xl font-[500]
                  text-black/[0.5] duration-500  hover:text-black">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="top-0 left-0 mt-[65px] w-full"></div> */}
    </>
  )
}

export default Navbar
