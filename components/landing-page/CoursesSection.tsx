import CourseCard, { Course } from "@/components/ui/CourseCard";
import { courses } from "@/data/data";

// Replace the image paths with your real files

export default function CoursesSection() {
    return (
        <section className="w-full bg-white px-6 pb-14 lg:pb-[90px]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}