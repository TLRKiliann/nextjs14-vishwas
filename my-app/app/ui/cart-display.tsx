"use server";

import React from 'react'
import { genericQuery } from '@/app/lib/db';

export default async function CartDisplay() {
    const request = await genericQuery("Select * FROM cartorder", []);
    const order = JSON.stringify(request);
  
    let total: number = 0;
    if (order) {
        total = JSON.parse(order).reduce((a: number, b: {totalprice: number}) => a += b.totalprice, 0)
    }
    return (
        <div>
            {total}
        </div>
    )
}
