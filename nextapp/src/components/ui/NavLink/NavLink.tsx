"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink(props: { text: string, path: string }) {
    const pathname = usePathname()
    return (
        <Link className={pathname === props.path ? 'opacity-10' : ''} href={props.path}>{props.text}</Link>
    )
}
