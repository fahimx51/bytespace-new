import Image from "next/image";

const avatars = [
    { src: "/images/student-images/std1.png", bg: "bg-pink-300" },
    { src: "/images/student-images/std2.png", bg: "bg-emerald-200" },
    { src: "/images/student-images/std3.png", bg: "bg-orange-300" },
    { src: "/images/student-images/std4.png", bg: "bg-sky-300" },
];

type Size = "s" | "m" | "l";

const sizes: Record<Size, { avatar: string; badge: string; text: string; overlap: string; px: number }> = {
    s: { avatar: "h-7 w-7", badge: "h-8 w-8", text: "text-[10px]", overlap: "-space-x-1.5", px: 56 },
    m: { avatar: "h-9 w-9", badge: "h-10 w-10", text: "text-xs", overlap: "-space-x-2", px: 72 },
    l: { avatar: "h-12 w-12", badge: "h-14 w-14", text: "text-sm", overlap: "-space-x-3", px: 96 },
};

interface AvatarStackProps {
    label?: string;
    size?: Size;
    count?: number;
}

export default function AvatarStack({ label, size = "m", count = 4 }: AvatarStackProps) {
    const s = sizes[size];
    const items = Array.from({ length: Math.max(0, count) }, (_, i) => avatars[i % avatars.length]);

    return (
        <div className={`flex items-center ${s.overlap}`}>
            {items.map(({ src, bg }, i) => (
                <div
                    key={i}
                    className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-white ${s.avatar} ${bg}`}
                    style={{ zIndex: i }}
                >
                    <Image
                        src={src}
                        alt=""
                        width={s.px}
                        height={s.px}
                        className="h-full w-full object-cover object-top"
                    />
                </div>
            ))}

            {label && (
                <div
                    className={`relative flex shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-base-text ring-2 ring-white ${s.badge} ${s.text}`}
                    style={{ zIndex: items.length }}
                >
                    {label}
                </div>
            )}
        </div>
    );
}