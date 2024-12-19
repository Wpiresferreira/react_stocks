"use server"

export async function getAllTickers() {
  const apiKey = process.env.API_KEY;
  const apiUrl = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${apiKey}`;

  const data = await fetch(apiUrl);
  const posts = await data.json();
  return posts;
}
