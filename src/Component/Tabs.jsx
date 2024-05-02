import React from "react";
    

function Tabs({type, setType}) {
    return (
        <>
        <div className="flex justify-center mt-24 gap-10 border-b border-gray-100 py-3">
            <button onClick={() => setType("repos")} className={`${type === 'repos' ? "text-teal-400" : "text-white"} text-xl font-semibold`} >Repositories</button>
            <button onClick={() => setType("received_events")} className={`${type === 'received_events' ? "text-teal-400" : "text-white"} text-xl font-semibold`}>Activity</button>
            <button onClick={() => setType("followers")} className={`${type === 'followers' ? "text-teal-400" : "text-white"} text-xl font-semibold`}>Followers</button>
        </div>
        
        </>
    )
}

export default Tabs;