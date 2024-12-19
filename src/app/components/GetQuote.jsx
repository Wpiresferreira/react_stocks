export default async function GetQuote({ticker}) {

  
    const apiKey = process.env.API_KEY;
    const symbol = ticker; // Replace with the stock symbol you're interested in
    const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;
  
    const data = await fetch(apiUrl)
    const posts = await data.json()
    return (
      <>
      {posts.c}
      </>
      // <ul>
      //   {posts.map((post:any) => (
      //     <li key={post.id}>{post.title}</li>
      //   ))}
      // </ul>
    )
}