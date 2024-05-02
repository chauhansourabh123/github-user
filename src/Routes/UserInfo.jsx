import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Tabs from "../Component/Tabs";
import Repos from "../Component/Repo";
import Events from "../Component/Event";
import UserContainer from "../Component/UserContainer";

function UserInfo() {
    const [user, setUser] = useState([])
    const [type, setType] = useState('repos')
    const [infos, setInfos] = useState([])
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const BaseURL = "https://api.github.com/users"

    function getInfo() {
        fetch(BaseURL + pathname)
            .then((res) => res.json())
            .then((res) => setUser(() => [res]))
    }

    function getUrlData() {
        fetch(BaseURL + pathname + `/${type}`)
            .then((res) => res.json())
            .then((res) => setInfos(res))
    }

    useEffect(() => {
        getInfo()
        getUrlData()
    }, [pathname, type])
    return (

        <div className="p-5">
            <button onClick={() => navigate('/')} className="cursor-pointer text-gray-200 bg-teal-600 my-3 py-1 px-4 font-semibold tracking-wide block rounded">Back</button>

            {
                user && user?.map((uinfo, i) => (
                    <div key={i} className="flex items-center justify-center md:flex-row md:px-0 px-4 flex-col gap-10">

                        <img
                            src={uinfo?.avatar_url}
                            alt="userImage"
                            className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto" />

                        <div className="text-white">
                            <h2 className="text-2xl font-bold">{uinfo?.name}</h2>
                            <h3 className="py-2 text-lg font-semibold">Login Name : <span className="text-teal-400">{uinfo?.login}</span></h3>
                            <h3 className="py-2 text-lg font-semibold">Followers : <span className="text-teal-400">{uinfo?.followers}</span></h3>
                            <h3 className="py-2 text-lg font-semibold">Following : <span className="text-teal-400">{uinfo?.following}</span></h3>
                            <h3 className="py-2 text-lg font-semibold">Public Repositories : <span className="text-teal-400">{uinfo?.public_repos}</span></h3>
                            <h3 className="py-2 text-lg font-semibold">Join : <span className="text-teal-400">{new Date(uinfo?.created_at).toLocaleDateString()}</span></h3>


                            <Link
                                to={uinfo?.html_url}
                                target="_blank"
                                className="cursor-pointer text-gray-200 bg-teal-600 my-3 py-1 px-4 font-semibold rounded">
                                Visit
                            </Link>
                        </div>
                    </div>
                ))
            }

            <div>
                <Tabs type={type} setType={setType} />
            </div>
            {type === 'repos' && <div className="grid md:grid-col-3 grid-col-1 gap-1 w-10/12 mx-auto">{infos && <Repos users={infos} />}</div>}
            {type === 'received_events' && <div>{infos && <Events events={infos} />}</div>}
            {type === 'followers' && (
                <div> <UserContainer users={infos} /></div>
            )}

        </div>
    )
}

export default UserInfo