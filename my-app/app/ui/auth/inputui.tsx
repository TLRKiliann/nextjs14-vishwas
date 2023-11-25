"use client";

import { useState } from 'react'

export default function InputUi() {
    const [input, setInput] = useState<string>("");
    return (
        <>
            <p>inputui input :</p>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='text-slate-900'
            />
        </>
    )
}