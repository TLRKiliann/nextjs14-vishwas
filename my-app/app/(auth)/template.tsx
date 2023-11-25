"use client";

import React, { useState } from 'react'

export default function Template({children}: {children: React.ReactNode}) {

    const [input, setInput] = useState<string>("")

    return (
        <>
            <p>template input :</p>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                className='text-black'
            />
            {children}
        </>
    )
}

// Don't forget children ! Otherwise, link.name doesn't be rendered.