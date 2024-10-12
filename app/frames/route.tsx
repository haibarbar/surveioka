/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";
 
export const GET = frames(async () => {
  return {
    image: (
      <div
      tw="relative flex flex-col items-center justify-center w-full h-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://as1.ftcdn.net/v2/jpg/04/92/23/74/1000_F_492237476_oTW3UOZNYOwofVgsqjHqiVALdbYax2JN.jpg')",
       backgroundSize: "100% 100%", // Memaksakan gambar untuk mengisi seluruh area
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
      }}
    >
      <div tw="text-blue-500 text-6xl text-center mx-4 pb-60">
      In terms of sports, which one do you enjoy the most?
      </div>
    </div>
    
    ),
    buttons: [
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Soccer" } }}
      >
        Soccer
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Ai" } }}
      >
        Ai
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Swimming" } }}
      >
        Swimming
      </Button>,
      <Button
        action="post"
        target={{ pathname: "/result", query: { foo: "Other" } }}
      >
        Other
      </Button>,
    ],
    imageOptions: {
      aspectRatio: "1:1",
    },
  };
});












