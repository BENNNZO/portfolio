'use client'

import { useState, useEffect } from "react"

import Cursor from "@/components/Cursor";

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

	return (
		<main className="bg-black h-screen" onMouseMove={e => setMousePos({ x: e.pageX, y: e.pageY })}>
			<Cursor pos={mousePos}/>
		</main>
	);
}
