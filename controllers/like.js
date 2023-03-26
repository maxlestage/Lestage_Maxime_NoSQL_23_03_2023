const Sauce = require("../models/Sauce");

/* 
- récupérer la sauce qui m'intéresse

- si l'utilisateur a liké (1)
	- vérifier s'il est déjà dans la liste des usersLike
	- si non, l'y ajouter et faire +1 à likes
	- si oui, ne rien faire
	- vérifier s'il est déjà dans la liste des usersDislike
	- si oui, l'y retirer et faire -1 à dislikes
	- si non, ne rien faire

- si l'utilisateur a dislike (-1)
	- vérifier s'il est déjà dans la liste des usersDislike
	- si non, l'y ajouter et faire +1 à dislikes
	- si oui, ne rien faire
	- vérifier s'il est déjà dans la liste des usersLike
	- si oui, l'y retirer et faire -1 à likes
	- si non, ne rien faire

- si l'utilisateur a annulé (0)
	- vérifier s'il est déjà dans la liste des usersLike
	- si oui, l'y retirer et faire -1 à likes
	- vérifier s'il est déjà dans la liste des usersDislike
	- si oui, l'y retirer et faire -1 à dislikes

- sauvegarder la sauce

*/

exports.userLikeOrDislikeSauce = (req, res) => {
	Sauce.findById(req.params.id).then((sauce) => {
		if (req.body.like === 1) {
			if (sauce.usersLiked.includes(res.locals.userId)) {
				res.status(400).json({ error: "Vous avez déjà aimé cette sauce." });
			} else {
				if (sauce.usersDisliked.includes(res.locals.userId)) {
					sauce.dislikes--;
					sauce.usersDisliked.pull(res.locals.userId);
				}
				sauce.likes++;
				sauce.usersLiked.push(res.locals.userId);
				sauce
					.save()
					.then(() => res.status(200).json({ message: "Avis enregistré !" }))
					.catch((error) => res.status(400).json({ error }));
			}
		} else if (req.body.like === -1) {
			if (sauce.usersDisliked.includes(res.locals.userId)) {
				res
					.status(400)
					.json({ error: "Vous avez déjà indiqué ne pas aimer cette sauce." });
			} else {
				if (sauce.usersLiked.includes(res.locals.userId)) {
					sauce.likes--;
					sauce.usersLiked.pull(res.locals.userId);
				}
				sauce.dislikes++;
				sauce.usersDisliked.push(res.locals.userId);
				sauce
					.save()
					.then(() => res.status(200).json({ message: "Avis enregistré !" }))
					.catch((error) => res.status(400).json({ error }));
			}
		} else if (req.body.like === 0) {
			if (sauce.usersLiked.includes(res.locals.userId)) {
				sauce.likes--;
				sauce.usersLiked.pull(res.locals.userId);
			} else if (sauce.usersDisliked.includes(res.locals.userId)) {
				sauce.dislikes--;
				sauce.usersDisliked.pull(res.locals.userId);
			}
			sauce
				.save()
				.then(() => res.status(200).json({ message: "Avis Neutre !" }))
				.catch((error) => res.status(400).json({ error }));
		} else {
			res.status(400).json({ error: "Requête invalide." });
		}
	});
};
