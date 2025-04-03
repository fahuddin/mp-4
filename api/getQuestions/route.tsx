

import { QuestionProps } from "@/type";

const API_KEY = process.env.api_key

export default async function getQuestions(): Promise<QuestionProps[]> {
const url = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&limit=10`
try{
const res = await fetch(url)

if (!res) {
    console.log("Error: ", "Failed to fetch data")
    throw Error("Failed to fetch data")

}
const data = await res.json()
return data;

}
catch (error) {
    console.log("Error:", error)
    throw Error("This was the error:" + error);
}
}
