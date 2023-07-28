import dotenv from "dotenv";
dotenv.config();
const model = "anthropic/claude-2";
let res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "HTTP-Referer": process.env.YOUR_SITE_URL,
    "X-Title": process.env.YOUR_SITE_NAME,
  },
  body: JSON.stringify({
    model,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hello what model are you?" },
    ],
  }),
});
let results = JSON.stringify(await res.json());
console.log(results);