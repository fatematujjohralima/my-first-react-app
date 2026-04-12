import { use } from "react"

export default function Company({fetchUsers}) {
    const users=use(fetchUsers)
    return (
        <div>
            <h3>Company's Employee</h3>
            <p>Total Employee: {users.length}</p>
            <h4>Employee List:</h4>
            <ol>
                {users.map(user => <li>{user.name}, {user.company.name}, {user.address.city}</li>)}
            </ol>
            </div>
        )
    }