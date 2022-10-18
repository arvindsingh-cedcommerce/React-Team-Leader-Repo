import { Box, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React, { useState } from 'react'
import './todo.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { connect } from 'react-redux';
import { manageStateToDispatch, manageStateToProps } from '../redux/ManageStates';



function Todo(props) {
  const [value, setValue] = useState('')
  const [Index, setIndex] = useState()
  const [editIncompleted, setEditIncompleted] = useState(false);
  const [editCompleted, setEditCompleted] = useState(false)
  console.log(props.todo_list)
  const handleAdd = (value) => {
    if (value) {
      props.Add(value)
      setValue('')
    }
  }
  const handleDelete = (index) => {
    props.delete(index)
  }
  const Edit = (index) => {
    setEditIncompleted(true)
    setIndex(index)
    setValue(props.todo_list[index])

  }
  const handleEdit = () => {
    if (value) {
      props.edit(value, Index)
      setValue('')
      setEditIncompleted(false)
    }
  }
  const Checked = (index) => {
    props.checked(index)
    props.delete(index)
  }
  const handleDelete2 = (index) => {
    props.delete2(index)
  }
  const Edit2 = (index) => {
    setEditCompleted(true)
    setIndex(index)
    setValue(props.completed_list[index])
  }
  const handleEdit2 = () => {
    if (value) {
      props.edit2(value, Index)
      setValue('')
      setEditCompleted(false)
    }
  }
  const unChecked = (index) => {
    props.unchecked(index)
    props.delete2(index)
  }
  return (
    <div className='main-div'>
      <FormControl variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              >
                {editIncompleted ? <UpgradeIcon onClick={handleEdit} /> :
                  editCompleted ? <UpgradeIcon onClick={handleEdit2} /> :
                    <AddCircleIcon onClick={() => handleAdd(value)} />}
              </IconButton>
            </InputAdornment>
          }
          placeholder='Enter Todo'
        />
      </FormControl>
      <div className='incomplete'>
        <Box sx={{ width: '385px', m: 'auto', pl: 1, pb: '10px', border: '1px solid gray', borderRadius: '5px' }}>Incomplete</Box>
        {props.todo_list.map((todo, index) => (
          <Grid container className='incomplete-box' key={todo}>
            <Grid item xs={10}><FormControlLabel control={<Checkbox onClick={() => Checked(index)} />} label={todo} /></Grid>
            <Grid item xs={2} sx={{ textAlign: 'center', pt: 1 }}><DriveFileRenameOutlineIcon sx={{ pr: 1, color: 'rgb(50, 150, 243)', cursor: 'pointer' }} onClick={() => Edit(index)} />
              <DeleteOutlinedIcon sx={{ pr: 1, color: 'rgb(253, 83, 83)', cursor: 'pointer' }} onClick={() => handleDelete(index)} /></Grid>
          </Grid>
        ))}
      </div>
      <div className='complete'>
        <Box sx={{ width: '385px', m: 'auto', pl: 1, pb: '10px', border: '1px solid gray', borderRadius: '5px' }}>Complete</Box>
        {props.completed_list.map((completed, index) => (
          <Grid container className='complete-box' key={completed} >
            <Grid item xs={10}><FormControlLabel control={<Checkbox defaultChecked onClick={() => unChecked(index)} />} label={completed} /></Grid>
            <Grid item xs={2} sx={{ textAlign: 'center', pt: 1 }}><DriveFileRenameOutlineIcon sx={{ pr: 1, color: 'rgb(50, 150, 243)', cursor: 'pointer' }} onClick={() => Edit2(index)} />
              <DeleteOutlinedIcon sx={{ pr: 1, color: 'rgb(253, 83, 83)', cursor: 'pointer' }} onClick={() => handleDelete2(index)} /></Grid>
          </Grid>
        ))}
      </div>
    </div>
  )
}

export default connect(manageStateToProps, manageStateToDispatch)(Todo)


// practice makes a man better