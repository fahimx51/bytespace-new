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
        <section className="w-full bg-white pb-12 pt-4 sm:pb-14 lg:pb-[90px]">
            <div className="mx-auto flex max-w-7xl flex-col items-center text-center max-sm:px-4">
                <h2 className="font-heading text-2xl font-semibold leading-tight text-[#040819] sm:text-[28px] lg:text-[36px]">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <p className="mt-4 max-w-[917px] text-[15px] leading-6 text-[#82868E] md:text-[18px] lg:mt-5 lg:leading-7">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
                </p>

                <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:grid-cols-6 lg:gap-10">
                    {paths.map(({ label, icon }) => (
                        <button
                            key={label}
                            type="button"
                            className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-2 transition-shadow hover:shadow-md sm:gap-4 sm:rounded-[28px] lg:gap-5"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent sm:h-14 sm:w-14">
                                <Image src={icon} alt="" width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
                            </span>
                            <span className="font-heading text-sm font-medium leading-tight text-base-text lg:text-base">
                                {label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}