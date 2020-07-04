import React from 'react'
import Link from 'next/link'
import style from './Logo.module.scss'

export function Logo() {
    return <Link href="/">
        <a className={style.Logo} ><span className={style.Logo__Main}>think</span>rx</a>
    </Link>
}