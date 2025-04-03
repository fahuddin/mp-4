"use client";
import PreviewQuestion from "./PreviewQuestion";
import { QuestionProps } from "@/type";


export default function DisplayQuestion({ questions }: { questions: QuestionProps[]}) {

    return (
<div className="flex flex-col items-center">
        {questions.map((question) => (
            <PreviewQuestion key={question.id} question={question} />
        ))}
        </div>
    )



}