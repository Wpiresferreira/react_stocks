// "use server";
// import { sql } from "@vercel/postgres";
// import LeftSide from "./LeftSide";

// export default async function ListOfTickers(props) {
//   let quotes = [];

//   try {
//     // if(!req.user.isadmin){
//     // res.status(404).json({message: 'You have no privileges to see this page'});
//     // return
//     // }
//     const list = await sql`
            
//             SELECT stock_users.name, ticker
//             FROM stock_users
//             INNER JOIN stock_watchlist on stock_users.email = stock_watchlist.email
//             WHERE stock_users.email = 'wagner_pires@icloud.com'

//             `;
//     if (list) {
//       for (let i = 0; i < list.rowCount; i++) {
//         quotes.push({ name: list.rows[i].name, ticker: list.rows[i].ticker });
//       }

//       // res.status(200).json(quotes);
//     } else {
//       // res.status(200).json({message: 'No Messages returned'});
//     }
//   } catch (error) {
//     console.log(error);
//     // res.status(500).json({message: 'Error fetching watchlist'});
//   }

//   return (
//     <>
//       <div>1</div>
//       {quotes.map((quote) => (
//         <LeftSide key={`${quote.ticker}`} ticker={`${quote.ticker}`} />
//       ))}
//     </>
//   );
// }
