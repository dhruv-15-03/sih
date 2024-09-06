import {  Box, Button, IconButton, Modal, TextField } from '@mui/material'
import {  useFormik } from 'formik'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { insert } from '../JS/insert';

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
        insert(values)
    }
    const formik=useFormik(
        {
            initialValues:{
                name:"",
                ward:"",
                med1:0,
                med2:0

            },
            onSubmit:(values)=>{
                console.log(values)
                insert(values)
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
                id="med1"
                name='med1'
                label="med1"
                value={formik.values.med1}
                onChange={formik.handleChange}
                />
                <TextField
                fullWidth
                id="med2"
                name='med2'
                label="med2"
                value={formik.values.med2}
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