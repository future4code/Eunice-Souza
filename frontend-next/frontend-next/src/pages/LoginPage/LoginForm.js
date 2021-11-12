import React, {useState} from "react"
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {login} from "../../services/user"


import {InputsContainer, LoginFormContainer} from "./styled"

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (form.password.length < 6) {
            alert("Digite uma senha maior que 8 caracteres")
        } else {
            login(form, clear, history, setIsLoading)
        }
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />

                    <FormControl variant="outlined" style={{ width: '100%', marginTop: 20, marginBottom: 8 }}>
                    <InputLabel htmlFor="passwordField" style={{ margin: -7, marginLeft: 1 }}>Senha</InputLabel>
                    <OutlinedInput
                        id="passwordField"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        margin={'dense'}
                        endAdornment={
                            <InputAdornment position="end" style={{marginBottom: 8}}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={e => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={50}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Deve ter no mínimo 6 dígitos</FormHelperText>
                </FormControl>
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Login</>}
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm