const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true, immutable: true },
	name: { type: String, required: true, minLength: 5 }, // Doit contenir minimum 5 caractères.
	avis: { type: String, required: true },
	mainPepper: { type: String, required: true },
	heat: { type: Number, required: true },
	likes: { type: Number, default: 0 }, // Par défaut les likes sont à 0.
	dislikes: { type: Number, default: 0 }, // Par défaut les dislikes sont à 0.
	usersLiked: { type: [String] }, // Array avec l'id des gens qui ont aimé la sauce
	usersDisliked: { type: [String] }, // Array avec l'id des gens qui ont pas aimé la sauce
	usersCommented: {
		type: [mongoose.Schema.Types.Mixed],
	}, // Type Mixte qui lie le userId au commentaire ex: [{dsdezdzd:"super sauce Mayomartinique"}, {dlzkzfl:"super sauce catchup"}]
});

const Sauce = mongoose.model("Sauce", sauceSchema);
module.exports = Sauce;
