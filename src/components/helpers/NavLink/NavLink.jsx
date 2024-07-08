"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NavLink = ({ href, children }) => {
    const path = usePathname();
    return (
        <Link
            className={`nav-link ${path === href ? "active" : undefined}`}
            aria-current="page"
            href={href}
        >
            {children}
        </Link>
    );
};

export default NavLink;
