import { Course } from "@/components/ui/CourseCard";

export const courses: Course[] = [
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

export type Testimonial = {
    id: number;
    name: string;
    role: string;
    avatar: string;
    quote: string;
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "/images/student-images/sarah.png",
        quote:
            "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        id: 2,
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "/images/student-images/james.png",
        quote:
            "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        id: 3,
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "/images/student-images/alex.png",
        quote:
            "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
];