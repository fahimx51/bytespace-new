"use client";

import Image from "next/image";
import Link from "next/link";

const linkColumns = [
    ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
    ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
    return (
        <footer className="w-full bg-white px-5 pt-12 lg:pt-[52px] 2xl:px-0">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
                    {/* Left: logo, tagline, newsletter */}
                    <div className="max-w-[500px]">
                        <Image
                            src="/icons/Footer_Logo.svg"
                            alt="ByteSpace"
                            width={130}
                            height={32}
                            className="h-8 w-auto"
                        />

                        <p className="mt-3 text-xs text-[#242528] lg:text-[14px]">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="mt-8 flex items-center gap-4 lg:mt-10"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="h-[52px] w-[376px] py-[18px] px-[24px] min-w-0  flex-1 rounded-[100px] border border-gray-200 bg-white text-sm text-gray-800 placeholder-[#242528] focus:border-gray-400 focus:outline-none "
                            />
                            <button
                                type="submit"
                                className="h-11.5 w-26 text-center shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-medium text-base-text transition-colors hover:bg-accent/80"
                            >
                                Search
                            </button>
                        </form>

                        <p className="mt-5 max-w-[350px] text-[11px] leading-4 text-[#4B4C53]">
                            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
                            company.
                        </p>
                    </div>

                    {/* Right: link columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:pl-8">
                        {linkColumns.map((column, i) => (
                            <ul key={i} className="flex flex-col gap-4 lg:gap-5">
                                {column.map((label) => (
                                    <li key={label}>
                                        <Link
                                            href="#"
                                            className="text-[13px] text-[#242528] transition-colors hover:text-primary"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-gray-200 py-6 lg:mt-[70px]">
                    <div className="flex flex-col items-center justify-between gap-3 text-[11px] text-[#242528] sm:flex-row">
                        <p>@ 2023 ByteSpace. All rights reserved.</p>

                        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                            {legalLinks.map((label) => (
                                <li key={label}>
                                    <Link href="#" className="transition-colors hover:text-primary">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}