import React from "react";
import ProfessionalGrowth from "../ui/ProfessionalGrowth";
import ManageCourses from "../ui/ManageCourses";

function GrowthSection() {
    return (
        <section className="relative pt-10 w-full overflow-hidden bg-[#f8f8fb]">
            {/* Background glows: center positions and sizes are % of the section */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                {/* 1. Lime, top, behind the heading */}
                <div className="absolute left-[30%] top-[8%] h-[26%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/35 blur-[90px]" />

                {/* 2. Blue, right edge, upper */}
                <div className="absolute left-[97%] top-[20%] h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

                {/* 3. Blue, left edge, middle */}
                <div className="absolute left-[5%] top-[52%] h-[24%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

                {/* 4. Lime, bottom left */}
                <div className="absolute left-[5%] top-[84%] h-[28%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/70 blur-[150px]" />

                {/* 5. Blue, bottom right */}
                <div className="absolute left-[96%] top-[93%] h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[150px]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <ProfessionalGrowth />
                <ManageCourses />
            </div>
        </section>
    );
}

export default GrowthSection;