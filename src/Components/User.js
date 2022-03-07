import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser} from "./API/api"
import { Link } from 'react-router-dom';

const styles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
        border:'2px solid black'
    },
    thead: {
        '& > *': {
            fontSize: 25,
            background: '#000000',
            color: '#f4b409',
            fontStyle: 'italic'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    bedit:{
        background: '#12c8b0',
        color: '#000000',
    },
    bdelete:{
        background: '#d51212',
        color: '#000000',
    }
})

const User= () => {

    const css = styles();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, [])

    // Read Operation
    const getAllUsers = async() => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    // Delete Operation
    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    
    return(
         <Table className={css.table}>
         <TableHead>
             <TableRow className={css.thead}>
                 <TableCell>Id</TableCell>
                 <TableCell>Name</TableCell>
                 <TableCell>Username</TableCell>
                 <TableCell>Email</TableCell>
                 <TableCell>Phone</TableCell>
                 <TableCell></TableCell>
             </TableRow>
         </TableHead>
         <TableBody>
             {users.map((user) => (
                 <TableRow className={css.row} key={user.id}>
                     <TableCell>{user.id}</TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell>{user.username}</TableCell>
                     <TableCell>{user.email}</TableCell>
                     <TableCell>{user.phone}</TableCell>
                     <TableCell>
                         <Button className={css.bedit} variant="contained" style={{marginRight:10}} component={Link} to={`/`}>Home</Button>
                         <Button  className={css.bdelete} variant="contained" onClick={() => deleteUserData(user.id)}>Delete</Button>
                     </TableCell>
                 </TableRow>
             ))}
         </TableBody>
     </Table>
    );
}

export default User