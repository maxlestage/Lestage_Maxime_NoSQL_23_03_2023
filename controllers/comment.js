const Sauce = require("../models/Sauce");

exports.userComment = (req, res) => {
	Sauce.findById(req.params.id).then((sauce) => {
		if (!sauce) {
			res.status(404).json({ error: "Sauce non trouvée !" });
		} else if (
			sauce.usersCommented.find(
				(comment) => comment.userId === res.locals.userId
			)
		) {
			res.status(400).json({ error: "Vous avez déjà commenté cette sauce." });
		} else {
			const newComment = {
				userId: res.locals.userId,
				comment: req.body.comment,
			};
			sauce.usersCommented.push(newComment);
			sauce
				.save()
				.then(() => res.status(200).json({ message: "Commentaire ajouté !" }))
				.catch((error) => res.status(400).json({ error }));
		}
	});
};

exports.deleteComment = (req, res) => {
	Sauce.findById(req.params.id).then((sauce) => {
		if (!sauce) {
			res.status(404).json({ error: "Sauce non trouvée !" });
		} else {
			const commentIndex = sauce.usersCommented.findIndex(
				(comment) => comment.userId === res.locals.userId
			);
			if (commentIndex === -1 || !sauce.usersCommented[commentIndex]) {
				res.status(404).json({ error: "Commentaire non trouvé !" });
			} else {
				sauce.usersCommented.splice(commentIndex, 1);
				sauce
					.save()
					.then(() =>
						res.status(200).json({ message: "Commentaire supprimé !" })
					)
					.catch((error) => res.status(400).json({ error }));
			}
		}
	});
};
