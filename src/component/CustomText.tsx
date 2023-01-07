import TextField, {TextFieldProps} from '@mui/material/TextField'

const CustomText = (props:TextFieldProps) => (
    <TextField
                disabled
                fullWidth
                
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": {
                      border: "none"
                    }
                  },
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000"
                }
              }}
                
                {...props}
              />
)
export default CustomText