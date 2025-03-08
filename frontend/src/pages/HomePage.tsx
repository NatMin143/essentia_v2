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
          <Card className="h-3/5 w-full">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>Your digital clone's response</CardDescription>
            </CardHeader>
          </Card>

          {aiResponse && (
            <div>
              <CardContent className="overflow-y-auto max-h-[calc(100%-theme(space.12))] p-4">
                {aiResponse}
              </CardContent>
            </div>
          )}

          <div className="flex space-x-2 w-full justify-center items-center h-2/5">
            <Input
              type="text"
              placeholder="Prompt Here"
              className="p-4 w-4/5"
              onChange={handleChange}
            />
            <Button type="submit" onClick={fetchAiResponse}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
