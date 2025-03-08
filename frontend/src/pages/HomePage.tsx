import React from "react";
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

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center items-center">
          <img src={avatarImg} alt="Avatar Clone" className="object-cover-" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-1/2 h-full p-4">
          <Card className="h-3/5">
            <CardHeader>
              <CardTitle>Response</CardTitle>
              <CardDescription>Your digital clone's response</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit culpa saepe aperiam aliquid impedit deserunt iusto
              aliquam, possimus atque? Eveniet, cupiditate minima. Quas maxime
              perferendis harum possimus sed illo temporibus, expedita voluptas
              perspiciatis. Dolores tempora maiores, ut id fuga, repellat
              dolorem iure delectus velit quidem iste, tenetur aliquam ex magni.
              Voluptate totam, soluta blanditiis asperiores enim rem doloribus
              deleniti dolorem ipsa quibusdam iste tempore sint dolores
              architecto modi. Neque reprehenderit similique delectus totam a,
              sit repellendus saepe distinctio nisi ipsum veniam nam dolorum.
              Non, saepe! Quis nulla vel officiis ipsum debitis neque sit eum
              quam. Perferendis dolore aut similique rerum.
            </CardContent>
          </Card>
          <div className="flex space-x-2 w-full justify-center items-center h-2/5">
            <Input
              type="text"
              placeholder="Prompt Here"
              className="p-4 w-4/5"
            />
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
