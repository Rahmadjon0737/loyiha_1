import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Uselocation() {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])
  return (
    <div></div>
  )
}

export default Uselocation