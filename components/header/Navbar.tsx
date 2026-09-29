"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full bg-grid-pattern bg-primary text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                {/* Left: Logo */}
                <div className="flex-1 flex justify-start">
                    <Logo header={true} showText={true} />
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 font-sans text-[16px] leading-[24px]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-opacity hover:opacity-80 ${isActive
                                        ? "font-[500] text-white" /* Label M (500) */
                                        : "font-[400] text-white" /* Body M (400) */
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right: Actions & Cart */}
                <div className="flex-1 flex items-center justify-end gap-[24px] font-sans text-[16px] leading-[24px] font-[400]">
                    <Link
                        href="/login"
                        className="hidden sm:inline-block text-white hover:opacity-80 transition-opacity"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="/signup"
                        className="hidden sm:inline-block text-white hover:opacity-80 transition-opacity"
                    >
                        Join Us
                    </Link>

                    {/* Cart Icon - Renders native vector dimensions (16x20) */}
                    <button
                        aria-label="Shopping Cart"
                        className="shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/icons/bag_icon.svg"
                            alt="Cart Bag"
                            width={16}
                            height={20}
                            priority
                            className="w-auto h-auto object-contain"
                        />
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white hover:opacity-80 transition-opacity"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-primary px-6 pt-2 pb-6 space-y-3">
                    <nav className="flex flex-col gap-2 font-sans text-[16px] leading-[24px]">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-1 text-white ${isActive ? "font-[500]" : "font-[400]"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-2 flex flex-col gap-2 font-sans text-[16px] leading-[24px] font-[400]">
                        <Link
                            href="/login"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 text-white"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1 text-white"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}