import Image from "next/image";

const paths = [
    { label: "Design", icon: "/icons/design.svg" },
    { label: "Development", icon: "/icons/development.svg" },
    { label: "IT & Software", icon: "/icons/it%26software.svg" },
    { label: "Business", icon: "/icons/business.svg" },
    { label: "Marketing", icon: "/icons/marketing.svg" },
    { label: "Photography", icon: "/icons/photography.svg" },
];

export default function LearningPaths() {
    return (
        <section className="w-full bg-white pb-14 pt-4 lg:pb-[90px]">
            <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
                <h2 className="font-heading text-[31px] font-semibold leading-tight  text-[#040819] ">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <p className="mt-4 max-w-[840px] leading-6  text-[#82868E] text-[18px] lg:mt-5 lg:text-base lg:leading-7">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                <div className="mt-8 grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-10">
                    {paths.map(({ label, icon }) => (
                        <button
                            key={label}
                            type="button"
                            className="flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-[28px] border border-gray-200 bg-white px-2 transition-shadow hover:shadow-md lg:gap-5"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                                <Image src={icon} alt="" width={28} height={28} className="h-7 w-7" />
                            </span>
                            <span className="text-sm font-heading font-medium text-base-text lg:text-base">{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}