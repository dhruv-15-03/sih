import { Avatar, Button, Card, CardContent, CardHeader, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Progressbar from './Progressbar';
import { useNavigate } from 'react-router';


const New = ({item,value}) => {
  console.log(value)
  const navigate=useNavigate();
  const handleNavigate=(item)=>{
    console.log("Inside Navigate")
    navigate('/user',{state:{item}})
  }
    const check=()=>{
      if(item.med1<10||item.med2<10){
        alert(item.name+" is running low on medicines")
      }
      if(value&&value<10){
        alert(item.name+' is running low on medicine')
      }
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
          <Avatar sx={{ bgcolor: red[500],cursor:'pointer' }} aria-label="recipe"  onClick={()=>handleNavigate(item)}>
            {item.name[0]}
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
        title={item.name}
        subheader= {"Ward No - "+item.ward}
      />
      <CardContent onClick={check()}>
            <Typography variant="h5" component="div" gutterBottom>
              DRIP LEVEL             </Typography>
            {value?<div className=''>
                <Progressbar  value={value} />
                </div>:<div className=''>
                  
            <Progressbar label='med1' value={item.med1} />
            <Progressbar label='med2' value={item.med2} />
            </div>}
          </CardContent>
    </Card>
  )
}

export default New