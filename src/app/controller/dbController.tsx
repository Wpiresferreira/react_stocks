"use server";
import { sql } from "@vercel/postgres";

export async function addTickers(ticker:string) {
  try {
    const inserted = await sql`      
      INSERT INTO stock_watchlist (email, ticker)
      VALUES ('wagner_pires@icloud.com', ${ticker})
      `;
    if (inserted && inserted.rowCount) {
      return {message: "Inserted Sucessfully"};
    } else {
      return {message: "Error Inserting"};
    }
  } catch (error) {
    console.log(error);
    // res.status(500).json({message: 'Error fetching watchlist'});
  }
}
