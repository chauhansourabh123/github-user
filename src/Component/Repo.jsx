import React from "react";

function Repos({users}) {
    return(
        <div className="flex flex-wrap">
            {
                users.map((user,idx)=>(
                    <div key={idx} className="bg-gray-900 w-2/4 p-3 leading-8 ">
                        <a className="text-teal-400 break-word font-semibold hover:underline" href={user.html_url} target="_blank">{user.full_name}</a>
                        <div className="flex gap-x-5">
                            <h4 className="font-semibold text-xl ">{user.language}</h4>
                            <h4 className="font-semibold text-xl ">Forks: {user.forks}</h4>
                            <h4 className="font-semibold text-xl ">Stars: {user.stargazers_count}</h4>
                        </div>
                    </div>
                 ))
            }
        </div>
    )
}

export default Repos