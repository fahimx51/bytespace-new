"use client";

import { useState } from "react";

// Desktop rows match the Figma layout: 8 / 6 / 4 (+ "More")
const rows = [
    [
        "Featured",
        "Music",
        "Drawing & Painting",
        "Marketing",
        "Animation",
        "Social Media",
        "UI/UX Design",
        "Creative Marketing",
    ],
    [
        "Digital Illustration",
        "Film & Video",
        "Crafts",
        "Freelance & Entrepreneurship",
        "Graphic Design",
        "Photography",
    ],
    ["Productivity", "Web Development", "Data Science", "Cooking"],
];

// Shown after clicking "+ More". Replace with your real categories.
const moreCategories = ["Mobile Development", "Cyber Security", "Writing", "Business", "Fitness"];

export default function CourseCategories() {
    const [active, setActive] = useState("Featured");
    const [showMore, setShowMore] = useState(false);

    const renderPill = (category: string) => {
        const isActive = active === category;
        return (
            <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`h-9 shrink-0 whitespace-nowrap rounded-full px-4 text-[13px] transition-colors lg:h-10 lg:px-[15px] lg:text-[15px] ${isActive
                    ? "bg-accent font-medium text-base-text"
                    : "bg-secondary text-secondary-text hover:bg-gray-200"
                    }`}
            >
                {category}
            </button>
        );
    };

    return (
        <section className="w-full bg-white px-6 py-14 lg:py-[90px]">
            <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
                <h2 className="font-heading text-[28px] font-semibold leading-tight text-[#040819]sm:text-4xl lg:text-[44px] lg:leading-[1.2]">
                    Discover Your Passion, <br />
                    Build Your Skills
                </h2>

                <p className="mt-4 max-w-[820px] text-sm leading-6 text-gray-500 lg:mt-6 lg:text-base lg:leading-7">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                </p>

                {/* Mobile/tablet: row wrappers use "contents", so all pills wrap naturally in one flex container.
                    Desktop (lg): each row wrapper becomes its own centered line. */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 font-medium lg:mt-12 lg:flex-col lg:flex-nowrap lg:gap-y-4">
                    {rows.map((row, i) => {
                        const isLast = i === rows.length - 1;
                        return (
                            <div key={i} className="contents lg:flex lg:justify-center lg:gap-x-4">
                                {row.map(renderPill)}

                                {isLast && showMore && moreCategories.map(renderPill)}

                                {isLast && (
                                    <button
                                        type="button"
                                        onClick={() => setShowMore((v) => !v)}
                                        className="shrink-0 whitespace-nowrap px-1 text-[13px] font-medium text-blue-700 hover:underline lg:text-[15px]"
                                    >
                                        {showMore ? "- Less" : "+ More"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}