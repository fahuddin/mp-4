import DisplayQuestion from "@/components/DisplayQuestion";
import getQuestions from "@/api/getQuestions/route";

export default async function Home() {
  const questions = await getQuestions();

  return (
    <div className="flex flex-row items-center bg-black-300 p-4">
      <DisplayQuestion questions={questions} />
    </div>
  );
}
