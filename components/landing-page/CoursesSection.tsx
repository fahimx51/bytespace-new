import CourseCard, { Course } from "@/components/ui/CourseCard";

// Replace the image paths with your real files
const courses: Course[] = [
    {
        id: 1,
        title: "Learn Figma from Basic",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn1.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
    {
        id: 2,
        title: "Build Digital Asset",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn2.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
    {
        id: 3,
        title: "the Power of Big Data",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn3.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
    {
        id: 4,
        title: "Balancing Productivity and Life",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn4.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
    {
        id: 5,
        title: "Mastering Money Management",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn5.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
    {
        id: 6,
        title: "From Idea to Startup Success",
        author: "purepearl studio",
        image: "/images/course-thumbnail/tn6.png",
        lessons: 17,
        duration: "2 hours 16 mins",
        comments: 59,
        rating: 4.5,
        level: "Beginner",
        students: "26+",
        price: 25,
    },
];

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