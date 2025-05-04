"use client"

import type React from "react"
import { useState } from "react"
import avatarImg from "/person2.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchData } from "@/api/fetchAiResponse"
import ReactMarkdown from "react-markdown"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

const HomePage: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([])
  const [prompt, setPrompt] = useState<string>("")
  const [aiResponse, setAiResponse] = useState<string | null>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value)
  }

  const fetchAiResponse = async () => {
    if (!prompt.trim()) return

    const userMessage = { role: "user", content: prompt }

    setMessages((prev) => [...prev, userMessage])
    console.log(messages)

    try {
      const response = await fetchData(prompt, [...messages])

      // temporary
      setAiResponse(response)

      // Saving Ai response for future purposes of backandforth interface chatting
      const aiResponse = { role: "ai", content: response }
      setMessages((prev) => [...prev, aiResponse])

      setPrompt("")
      return response
    } catch (error) {
      console.error("Error fetching AI response:", error)
      return null // Ensures the function matches the `string | null` type
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchAiResponse()
    }
  }

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center items-center">
          <img src={avatarImg || "/placeholder.svg"} alt="Avatar Clone" className="object-cover" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-1/2 h-full p-4">
          <Card className="h-[60vh] w-full border border-gray-200 shadow-lg rounded-2xl p-0">
            <CardHeader className="p-4 border-b">
              <CardTitle className="text-lg font-bold">Conversation</CardTitle>
              <CardDescription className="text-sm text-gray-500">Chat with your digital clone</CardDescription>
            </CardHeader>
            <ScrollArea className="h-[calc(60vh-5rem)] overflow-y-auto p-2">
              <CardContent className="p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-[calc(60vh-10rem)] text-gray-400">
                    Start a conversation to your clone by typing a message below
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                      >
                        <Avatar className="h-8 w-8">
                          {message.role === "user" ? (
                            <AvatarFallback className="bg-blue-100 text-blue-500">U</AvatarFallback>
                          ) : (
                            <>
                              <AvatarImage src={avatarImg} alt="AI" />
                              <AvatarFallback className="bg-purple-100 text-purple-500">AI</AvatarFallback>
                            </>
                          )}
                        </Avatar>
                        <div
                          className={`rounded-lg p-3 ${
                            message.role === "user" ? "bg-[#0084ff] text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {message.role === "ai" ? (
                            <div className="prose prose-sm max-w-none">
                              <ReactMarkdown>{message.content}</ReactMarkdown>
                            </div>
                          ) : (
                            <p>{message.content}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </ScrollArea>
          </Card>

          <div className="flex space-x-2 w-full justify-center items-center h-2/5">
            <Input
              type="text"
              placeholder="Type your message here..."
              className="p-4 w-4/5"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={prompt}
            />
            <Button
              type="submit"
              onClick={fetchAiResponse}
              className="bg-[#0084ff] hover:bg-blue-400"
              disabled={!prompt.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
