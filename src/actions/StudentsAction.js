import axios from 'axios';

const url="https://localhost/3001/users"

export default function StudentsAction() {
    return({

        type: 'StudentsAction',

        payload: axios.get(url).then( (result)=> result.data)
    })
}