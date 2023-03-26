const Sauce = require("../models/Sauce");
const User = require("../models/User");

// Création d'une sauce.
exports.createSauce = (req, res) => {
	Sauce.findOne({ name: req.body.name }) // Vérification si une sauce avec le même nom existe déjà
		.then((sauce) => {
			if (sauce) {
				return res.status(409).json({ error: "Cette sauce existe déjà !" }); // Renvoyer une erreur 409 si la sauce existe déjà
			} else
				User.findOne({ _id: res.locals.userId })
					.then((user) => {
						const sauce = new Sauce({
							userId: user._id,
							name: req.body.name,
							avis: req.body.avis,
							mainPepper: req.body.mainPepper,
							heat: req.body.heat,
						});
						sauce
							.save()
							.then((createdSauce) =>
								res.status(201).json({
									message: "Objet enregistré !",
									sauceId: createdSauce._id,
								})
							)
							.catch((error) => res.status(400).json({ error }));
					})
					.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

//  Modification de la sauce.
exports.modifySauce = (req, res) => {
	const sauceObject = {
		name: req.body.name,
		avis: req.body.avis,
		mainPepper: req.body.mainPepper,
		heat: req.body.heat,
	};
	Sauce.updateOne(
		{ _id: req.params.id, userId: res.locals.userId },
		{ ...sauceObject, _id: req.params.id }
	)
		.then(() => res.status(200).json({ message: "Objet modifié !" }))
		.catch((error) => res.status(400).json({ error }));
};

// Suppression de la sauce.
exports.deleteSauce = (req, res) => {
	Sauce.findOne({ _id: req.params.id, userId: res.locals.userId })
		.then((sauce) => {
			Sauce.deleteOne({ _id: req.params.id })
				.then(() => res.status(200).json({ message: "Objet supprimé !" }))
				.catch((error) => res.status(400).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

// Afficher le détail d'une sauce.
exports.getOneSauce = (req, res) => {
	Sauce.findOne({ _id: req.params.id }).then((sauce) =>
		res.status(200).json(sauce)
	);
};

// Afficher toutes les sauces.
exports.getAllSauce = (req, res) => {
	Sauce.find()
		.then((sauces) => res.status(200).json(sauces))
		.catch((error) => res.status(400).json({ error }));
};
