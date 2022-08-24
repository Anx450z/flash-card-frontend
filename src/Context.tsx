import React, { createContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

export const myContext = createContext({})

function Context(props: any) {
  const [userObject, setUserObject] = useState<any>()

  useEffect(() => {
    axios
      .get('https://ankur-flash-card-backend.herokuapp.com/getuser', { withCredentials: true, headers : { 'user-agent': 'not axios'} })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data)
        }
      })
  }, [])

  return <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
}

export default Context
