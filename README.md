# Unlock GPT-4-32K &amp; Claude-2-100K API Instantly With Open Router

# Getting Started with Rare Models like GPT-4-32k and Claude-2-100k using OpenRouter AI and Node.js

This README will guide you on how to interact with rare AI models such as GPT-4-32k and Claude-2-100k using the OpenRouter AI API in a Node.js application. Follow the steps below to create chat completions with these powerful language models.

## Prerequisites

Ensure you have Node.js installed on your system. If not, download and install it from [official Node.js website](https://nodejs.org/).

You also need an OpenRouter AI API key. Refer to the [OpenRouter AI Keys](https://openrouter.ai/keys) to generate your API key.

## Getting Started

1. Clone this repository to your local machine.

2. Install the required packages using npm. Run the following command in the root directory of your project:

```bash
npm install
```

3. Create a .env file in your project root directory and add the following lines:

```bash
OPENROUTER_API_KEY=your_openrouter_ai_key
YOUR_SITE_URL=your_site_url
YOUR_SITE_NAME=your_site_name
```

Replace `your_openrouter_ai_key`, `your_site_url`, and `your_site_name` with your actual OpenRouter AI key, your site's URL, and your site's name respectively.

4. Run the example scripts:

- For running a single model (example-0.js):

```bash
node example-0.js
```

- For running multiple models including the rare models and saving responses (results-1.js):

```bash
node results-1.js
```

The results will be saved in a JSON file named `responses-timestamp.json` in the project root directory.

That's it! You've successfully set up and interacted with rare models like GPT-4-32k and Claude-2-100k using OpenRouter AI and Node.js. Happy coding!
