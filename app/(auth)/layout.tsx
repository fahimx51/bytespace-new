// app/(auth)/layout.tsx
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import AuthIntro from "@/components/auth/AuthIntro";
import CourseCard from "@/components/ui/CourseCard";
import { courses, testimonials } from "@/data/data";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [, backCourse, frontCourse] = courses;
    const avatars = [...testimonials, ...testimonials];

    return (
        <main className="bg-grid-pattern min-h-screen bg-primary">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-4 px-4 py-6 sm:gap-6 md:px-6 lg:grid lg:grid-cols-[455px_minmax(0,1fr)] lg:items-center lg:gap-12 lg:py-8 xl:gap-28 xl:px-0">
                {/* Left: logo, intro text, showcase */}
                <div className="flex  flex-col gap-4 sm:gap-6 max-lg:contents lg:gap-12 lg:self-start">
                    <Logo header={true} showText={false} />

                    {/* Intro: centered group with the card on small screens */}
                    <div className="mx-auto w-full max-w-[475px] text-center max-lg:mt-auto lg:mx-0 lg:text-left">
                        <AuthIntro />
                    </div>

                    {/* Showcase  */}
                    <div
                        aria-hidden
                        className="pointer-events-none relative hidden h-[512px] w-[455px] select-none lg:mt-8 lg:block"
                    >
                        {/* Back card */}
                        <div className="absolute left-0 top-[82px] w-[343px]">
                            <CourseCard course={backCourse} />
                        </div>

                        {/* Front card */}
                        <div className="absolute left-[102px] top-[-30px] z-10 w-[373px]">
                            <CourseCard course={frontCourse} />
                        </div>

                        {/* Shapes */}
                        <Image
                            src="/images/shape_yellow_donut.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="100px"
                            className="absolute left-[22px] top-[10px] z-20 h-auto w-[146px]"
                        />
                        <Image
                            src="/images/elements/cta_lime_pyramid_top_right.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="120px"
                            className="absolute left-[-20px] top-[365px] z-30 h-auto w-[188px]"
                        />
                        <Image
                            src="/images/elements/cta_white_squiggle_top_left.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="110px"
                            className="absolute left-[330px] top-[300px] z-50 h-auto w-[155px]"
                        />

                        {/* Happy Students badge */}
                        <div className="absolute left-[208px] top-[399px] z-40 w-[236px] rounded-xl bg-accent p-3.5 text-[#242528]">
                            <p className="font-heading text-base font-normal leading-tight">
                                Happy Students
                            </p>
                            <p className="mt-1 text-[11px] leading-none">
                                <span className="font-semibold">4.5</span>{" "}
                                <span className="text-[#242528]/50">(240)</span>{" "}
                                <span className="text-primary">★</span>
                            </p>

                            <div className="mt-2 flex items-center">
                                {avatars.map((t, i) => (
                                    <Image
                                        key={i}
                                        src={t.avatar}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="-ml-3 h-10 w-10 rounded-full border-2 border-accent object-cover first:ml-0"
                                    />
                                ))}
                                <span className="-ml-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-black text-xs font-medium text-white">
                                    2K+
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: login / signup card  */}
                <div className="flex w-full justify-center max-lg:mb-auto lg:justify-end">
                    {children}
                </div>
            </div>
        </main>
    );
}