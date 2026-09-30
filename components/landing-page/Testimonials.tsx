import { testimonials, type Testimonial } from "@/data/data";
import Image from "next/image";


function TestimonialCard({ name, role, avatar, quote }: Testimonial) {
    return (
        <article className="w-[374px] h-[407px]  rounded-3xl bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] md:p-[17px] lg:p-5">
            <Image
                src={avatar}
                alt={name}
                width={58}
                height={58}
                className="h-[58px] w-[58px] rounded-full object-cover"
            />

            <h3 className="font-heading mt-5 text-base text-[20px] font-semibold text-black">
                {name}
            </h3>
            <p className="mt-0.5 text-sm md:text-[18px] text-primary">{role}</p>

            <p className="mt-5 text-sm leading-relaxed text-[#4a4a4f] md:text-[18px]">
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

            <div className="mx-auto max-w-7xl max-md:px-4 py-16 md:py-20">
                {/* Header */}
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
                    <h2 className="font-heading max-w-[577px] text-[38px] font-semibold leading-[1.2] text-black md:text-[44px]">
                        Discover What Our Community Is Saying
                    </h2>

                    <p className="max-w-[580px] text-justify text-sm leading-relaxed text-[#4a4a4f] md:text-[18px]">
                        At ByteSpace, our vibrant community of learners and creators is at
                        the heart of what we do. Hear directly from those who have
                        experienced the transformative journey of learning and creating on
                        our platform. Explore testimonials that reflect the diverse
                        perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-10 grid grid-cols-1 items-start gap-5 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-8">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}