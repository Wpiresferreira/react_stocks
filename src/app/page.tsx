import { addTickers } from "./controller/dbController";
import { sql } from "@vercel/postgres";
import SearchTicker from "./components/SearchTicker"
import ButtonAdd from "./components/ButtonAdd"
import LeftSide from "./components/LeftSide";
import RigthSide from "./components/RightSide";

export default async function Page() {
  let quotes = [];


  try {
    const list = await sql`
            SELECT stock_users.name, ticker
            FROM stock_users
            INNER JOIN stock_watchlist on stock_users.email = stock_watchlist.email
            WHERE stock_users.email = 'wagner_pires@icloud.com'
            `;
    if (list && list.rowCount) {
      for (let i = 0; i < list.rowCount; i++) {
        quotes.push({ name: list.rows[i].name, ticker: list.rows[i].ticker });
      }
    }

  } catch (error) {
    console.log(error);
  }

  function handleClickAdd(e:any){
    console.log(e.target.innerHTML)
  }

  return (
    <div>
      <SearchTicker />
      {/* <ButtonAdd/> */}
      {quotes.map((quote) => (
        <div key={quote.ticker} className="flex">
          <LeftSide ticker={quote.ticker} />
          <RigthSide ticker={quote.ticker} />
        </div>
      ))}
    </div>
  );
}
