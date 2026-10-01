// components/auth/AuthIntro.tsx
"use client";

import { usePathname } from "next/navigation";

const content = {
    "/signup": {
        title: "Sign up and come in",
        text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    },
    "/login": {
        title: "Sign in with ease",
        text: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    },
} as const;

export default function AuthIntro() {
    const pathname = usePathname();
    const { title, text } =
        content[pathname as keyof typeof content] ?? content["/login"];

    return (
        <div className="max-w-[475px] text-white">
            <h2 className="font-heading text-[20px] text-secondary font-semibold">{title}</h2>
            <p className="mt-3 text-[18px] leading-relaxed text-secondary">{text}</p>
        </div>
    );
}