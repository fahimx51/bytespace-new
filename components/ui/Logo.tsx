import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
    showText?: boolean;
    header?: boolean;
}

export default function Logo({
    className = "",
    showText = true,
    header = true,
}: LogoProps) {
    // Determine which image to render
    const logoSrc = showText
        ? header
            ? "/icons/Header_Logo.svg"
            : "/icons/Footer_Logo.svg"
        : "/icons/ByteSpace_Icon.svg";

    // Dynamic dimensions based on whether text is included or icon-only
    const dimensions = showText
        ? { width: "w-[171px]", height: "h-[37px]" }
        : { width: "w-[37px]", height: "h-[37px]" };

    return (
        <Link
            href="/"
            className={`inline-flex items-center transition-opacity hover:opacity-90 ${className}`}
        >
            <div
                className={`relative ${dimensions.width} ${dimensions.height} shrink-0 flex items-center justify-center`}
            >
                <Image
                    src={logoSrc}
                    alt="ByteSpace Logo"
                    fill
                    priority
                    className="object-contain"
                />
            </div>
        </Link>
    );
}