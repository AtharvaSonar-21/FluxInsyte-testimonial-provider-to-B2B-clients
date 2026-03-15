import React from "react";

export default function Loader(){

    return(
        <>
            <div class="flex-col gap-4 w-full flex items-center justify-center">
                <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">
                        <path d="FluxInsyte\src\assets\icons\FluxInsyte_Logo_3-removebg-preview.png"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}