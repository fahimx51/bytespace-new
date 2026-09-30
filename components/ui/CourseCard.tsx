import Image from "next/image";
import AvatarStack from "@/components/ui/AvatarStack";

export interface Course {
    id: number;
    title: string;
    author: string;
    image: string;
    lessons: number;
    duration: string;
    comments: number;
    rating: number;
    level: string;
    students: string;
    price: number;
}

export default function CourseCard({ course }: { course: Course }) {
    return (
        <div className="rounded-[28px] border border-gray-200 bg-white p-3.5 sm:p-4">
            {/* Thumbnail with info pills */}
            <div className="relative aspect-[313/180] w-full overflow-hidden rounded-[20px] bg-gray-100">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 350px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute inset-x-2.5 bottom-3 flex items-center justify-between gap-1.5 sm:inset-x-3">
                    <span className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1.5 text-[11px] text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs">
                        {course.lessons} Lessons
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1.5 text-[11px] text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs">
                        {course.duration}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1.5 text-[11px] text-gray-600 backdrop-blur-sm sm:px-3 sm:text-xs">
                        {course.comments} Comments
                    </span>
                </div>
            </div>

            {/* Title + rating */}
            <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="min-w-0 truncate font-heading text-lg font-semibold leading-6 text-base-text sm:text-xl">
                    {course.title}
                </h3>
                <div className="flex shrink-0 items-center gap-1 text-base text-[#4F4F4F] font-medium">
                    <span>{course.rating}</span>
                    <Image src="/icons/star.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                </div>
            </div>

            <p className="mt-0.5 text-xs text-gray-500">
                by <span className="text-primary">{course.author}</span>
            </p>

            {/* Level + students */}
            <div className="mt-4 flex items-center gap-3">
                <span className="flex h-9 font-medium shrink-0 items-center gap-2 rounded-full bg-secondary px-3.5 text-[13px] text-secondary-text">
                    <Image
                        src="/icons/signal_cellular.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4"
                    />
                    {course.level}
                </span>
                <AvatarStack size="s" count={4} label={course.students} />
            </div>

            {/* Price */}
            <p className="mt-4 text-xs text-[#4F4F4F]">
                <span className="font-heading text-xl font-semibold text-primary">${course.price}</span>
                /lifetime
            </p>
        </div>
    );
}