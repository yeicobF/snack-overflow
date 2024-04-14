import Image from "next/image";
import React, { useState, useEffect } from 'react';
import {Record} from '@/components/record';

export default async function Home() {

    return (
        <div>
            <h2>Orders listed</h2>
            <Record/>
        </div>
    )
}