"use client";
import CardGrid from "@/components/card-grid";
import CourseCard from "@/components/courses/course-card";
import { coursesOffered } from "@/components/courses/courseData";

export default function Courses() {
    return (
        <>
            {coursesOffered.map((category, index) => (
                <CardGrid
                    title={category.category}
                    items={category.courses}
                    renderItem={(course, index) => <CourseCard {...course} key={`${index}-${category.category}`} />}
                    key={`course-grid-${index}`}
                />
            ))}
        </>
    );
}
