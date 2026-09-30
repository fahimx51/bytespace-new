import Image from "next/image";
import Link from "next/link";

const ELEMENTS = [
    {
        src: "cta_lime_squiggle_top_left.png",
        className: "-left-[4vw] -top-[2vw] w-[24vw] md:left-0 md:top-0 md:w-[13vw]",
    },
    {
        src: "cta_white_squiggle_top_left.png",
        className: "left-[14%] top-[6%] hidden w-[10vw] md:block",
    },
    {
        src: "cta_white_cone_left.png",
        className: "hidden top-[40%] w-[12vw] sm:block md:w-[8vw]",
    },
    {
        src: "cta_lime_donut_bottom_left.png",
        className: "-bottom-[3vw] -left-[4vw] w-[30vw] md:bottom-0 md:left-[2%] md:w-[16vw]",
    },
    {
        src: "cta_lime_pyramid_top_right.png",
        className: "right-[14%] top-[3%] hidden w-[9vw] md:block",
    },
    {
        src: "cta_white_cylinder_right.png",
        className: "-right-[6vw] top-[2%] w-[18vw] md:-right-[3%] md:top-[8%] md:w-[12vw]",
    },
    {
        src: "cta_lime_squiggle_bottom_right.png",
        className: "-bottom-[2vw] -right-[4vw] w-[26vw] md:bottom-0 md:right-[3%] md:w-[13vw]",
    },
];

export default function CreatorCTA() {
    return (
        <section className="bg-grid-pattern relative isolate overflow-hidden bg-primary">
            {/* Decorative 3D elements */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                {ELEMENTS.map(({ src, className }) => (
                    <Image
                        key={src}
                        src={`/images/elements/${src}`}
                        alt=""
                        width={0}
                        height={0}
                        sizes="(min-width: 768px) 16vw, 30vw"
                        className={`absolute h-auto select-none ${className}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="mx-auto flex max-w-[1000px] flex-col items-center px-6 py-28 text-center sm:py-32 md:py-24">
                <h2 className="font-heading max-w-[650px] text-[28px] font-semibold leading-tight text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    Unlock Your Potential as a Creator with ByteSpace
                </h2>

                <p className="mt-6 max-w-[800px] text-center text-sm leading-relaxed text-white/85 md:mt-8 md:text-[15px]">
                    Experience the collaboration of numerous creators and an expanding
                    selection of courses. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor, and showcase your expertise by publishing your finest
                    course on the ByteSpace Course Library.
                </p>

                <Link
                    href="/signup"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-[#242528] transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:mt-10"
                >
                    Join as Creator
                </Link>
            </div>
        </section>
    );
}