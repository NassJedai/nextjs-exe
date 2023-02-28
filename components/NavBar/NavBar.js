import React from 'react';
import Link from 'next/link';
import styles from'./NavBar.module.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}> 

        <Link href="/">
            Accueil
        </Link>

        <Link href="/listes">
            Liste
        </Link>

        <Link href="/isr">
            ISR
        </Link>

        <Link href="/add">
            Add (POST)
        </Link>

        <Link href="/cours">
            Bitcoin
        </Link>

    </div>
  )
}
