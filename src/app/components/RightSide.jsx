import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareUp,
  faCaretSquareDown,
} from "@fortawesome/free-solid-svg-icons";

export default async function RigthSide({ ticker }) {
  const apiKey = process.env.API_KEY;
  const symbol = ticker; // Replace with the stock symbol you're interested in
  const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

  const data = await fetch(apiUrl);
  const posts = await data.json();

  return (
    <>
      <div className="flex text-black rounded-r-md bg-slate-100 mr-2 mt-2 w-[30vw] items-center justify-end">
        <div className="flex flex-col items-end">
          <div className="text-black font-bold text-[16px]">{Number(posts.c).toFixed(2)}</div>
          <div className="text-black font-bold text-[12px]">
            {posts.dp > 0 ? "+" + Number(posts.dp).toFixed(2) : + Number(posts.dp).toFixed(2)}%
          </div>
          {/* <GetQuote ticker="AAPL"/> */}
        </div>
        {posts.dp > 0 ? (
          <div className="m-2 min-w-8 min-h-8 ">
            <FontAwesomeIcon
              className="text-green-400"
              icon={faCaretSquareUp}
            />
          </div>
        ) : (
          <div className=" m-2 min-w-8 min-h-8">
            <FontAwesomeIcon
              className="text-red-400"
              icon={faCaretSquareDown}
            />
          </div>
        )}

      </div>
    </>
  );
}
