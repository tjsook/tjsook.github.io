import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={style.navbar}>
      <div className={style.navContainer}>
        <h1 className={style.logo}>Tyler's Personal Website</h1>
        <nav className={style.navLinks}>
          <Link href="/" className={style.navLink}>
            Home
          </Link>
          <Link href="/portfolio" className={style.navLink}>
            Portfolio
          </Link>
          <Link href="/resume" className={style.navLink}>
            Resume
          </Link>
          <Link href="/contact" className={style.navLink}>
            Contact
          </Link>
          <Link
            href="https://github.com/tjsook/bootcamp-project-2025"
            className={style.navLink}
          >
            The Repo
          </Link>
          <Link href="/blog" className={style.navLink}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
