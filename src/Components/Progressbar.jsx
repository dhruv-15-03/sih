import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const Progressbar = ({label,value}) => {
  const getColor = (value) => {
    if (value >= 100) return '#00e676';  
    if (value >= 75) return `rgba(76, 175, 80, ${value / 100 + 0.3})`; 
    if (value >= 50) return `rgba(255, 235, 59, ${(100 - value) / 100 + 0.3})`;  
    if (value >= 25) return `rgba(255, 152, 0, ${(100 - value) / 100 + 0.4})`; 
    if (value >= 10) return `rgba(244, 67, 54, ${(100 - value) / 100 + 0.5})`;  
    return '#ff1744';  
  };
  return (
    <Box display="flex" alignItems="center" width="100%" my={4}>
      <Box width="90%" mr={1}>
        <LinearProgress variant="determinate" value={value} sx={{
          height:10,
          borderRadius:2,
            bgcolor: 'transparent',
            '& .MuiLinearProgress-bar': {
              backgroundColor: getColor(value),},
            }}/>
      </Box>
      <Box minWidth={35}>
        {label?<p className='font-semibold'>{label}</p>:<p/>}
        <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default Progressbar