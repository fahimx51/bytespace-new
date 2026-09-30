import Image from "next/image";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/data/data";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

export default function ProfessionalGrowth() {
    const featured = courses[0];

    return (
        <div className="mx-auto px-5 2xl:px-0 grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:gap-8 lg:py-[90px]">
            {/* Left: text + stats */}
            <div className="text-left flex flex-col gap-5 md:gap-10 max-w-[574px] max-h-[404px] max-lg:mx-auto max-lg:max-h-none max-lg:items-center max-lg:text-center">
                <h2 className="font-heading text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#242528] max-sm:text-[28px] lg:text-[44px] lg:leading-[1.2]">
                    Your Path to Professional <br className="hidden lg:block" />
                    Growth Starts Here!
                </h2>

                <p className="mx-auto max-w-[477px] text-[18px] leading-6 text-[#4B4C53] max-sm:text-base lg:mx-0">
                    Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
                    career journey.
                    <br />
                    Whether you are looking to sharpen specific skills, gain industry expertise, or
                    embark on a new career path entirely, we have the resources you need.
                </p>

                <div className="flex items-start justify-center gap-8 lg:justify-start">
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <p className="font-heading text-2xl font-medium leading-8 text-primary lg:text-[36px]">
                                {value}
                            </p>
                            <p className="text-xs text-[#4B4C53] lg:text-sm mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: floating visual.
                Hidden on phones (below 640px).
                640px to 1023px: scaled down as one piece. lg and up: exactly your original. */}
            <div
                className="relative mx-auto h-[289px] w-[303px] sm:h-[450px] sm:w-[600] lg:mr-0
                    max-sm:hidden
                    max-lg:h-[450px]
                    sm:max-lg:my-[-40px] sm:max-lg:scale-[0.82]"
            >
                {/* Course card: real width 350px */}
                <div className="absolute left-0 top-0 w-[280px]">
                    <CourseCard course={featured} />
                </div>

                {/* Student: larger, height follows the real image ratio (no stretching) */}
                <Image
                    src="/images/male-student.png"
                    alt="Student holding a laptop"
                    width={577}
                    height={540}
                    priority
                    className="absolute bottom-[-5px] left-1/2 z-5 h-auto w-[650px] max-w-none -translate-x-1/2"
                />

                {/* Yellow squiggle */}
                <Image
                    src="/images/shape_yellow_squiggle-2.png"
                    alt=""
                    width={239}
                    height={276}
                    className="pointer-events-none absolute right-[33px] top-[70px] z-7 h-auto w-[160px] max-w-none"
                />

                {/* Learning progress card, above squiggle and student */}
                <div className="absolute left-[306px] top-[170px] z-6 h-[135px] w-[217px] rounded-[15px] bg-white px-[18px] pt-[15px] shadow-md">
                    <p className="text-[17px] font-medium leading-6 text-[#242528]">Learning Progress</p>
                    <p className="font-heading text-[49px] font-semibold leading-[65px] text-[#040819]">55%</p>
                    <div className="mt-1.5 h-[9px] w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-[55%] rounded-full bg-accent" />
                    </div>
                </div>
            </div>
        </div>
    );
}