import { TextField, Typography } from '@mui/material'
import React from 'react'

export default function AddUserTextBox({name, placeholder}) {
  return (
    <div>
        <Typography color="#004286">{name}</Typography>
        <TextField  sx={{ m: 1, width: 350 }} placeholder={placeholder} 
          size="small" />

    </div>
  )
}
