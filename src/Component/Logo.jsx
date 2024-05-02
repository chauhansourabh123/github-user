import React from "react";

function Logo(){
    return (
        <div className="flex items-center justify-center gap-4 border-b border-gray-100 p-8">
            <i className="bi bi-github text-white text-6xl"></i>
            <h1 className="text-white text-2xl first-letter:text-4xl">Github Users</h1>
        </div>
    )
}

export default Logo