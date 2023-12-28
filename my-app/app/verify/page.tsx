"use client";

import React, {useState, useEffect} from 'react'

export default function Loading() {

  const [item, setItem] = useState(localStorage.getItem("item"));
  //const item = localStorage.getItem("item");
  console.log(item)

  return (
      <div className="min-h-screen">
        Test page...
      </div>
    )
}