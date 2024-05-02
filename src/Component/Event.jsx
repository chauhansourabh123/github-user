import React from "react";
// import { format } from 'timeago.js'

function Events({ events }) {
    return (
        <div className="flex flex-wrap mx-auto items-center justify-center w-10/12">
            {
                events.map((eve, idx) => (

                    <div key={idx} className="flex w-2/4 gap-x-4 items-center py-3">
                        <img src={eve.actor?.avatar_url} className="w-16 rounded-full" />
                        <div>
                            <h4 className="break-words text-xl text-white">
                                {eve.actor?.login} {eve?.type}
                                <br />
                                {eve?.repo?.name}
                                <br />
                                <span className="text-sm">
                                    {eve?.created_at}
                                </span>

                            </h4>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Events