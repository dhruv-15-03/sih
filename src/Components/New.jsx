import { Avatar, Button, Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Progressbar from './Progressbar';
import { useNavigate } from 'react-router';


const New = ({item}) => {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/user')
  }
    
    const[anchorEl,setAnchorEl]=React.useState(null);
     const open=Boolean(anchorEl);
     const handleClick=(event)=>{
          setAnchorEl(event.currentTarget);
     };
     const handleClose=()=>{
          setAnchorEl(null);
     }
  return (
    <Card>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" onClick={handleNavigate}>
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Button
                         id="basic-button"
                         aria-controls={open?'basic-menu':undefined}
                         aria-haspopup="true"
                         aria-expanded={open?'true':undefined}
                         onClick={handleClick}
                         >
                              <MoreVertIcon/>
                         </Button>
                         <Menu
                         id="basic-menu"
                         anchorEl={anchorEl}
                         open={open}
                         onClose={handleClose}
                         MenuListProps={{
                              'aria-labelledby':'basic-button'
                         }}
                         >
                              <MenuItem  onClick={handleClose}>Delete Data</MenuItem>
                         </Menu>
          </IconButton> 
        }
        title="RAKESH "
        subheader="Ward No - 512"
      />
      <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              DRIP LEVEL             </Typography>
            {typeof(item)==='number'?<div className=''>
                <Progressbar  value={item} />
                </div>:<div className=''>
            <Progressbar label='Blood' value={item[0]} />
            <Progressbar label='Glucose' value={item[1]} />
            </div>}
          </CardContent>
    </Card>
  )
}

export default New