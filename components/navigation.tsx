'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string
}

type Props = {
    navLinks: NavLink[]
}

const Navigation = ({ navLinks = [] }: Props) => {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map(link => (
                <Link
                    key={link.label}
                    className={pathname === link.href ? 'active' : ''}
                    href={link.href}
                >
                    {link.label}
                </Link>
            ))}
        </>
    );
};

export default Navigation;
