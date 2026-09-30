import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";

const points = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function ManageCourses() {
    return (
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:gap-8 lg:py-[90px] 2xl:px-0">
            {/* Left: floating visual (same approach as ProfessionalGrowth).
                Hidden on phones (below 640px).
                640px to 1023px: scaled down as one piece. lg and up: exactly your original. */}
            <div
                className="relative mx-auto h-[380px] w-[340px] sm:h-[465px] sm:w-[460px] lg:ml-0
                    max-sm:hidden
                    sm:max-lg:my-[-40px] sm:max-lg:scale-[0.82]"
            >
                {/* Total Revenue card (behind the student) */}
                <div className="absolute left-0 top-[-10px] z-[1] h-[98px] w-[190px] rounded-[10px] bg-primary px-3.5 pt-3 text-white">
                    <p className="text-[15px] leading-4">Total Revenue</p>
                    <p className="text-[10px] leading-3 text-white/80">July 1-28</p>
                    <p className="mt-1 font-heading text-[21px] font-semibold leading-7">$120.29</p>
                    <div className="mt-1 h-[6px] w-full overflow-hidden rounded-full bg-white">
                        <div className="h-full w-[60%] rounded-full bg-accent" />
                    </div>
                </div>

                {/* Year to Date card (behind the student) */}
                <div className="absolute left-0 top-[110px] z-[1] h-[112px] w-[110px] rounded-[10px] bg-primary px-3.5 pt-3 text-white">
                    <p className="text-[13px] leading-4">Year to Date</p>
                    <p className="text-[10px] leading-3 text-white/80">2023</p>
                    <p className="mt-1 font-heading text-[19px] font-semibold leading-6">$1,200.38</p>
                    <span className="mt-2 inline-flex h-5 items-center rounded-full bg-accent px-2 text-[10px] font-medium text-base-text">
                        +12$
                    </span>
                </div>

                {/* Student: larger, height follows the real image ratio (no stretching) */}
                <Image
                    src="/images/female-student.png"
                    alt="Student with headphones holding a tablet"
                    width={577}
                    height={540}
                    priority
                    className="absolute top-[-55px] left-[250px] z-[2] h-auto w-[520px] max-w-none -translate-x-1/2"
                />

                {/* Yellow squiggle */}
                <Image
                    src="/images/shape_yellow_squiggle-3.png"
                    alt=""
                    width={239}
                    height={276}
                    className="pointer-events-none absolute left-[260px] top-[56px] z-[3] h-auto w-[180px] max-w-none"
                />

                {/* Happy Students card, above the student */}
                <div className="absolute left-[234px] top-[320px] z-[4] h-[102px] w-[214px] rounded-[14px] bg-white px-3.5 pt-3 text-[#242528] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                    <p className="text-sm leading-5">Happy Students</p>
                    <div className="mb-1 flex items-center gap-1 text-[11px] leading-4 text-gray-600">
                        <span className="font-semibold">4.5</span>
                        <span className="text-gray-400">(240)</span>
                        <Image src="/icons/gold-star.svg" alt="" width={12} height={12} className="h-3 w-3" />
                    </div>
                    <AvatarStack size="s" count={7} label="2K+" />
                </div>
            </div>

            {/* Right: text + checklist (centered block below lg, checklist stays left aligned inside it) */}
            <div className="flex flex-col gap-6 text-left max-lg:items-center max-lg:text-center lg:gap-8">
                <h2 className="font-heading text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#242528] max-sm:text-[28px] lg:text-[44px] lg:leading-[1.2]">
                    Create & Manage <br className="hidden lg:block" />
                    Courses Easily.
                </h2>

                <p className="text-base leading-6 text-secondary-text lg:text-[18px]">
                    <span className="font-semibold text-[#242528]">ByteSpace</span> supports individuals or entities in
                    the creation, publication, and administration of educational courses.
                </p>

                <ul className="flex flex-col gap-4 max-lg:text-left">
                    {points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-[#242528] font-medium lg:text-[18px]">
                            <Image src="/icons/blue-tik.svg" alt="" width={20} height={20} className="h-5 w-5 shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}