import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const models = [
  "google/palm-2-codechat-bison",
  "google/palm-2-chat-bison",
  "openai/gpt-3.5-turbo",
  "openai/gpt-3.5-turbo-16k",
  "openai/gpt-4",
  "openai/gpt-4-32k",
  "anthropic/claude-2",
  "anthropic/claude-instant-v1",
  "meta-llama/llama-2-13b-chat",
  "meta-llama/llama-2-70b-chat",
];
let results = {};

(async function () {
  for (const model of models) {
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
          { role: "user", content: "Hello world" },
        ],
      }),
    });
    results[model] = {
      timestamp: new Date().toISOString(),
      response: await res.json(),
    };
    console.log(results[model]);
  }
  fs.writeFileSync(
    `responses-${new Date().toISOString()}.json`,
    JSON.stringify(results, null, 2)
  );
})();
