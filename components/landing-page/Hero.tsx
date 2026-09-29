"use client";

import Image from "next/image";

// Placeholder avatars. Swap for Figma exports later, e.g. "/images/avatars/avatar-1.png"
const avatars = Array.from({ length: 6 }, () => "/images/male-student.png");

export default function Hero() {
    return (
        // Change 80px to your real navbar height
        <section className="bg-grid-pattern relative h-[640px] w-full overflow-hidden bg-primary text-white sm:h-[720px] md:h-[calc(100svh-80px)] md:min-h-[700px] lg:min-h-[600px]">
            {/* Edge-anchored shapes (bleed off the viewport edges) */}
            <Image
                src="/images/shape_yellow_squiggle.png"
                alt=""
                width={239}
                height={276}
                priority
                className="pointer-events-none absolute -left-5 top-32 z-10 h-auto w-24 md:top-44 md:w-36 lg:-left-6 lg:top-[211px] lg:w-[239px]"
            />
            <Image
                src="/images/shape_yellow_cylinder.png"
                alt=""
                width={201}
                height={302}
                priority
                className="pointer-events-none absolute -right-4 top-28 z-10 h-auto w-20 md:top-40 md:w-32 lg:-right-5 lg:top-[185px] lg:w-[201px]"
            />

            {/* Design-frame wrapper: full width on mobile/tablet, 1440px centered on desktop */}
            <div className="relative h-full w-full lg:absolute lg:left-1/2 lg:top-0 lg:w-[1440px] lg:-translate-x-1/2">
                {/* Heading + subtitle + search (z-40 so it is always above shapes, student and cards) */}
                <div className="relative z-40 flex flex-col items-center px-6 pt-8 text-center sm:pt-10 lg:pt-[50px]">
                    <h1 className="font-heading text-[32px] font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[88px]">
                        Get Access to Hundreds <br />
                        Courses Available
                    </h1>

                    <p className="mt-4 max-w-xl text-xs text-shuttle-gray-100 sm:text-sm md:mt-6 md:max-w-2xl md:text-base lg:mt-[31px] lg:max-w-none lg:whitespace-nowrap">
                        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                    </p>

                    <div className="mt-8 flex items-start gap-3.5 md:mt-10 lg:mt-[50px] lg:gap-[18px]">
                        <div className="flex h-10 w-[min(230px,calc(100vw-160px))] items-center rounded-full bg-white px-4 sm:w-[366px] md:h-[50px] md:w-[460px] md:px-5">
                            <Image
                                src="/icons/search-icon.svg"
                                alt=""
                                width={20}
                                height={20}
                                priority
                                className="h-4 w-4 shrink-0 md:h-5 md:w-5"
                            />
                            <input
                                type="text"
                                placeholder="Course, topic, creator"
                                className="ml-2.5 w-full bg-transparent font-sans text-sm text-gray-800 placeholder-gray-400 focus:outline-none md:ml-3 md:text-base"
                            />
                        </div>
                        <button className="h-9 w-[82px] shrink-0 rounded-full bg-accent font-sans text-sm font-medium text-base-text transition-colors hover:bg-accent/80 md:h-[45px] md:w-[103px] md:text-base">
                            Search
                        </button>
                    </div>
                </div>

                {/* Small white spiral */}
                <Image
                    src="/images/shape_white_spiral_small.png"
                    alt=""
                    width={116}
                    height={123}
                    className="pointer-events-none absolute z-10 hidden h-auto lg:bottom-[399px] lg:left-[216px] lg:block lg:w-[116px]"
                />

                {/* White pyramid */}
                <Image
                    src="/images/shape_white_pyramid.png"
                    alt=""
                    width={126}
                    height={138}
                    className="pointer-events-none absolute z-10 hidden h-auto lg:bottom-[402px] lg:left-[1131px] lg:block lg:w-[126px]"
                />

                {/* Lime arch (SVG with a transparent hole, so the blue behind the student comes from the section bg) */}
                <Image
                    src="/images/hero_lime_arch.svg"
                    alt=""
                    width={1149}
                    height={442}
                    priority
                    className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-auto w-[700px] max-w-none -translate-x-1/2 sm:w-[800px] md:w-[900px] lg:w-[1149px]"
                />

                {/* White donut */}
                <Image
                    src="/images/shape_white_donut.png"
                    alt=""
                    width={239}
                    height={220}
                    className="pointer-events-none absolute -left-8 bottom-6 z-20 h-auto w-24 md:-left-10 md:bottom-3 md:w-[130px] lg:bottom-[65px] lg:left-[69px] lg:w-[239px]"
                />

                {/* White right squiggle */}
                <Image
                    src="/images/shape_white_squiggle.png"
                    alt=""
                    width={191}
                    height={249}
                    className="pointer-events-none absolute -right-4 bottom-8 z-20 h-auto w-20 md:-right-6 md:bottom-4 md:w-[110px] lg:bottom-[68px] lg:left-[1194px] lg:right-auto lg:w-[191px]"
                />

                {/* Student: 578 x 541, pinned to the bottom edge, capped so it never grows into the heading */}
                <div className="absolute bottom-0 left-1/2 z-20 w-[460px] -translate-x-1/2 leading-none sm:w-[440px] md:w-[560px] lg:h-[min(720px,75%)] lg:w-[720px]">
                    <Image
                        src="/images/male-student.png"
                        alt="Student learning on laptop"
                        width={578}
                        height={541}
                        priority
                        className="block h-auto w-full object-contain object-bottom lg:h-full"
                    />
                </div>

                {/* Card 1: UI/UX Design (tablet + desktop) */}
                <div className="absolute z-30 hidden h-[70px] w-[207px] rounded-xl bg-white px-4 pt-[15px] text-left text-gray-900 md:bottom-[30%] md:left-[4%] md:block lg:bottom-[318px] lg:left-[350px]">
                    <h4 className="font-sans text-base font-medium leading-5">UI/UX Design</h4>
                    <p className="mt-0.5 font-sans text-[11px] leading-4 text-gray-400">
                        200 Courses &nbsp;&bull;&nbsp; 1000+ Students
                    </p>
                </div>

                {/* Card 2: Learning Progress (tablet + desktop) */}
                <div className="absolute z-30 hidden h-[131px] w-[231px] rounded-[15px] bg-white px-4 pt-[18px] text-left text-gray-900 shadow-sm md:bottom-[24%] md:right-[4%] md:block lg:bottom-[245px] lg:left-[841px] lg:right-auto">
                    <p className="font-sans text-sm leading-5 text-gray-600">Learning Progress</p>
                    <h3 className="mt-1 font-poppins text-[45px] font-semibold leading-[55px]">55%</h3>
                    <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[55%] rounded-full bg-accent" />
                    </div>
                </div>

                {/* Card 3: Happy Students (tablet + desktop) */}
                <div className="absolute z-30 hidden h-[121px] w-[258px] rounded-[15px] bg-white px-4 pt-4 text-left text-gray-900 md:bottom-[7%] md:left-[4%] md:block lg:bottom-[69px] lg:left-[300px]">
                    <h4 className="font-sans text-base font-medium leading-5">Happy Students</h4>
                    <div className="mt-0.5 flex items-center gap-0.5 font-sans text-[13px] leading-4 text-gray-600">
                        <span>4.5</span>
                        <span className="text-lg leading-none text-accent">★</span>
                        <span className="text-gray-500">(240)</span>
                    </div>
                    <div className="mt-2.5 flex items-center -space-x-2">
                        {avatars.map((src, i) => (
                            <div
                                key={i}
                                className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200 ring-2 ring-white"
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className="h-full w-full origin-[50%_22%] scale-[2.4] object-cover object-top"
                                />
                            </div>
                        ))}
                        <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-accent font-sans text-xs font-bold text-gray-900 ring-2 ring-white">
                            2K+
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}