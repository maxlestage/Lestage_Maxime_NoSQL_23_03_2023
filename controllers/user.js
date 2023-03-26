const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// exports.getId = (req, res, next) => {
// 	let getId = req.params.id;
// 	res.status(200).json(getId);
// };

// Fonction pour créer un utilisateur avec un mot de passe chiffré|Hashé à l'aide de bcrypt.
exports.signup = (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			const user = new User({
				mail: req.body.mail,
				password: hash,
			});
			user
				.save()
				.then(() => res.status(201).json({ message: "Utilisateur créé !" }))
				.catch((error) => res.status(409).json("Conflict"));
		})
		.catch((error) => res.status(500).json({ error }));
};

// Fonction qui permet la connexion sur notre application, elle verifie en premier si l'utilisateur existe.
exports.login = (req, res, next) => {
	User.findOne({ mail: req.body.mail })
		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: "Utilisateur non trouvé !" });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({ error: "Mot de passe incorrect !" });
					}
					res.status(200).json({
						userId: user._id,
						token: jwt.sign(
							{ userId: user._id },
							`${process.env.SECRET_TOKEN}`,
							{
								expiresIn: "24h",
							}
						),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};
