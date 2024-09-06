import React from 'react'
import img from '../images/pic1.avif'
import New from './New'
import { Avatar, Button, Grid } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import NewCusModal from './NewCusModal';
import { useNavigate } from 'react-router';
const userData=[
  {
    'name':'Rakesh Kumar',
    'ward':345,
    'med1':45,
    'med2':36
  },
  {
    'name':'Mukesh Shamrma',
    'ward':435,
    'med1':87,
    'med2':55
  },
  {
    'name':'Abhinav Thakur',
    'ward':8,
    'med1':60,
    'med2':90
  },
  {
    'name':'Abhijeet Sharma',
    'ward':76,
    'med1':10,
    'med2':30
  },
  {
    'name':'Suman Sangwan',
    'ward':418,
    'med1':70,
    'med2':70
  },
  {
    'name':'Rohit Kumar',
    'ward':600,
    'med1':43,
    'med2':40
  },
]


export const  insertUser=(item)=>{
  userData.push(item)
  console.log(userData)
}
const HomePage = () => {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/user')
  }
  const[openCreatePostModal,setOpenCreatePostModal]=React.useState(false);
  const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false)
    const handleOpenCreatePostModal=()=>{
        setOpenCreatePostModal(true);
    };
    
    
    
  return (
    <div className='min-h-screen bg-center bg-no-repeat bg-cover'style={{ backgroundImage: `url(${img})` }}>
      <div className="flex justify-center ">
        <span className='flex '>
      <header className="pt-6 mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Patient's Status</h1>
        <p className="mt-4 text-lg text-gray-600" id="home-des">
          Welcome to our hospital's patient management system. Here, you can find the latest updates on patient statuses and health records.
        </p>  
      </header>
      <div className='flex items-center pl-5 '>
      <Button sx={{height:'50px',borderRadius:'2px'}} onClick={handleOpenCreatePostModal}>
      <Avatar sx={{bgcolor:blue[400]}}>
        <AddIcon/>
      </Avatar>
      </Button>
      </div>
      </span>
      </div>
      <div item lg={8}>
      <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-9xl">
      {userData.map((item) => (
          <div className="w-full p-4 md:w-1/3">
            <New onClick={handleNavigate} item={item}/>
          </div>
        ))}
        </div>
      </div>
      
      
      <div>
                <NewCusModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}/>
      </div>
      
    
    </div>
  )
}

export default HomePage