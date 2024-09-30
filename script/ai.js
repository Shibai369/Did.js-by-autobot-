const axios = require('axios');

module.exports.config = {
		name: 'ai',
		version: '1.0.0',
		role: 0,
		hasPrefix: false,
		description: "An AI command powered by OpenAI",
		usages: "",
		credits: 'Developer',
		cooldown: 5,
};

module.exports.run = async function({ api, event, args }) {
		if (!args[0]) {
				api.sendMessage(Salut! Je suis une Intelligence Artificielle créer par Did.js Officiel comment puis-je vous aider aujourd'hui ?, event.threadID);
				return;
		}

		const question = args.join(" ");
		const apiUrl = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(question)}&model=v3`;

		try {
				const response = await axios.get(apiUrl);
				api.sendMessage(response.data.reply, event.threadID);
		} catch (error) {
				console.error("Error fetching response from OpenAI API:", error);
				api.sendMessage("svp vous pouvez reposé votre question j'ai pas maté.", event.threadID);
		}
};
