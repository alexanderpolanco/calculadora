import Button, { ButtonProps } from '@mui/material/Button'

const propsButton = {
    margin:'2px', 
    fontSize:'1.5em', 
    padding:'2px'
  }
  
  const CustomButtom = (props:ButtonProps) => <Button sx={{...propsButton}} variant="contained" {...props} />

  export default CustomButtom