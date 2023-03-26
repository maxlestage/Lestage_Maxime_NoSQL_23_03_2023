# API - Heinz'Aviz

## Heinz'Aviz - Partagez votre avis sur les sauces mystiques Heinz !

![Heinz](https://github.com/maxlestage/Lestage_Maxime_NoSQL_23_03_2023/blob/master/img/MUSTARD-hot-dog-MASTER.jpg?raw=true)

Heinz'Aviz est une fonctionnalité qui permet aux fans de Heinz de donner leur avis sur les différentes sauces proposées sur le site Heinz France.

Alors, n'hésitez pas à vous lancer et à donner votre avis sur les sauces Heinz qui ont conquis le monde entier !

---

## Installation

- Cloner le repository :

```shell
git clone https://github.com/maxlestage/Lestage_Maxime_NoSQL_23_03_2023.git
```

- Se déplacer dans le dossier :

```shell
cd Lestage_Maxime_NoSQL_23_03_2023`
```

- Installer les dépendances :

```shell
npm install
```

- Configurer le fichier .env en y ajoutant les informations nécessaires à la connexion à une base de données MongoDB

- Lancer le serveur :

```shell
npm run start
```

---

## Utilisation

### Authentification:

L'authentification se fait grâce à un token JWT.

Il est possible de se connecter ou de s'inscrire en envoyant une requête POST à l'URL

> POST /api/auth/signup : Créer un compte utilisateur

> POST /api/auth/login : Se connecter en tant qu'utilisateur

Le token sera renvoyé dans la réponse de la connexion.

### Opérations sur les sauces:

Les routes suivantes sont disponibles pour effectuer des opérations sur les sauces :

> GET /api/sauces : Récupérer la liste des sauces

> GET /api/sauces/:id : Récupérer une sauce par son ID

> POST /api/sauces : Ajouter une nouvelle sauce (nécessite d'être authentifié)

> PUT /api/sauces/:id : Modifier une sauce existante (nécessite d'être authentifié et d'être le créateur de la sauce)

> DELETE /api/sauces/:id : Supprimer une sauce existante (nécessite d'être authentifié et d'être le créateur de la sauce)

> POST /api/sauces/:id/like : Ajouter ou retirer un like/dislike à une sauce existante (nécessite d'être authentifié)

### Opérations sur les commentaires:

Les routes suivantes sont disponibles pour effectuer des opérations sur les commentaires :

> POST /api/sauces/:id/comments : Ajouter un commentaire à une sauce existante (nécessite d'être authentifié)

> DELETE /api/sauces/:id/comments : Supprimer un commentaire existant (nécessite d'être authentifié et d'être l'auteur du commentaire)

---

## Technologies utilisées:

```json
	"bcrypt": "^5.1.0",
	"cors": "^2.8.5",
	"dotenv": "^16.0.3",
	"express": "^4.18.2",
	"jsonwebtoken": "^9.0.0",
	"mongoose": "^7.0.2"
```

---

Lestage Maxime - Projet de fin parcours NoSQL dispensé par M.ADEYAMA Henok - Ynov - B3 Semestre: 2 - Année: 2022-2023
