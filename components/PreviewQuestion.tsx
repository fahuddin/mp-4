import { QuestionProps } from "@/type";

export default function PreviewQuestion({question}: { question: QuestionProps }) {
  return (
    <div className="bg-red-400 square-xl p-4 m-2 w-96">
      <h4 className="font-bold text-12xl">{question.question}</h4>
      <p>{question.description ?? "No Description available"}</p>
    </div>
  );
}
