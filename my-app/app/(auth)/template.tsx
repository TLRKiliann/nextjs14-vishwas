"use client";

import React, { useState } from 'react'

export default function Template(layoutSwitch: boolean) {

    const [input, setInput] = useState<string>("")

    layoutSwitch = false;

    return (
        <>
            <p>{layoutSwitch === false ? "From template.tsx:" : "From layout.tsx"}</p>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                className='text-black'
            />
        </>
    )
}