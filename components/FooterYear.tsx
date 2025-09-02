'use client'
import React, { useEffect, useState } from 'react'

const FooterYear = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setTime(new Date().getFullYear())
  }, [])
  return <span>{time}</span>
}

export default FooterYear
