import { testimonials, type Testimonial } from "@/data/data";
import Image from "next/image";

function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
    return (
        <article
            className={[
                "w-full rounded-3xl bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] sm:p-6",
                "max-md:mx-auto max-md:max-w-[420px]",
                
                "md:max-lg:last:col-span-2 md:max-lg:last:w-[calc(50%-12px)] md:max-lg:last:justify-self-center",
                "xl:h-[407px] xl:w-[374px] xl:p-5",
            ].join(" ")}
        >
            <Image
                src={avatar}
                alt={name}
                width={58}
                height={58}
                className="h-12 w-12 rounded-full object-cover sm:h-[58px] sm:w-[58px]"
            />

            <h3 className="font-heading mt-4 text-lg font-semibold text-black sm:mt-5 xl:text-[20px]">
                {name}
            </h3>
            <p className="mt-0.5 text-sm text-primary md:text-base xl:text-[18px]">
                {role}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#4a4a4f] sm:mt-5 md:text-base xl:text-[18px]">
                &quot;{quote}&quot;
            </p>
        </article>
    );
}

export default function Testimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-[#fafafa]">
            {/* Gradient blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[38%] top-[-8%] h-[320px] w-[320px] rounded-full bg-accent/60 blur-[100px] md:h-[420px] md:w-[420px]" />
                <div className="absolute -right-[8%] top-[15%] h-[300px] w-[300px] rounded-full bg-accent/40 blur-[110px] md:h-[400px] md:w-[400px]" />
                <div className="absolute -bottom-[10%] -left-[8%] h-[300px] w-[300px] rounded-full bg-[#b8c8f5]/70 blur-[100px] md:h-[380px] md:w-[380px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:py-20 2xl:px-0">
                {/* Header */}
                <div className="flex flex-col gap-4 md:gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                    <h2 className="font-heading max-w-[577px] text-[28px] font-semibold leading-[1.2] text-black sm:text-[34px] md:text-[38px] lg:text-[44px]">
                        Discover What Our Community Is Saying
                    </h2>

                    <p className="max-w-[580px] text-sm leading-relaxed text-[#4a4a4f] md:text-base lg:text-justify lg:text-[18px]">
                        At ByteSpace, our vibrant community of learners and creators is at
                        the heart of what we do. Hear directly from those who have
                        experienced the transformative journey of learning and creating on
                        our platform. Explore testimonials that reflect the diverse
                        perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 items-start gap-5 md:mt-12 md:grid-cols-2 md:gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}