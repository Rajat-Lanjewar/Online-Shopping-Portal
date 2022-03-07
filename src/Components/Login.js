import react, { useEffect, useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, makeStyles, Typography} from '@material-ui/core';
import { addUser, getUsers } from './API/api';
import { useNavigate, useParams } from 'react-router-dom';
import img1 from "./Assets/bg.jpg"
import img2 from "./Assets/shop2.jpg"
import { Grid, Box } from '@material-ui/core'

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const styles={
    width: '50%',
    margin: '0 0 0 25%'
}

const text={
    color:'black',
    fontSize: "1.5rem"
}

const bg={
    backgroundColor:'white',
    border:'0.5px solid black'
}

const Login = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData();
    });
    const loadUserData = () => {
        getUsers(id);
    }
    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate.push('./customers');
    }

    return (
        <Box style={{backgroundImage:`url(${img1})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' }}>
        <FormGroup style={styles}>
            <Grid container direction="column" alignItems="center" justify="center">
            <img src={img2}  width="500" height="50%"/> <br/>
        </Grid>
            <Typography style={{color:'black', fontWeight:'bold', fontSize:'2rem', fontFamily:'rockwell', backgroundColor:'#248bfc', border:'3px solid black'}} variant="h4" align='center'>Login</Typography>
            <FormControl style={bg} >
                <InputLabel style={text} htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl style={bg}>
                <InputLabel style={text} htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl style={bg}>
                <InputLabel style={text} htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl style={bg}>
                <InputLabel style={text} htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl >
                <button className="btn btn-dark" variant="contained" color="primary" onClick={() => addUserDetails()}>Add</button>
            </FormControl>
        </FormGroup>
        </Box>
    )
}
export default Login