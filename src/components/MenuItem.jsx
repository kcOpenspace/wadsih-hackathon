import React from 'react'
import { Button } from '@mui/material'

const MenuItem = ({name, status}) => {
  return (
    <Button variant="contained" size="large" style={{margin: '10px'}}>{name}</Button>
  )
}

export default MenuItem