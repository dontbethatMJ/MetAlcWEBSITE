import React from "react";

const TeamMember = ({name, role, description, imageSrc, link}) => {
    return(
        <div className="flex-1 flex flex-col max-w-[300px] text-center text-[#ffffffc8]">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img 
                    src={imageSrc} 
                    alt={name} 
                    className="rounded-full mb-4 w-[8rem] aspect-square mx-auto transition-transform duration-300 hover:scale-110 cursor-pointer" // Added zoom effect and pointer cursor
                />
            </a>
            <div className="font-bold text-xl mb-2 cursor-pointer">
                {name}
            </div>
            <div className="text-sm mb-2 cursor-pointer">
                {role}
            </div>
            <div className="text-sm mb-4 cursor-pointer">
                {description}
            </div>
        </div>
    )
}

export default TeamMember;