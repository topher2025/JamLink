import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http:127.0.0.1:8000/api/users/' , {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div>
                <h1>JamLink Users</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.username} - {user.instruments}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App;
