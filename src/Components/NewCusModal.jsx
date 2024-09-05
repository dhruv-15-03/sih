import {  Box, Button, IconButton, Modal, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    outline:"none",
    overFlow:"scroll-y",
    borderRadius:3,
  };

const NewCusModal = ({handleClose,open}) => {
    const handleSubmit=(values)=>{
        console.log("values",values)
        
    }
    const formik=useFormik(
        {
            initialValues:{
                name:"",
                ward:"",
                blood:0,
                glucose:0

            },
            onSubmit:(values)=>{
                console.log(values)
            }
        }
    )
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex justify-between mb-5 items-centre'>
                <div className='flex items-center space-x-3'>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                    <p className='font-semibold'>Create New User Profile</p>
                </div>
                <Button  onSubmit={handleSubmit} type='submit'>Save</Button>
            </div>
            <div className='space-y-3'>
                <TextField
                fullWidth
                id="name"
                name='name'
                label="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                />
                <TextField
                fullWidth
                id="ward"
                name='ward'
                label="ward"
                value={formik.values.ward}
                onChange={formik.handleChange}
                />
                <TextField
                fullWidth
                id="blood"
                name='blood'
                label="blood"
                value={formik.values.blood}
                onChange={formik.handleChange}
                />
                <TextField
                fullWidth
                id="glucose"
                name='glucose'
                label="glucose"
                value={formik.values.glucose}
                onChange={formik.handleChange}
                />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default NewCusModal