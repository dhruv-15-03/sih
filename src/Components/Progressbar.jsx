import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const Progressbar = ({label,value}) => {
    const getColor = (value) => {
        if (value > 75) return '#4caf50';  
        if (value > 50) return '#ffeb3b';  
        if (value > 25) return '#ff9800';  
        return '#f44336'; 
      };
  return (
    <Box display="flex" alignItems="center" width="100%" my={4}>
      <Box width="90%" mr={1}>
        <LinearProgress variant="determinate" value={value} sx={{
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