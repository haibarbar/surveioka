/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    // image: <div tw="flex">Your Answer is: {foo}</div>, // foo: bar
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
        {/* <div tw="flex text-white text-6xl">Your Answer is: {foo}</div> */}
        <div tw="flex text-blue-500 text-5xl pb-52">
          You've already voted! Thanks for participating.
        </div>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
  };
});
