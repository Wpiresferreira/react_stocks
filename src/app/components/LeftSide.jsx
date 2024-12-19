import { sql } from "@vercel/postgres";
import GetQuote from "./GetQuote";
import Image from "next/image";

export default async function LeftSide({ ticker }) {
  const apiKey = process.env.API_KEY;
  const symbol = ticker;
  const apiUrl = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apiKey}`;

  const data = await fetch(apiUrl);
  const posts = await data.json();

  return (
    <>
      <div className="flex rounded-l-md  bg-slate-100 ml-2 mt-2 w-[70vw]">
        <div className="m-3 rounded-full border-2 border-slate-400 overflow-hidden max-h-[40px] max-w-[40px] min-h-[40px] min-w-[40px]">
          <Image
            src={posts.logo}
            width={60}
            height={60}
            priority={true}
            alt="Company logo"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="font-bold text-black text-[16px]">{ticker} </div>
          <div className="text-black text-nowrap text-[12px]">{posts.name}</div>
        </div>
        {/* <GetQuote ticker={ticker}/> */}
      </div>
    </>
  );
}
