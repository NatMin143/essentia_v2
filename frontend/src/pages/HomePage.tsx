import React from "react";
import { useState } from "react";
import avatarImg from "/person2.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchData } from "@/api/fetchAiResponse";
import ReactMarkdown from 'react-markdown'

const HomePage: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [aiResponse, setAiResponse] = useState<string | null>("");

  // console.log(prompt)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const fetchAiResponse = async () => {
    try {
      const response = await fetchData(prompt);
      setAiResponse(response);
      return response; // Assuming fetchData returns a string
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return null; // Ensures the function matches the `string | null` type
    }
  };
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center items-center">
          <img src={avatarImg} alt="Avatar Clone" className="object-cover-" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-1/2 h-full p-4">
          <Card className="h-[60vh] w-full border border-gray-200 shadow-lg rounded-2xl p-0">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-bold">Response</CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Your digital clone's response
              </CardDescription>
            </CardHeader>
            {aiResponse && (
              <CardContent
                className="prose prose-stone max-w-none overflow-y-auto max-h-[calc(100%-theme(space.16))] w-full  
                 p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              >
                <ReactMarkdown >{aiResponse}</ReactMarkdown>
              </CardContent>
            )}
          </Card>

          <div className="flex space-x-2 w-full justify-center items-center h-2/5">
            <Input
              type="text"
              placeholder="Prompt Here"
              className="p-4 w-4/5"
              onChange={handleChange}
            />
            <Button type="submit" onClick={fetchAiResponse} className="bg-[#0084ff] hover:bg-blue-400">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
