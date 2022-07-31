import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Form from 'react-bootstrap/Form';
import SendIcon from '@mui/icons-material/AccountCircle';
import {
    Card,
    Stack,
    Switch,
    TextField,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FormHelperText,
    IconButton,
    Button,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Box,
    FilledInput,
    Input,
    Typography

} from '@mui/material';
import clsx from 'clsx'
import styles from './css/auth.module.css'
import Google from '../icons/google.svg'
import Apple from '../icons/apple.svg'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: "8px",
    height: 480,
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
};

export default function SignUp() {



    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop: string) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [prop]: event.target.value });

    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    const handleChecked = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setChecked(event.target.checked);
    };
    const [checked, setChecked] = React.useState(false);

    return (
        <Card sx={style}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, },
                }}
                noValidate
                autoComplete="off"
            >
                
                    <Typography
                        //   variant="p" color="primary" 
                        sx={{ color: "#e2642c", paddingTop: 2,fontWeight: 100, fontSize: 18, }}>
                        Continue with 
                    </Typography >
                    <Stack
                    direction="row"
                    
                    >
                        <Button startIcon={<Google />}
                            //   variant="secondary" 
                            type="submit"
                            className={clsx("", styles.button)} sx={{marginRight: 2}}>
                            Google
                        </Button>

                        <Button startIcon={<Apple />}
                            //   variant="secondary" 
                            type="submit"
                            className={clsx("", styles.button)}>
                            Apple
                        </Button>
                    </Stack >
                    <Form style={{ alignItems: "center" }}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <TextField label="Email" color="warning" sx={{ m: 0, width: '35ch' }} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FormControl sx={{ m: 0, width: '35ch', borderColor: "#e2642c" }} color="warning" variant="outlined"  >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <FormControlLabel
                                control={
                                    <Switch checked={checked} onChange={handleChecked} name="check" style={{ color: "#e2642c", }} />
                                    // style={{color: "#e2642c"}}
                                }
                                label="Keep me signed in"

                            // inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Form.Group>
                        <Stack
                            sx={{ marginTop: 8 }}
                            direction="row">
                            <Typography gutterBottom
                                //   variant="p" color="primary" 
                                component="div" sx={{ paddingTop: 1, fontWeight: 500, fontSize: 14, }}>
                                <a href='/signup' style={{ color: "#e2642c" }}>Create account</a>
                            </Typography >
                            <Button endIcon={<SendIcon />}
                                //   variant="secondary" 
                                type="submit"
                                sx={{ backgroundColor: "#e2642c", color: "#fff", justifyContent: "right", marginLeft: 11 }}>
                                Submit
                            </Button>

                        </Stack>
                    </Form>
            </Box>
        </Card>
    );
}
