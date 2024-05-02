import React from "react";
import { Link } from "react-router-dom";


function UserContainer({ users }) {
    return (

        <div className="flex flex-wrap gap-4 justify-center py-5">
            {users && users.map((user) =>
                user?.login && (
                    <div className="w-[300px] border border-gray-500 bg-gray-900 p-3 flex flex-col items-center" key={user.id}>
                        <img src={user?.avatar_url} alt="avatarImage" className="w-24 mb-4 border-4 border-teal-400 rounded-full" />
                        <h2 className="text-white text-xl">{user?.login}</h2>
                        <h2 className="text-white text-xs text-teal-400">{user?.name}</h2>
                        <Link to={`/${user?.login}`}>
                            <span className="cursor-pointer text-gray-200 bg-teal-600 my-3 py-1 px-4 font-semibold tracking-wide block rounded">View</span>
                        </Link>
                    </div>
                )
            )}
        </div>
    )
}

export default UserContainer