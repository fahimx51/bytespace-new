import Image from "next/image";

const logos = [
    "/icons/service-logo1.svg",
    "/icons/service-logo2.svg",
    "/icons/service-logo3.svg",
    "/icons/service-logo4.svg",
    "/icons/service-logo5.svg",
];

export default function TrustedBy() {
    return (
        <section className="w-full bg-secondary py-10 lg:py-[70px]">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-6 px-6 sm:gap-x-12 lg:justify-between lg:gap-x-10 lg:px-[140px]">
                {logos.map((src, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt={`Partner logo ${i + 1}`}
                        width={160}
                        height={40}
                        className="h-7 w-auto sm:h-8 lg:h-10"
                    />
                ))}
            </div>
        </section>
    );
}