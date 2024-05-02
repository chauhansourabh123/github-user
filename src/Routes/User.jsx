import React, { useEffect, useState, useRef } from "react";
import UserContainer from "../Component/UserContainer";

function User() {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const BaseURL = "https://api.github.com/users"
    const user = useRef("")

    function fetchData() {
        fetch(BaseURL)
            .then((res) => res.json())
            .then((res) => setUsers(res))
    }

    function getValue() {
        if(username !== ''){
            setUsers("")
            fetch(`${BaseURL}/${username}`)
            .then((res)=> res.json())
            .then((res)=> setUsers(()=> [res]))
            setUsername('')
        }
        else{
            fetchData()
        }
    }
    useEffect(() => {
        fetchData()
    }, [setUsers])
    return (
        <div>
            <div className="flex items-center justify-center my-6">

                <input
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    ref={user}
                    type="text"
                    placeholder="Search github username..."
                    className="md:w-1/3 w-2/3 p-2 text-lg rounded-l" />

                <button
                    onClick={getValue}
                    className="bg-teal-500 py-2 px-4 rounded-r text-lg font-semibold text-white">
                    Search
                </button>

            </div>
            <UserContainer users={users} />
        </div>
    )
}

export default User