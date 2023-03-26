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

```js
// http://0.0.0.0:3000/api/auth/signup

{
	"mail": "test@mail.com",
	"password": "test"
}
```

> POST /api/auth/login : Se connecter en tant qu'utilisateur

```js
// http://0.0.0.0:3000/api/auth/login

{
    "mail": "test@mail.com",
	"password": "test"
}

```

Lors de la connection le token sera renvoyé dans la réponse, il faudra alors manuellement venir copier le token et venir le coller dans "Bearer Token" afin de rendre accessible les routes : /api/sauces.

```js
// Exemple de réponse :
{
	"userId": "64205f6f3d87a6ff83d88385",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDIwNWY2ZjNkODdhNmZmODNkODgzODUiLCJpYXQiOjE2Nzk4NDMzMDksImV4cCI6MTY3OTkyOTcwOX0.jHGsLjQq8m6ZWccUxQVaBlBeEPw8kSerDj05x1TJ7p8"
}
```

### Opérations sur les sauces:

Les routes suivantes sont disponibles pour effectuer des opérations sur les sauces :

> GET /api/sauces : Récupérer la liste des sauces

```txt
http://0.0.0.0:3000/api/sauces
```

> GET /api/sauces/:id : Récupérer une sauce par son ID

```txt
http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a
```

> POST /api/sauces : Ajouter une nouvelle sauce (nécessite d'être authentifié)

```js
// http://0.0.0.0:3000/api/sauces

{
	"name": "Catpuh", // chaîne de caractères, obligatoire
	"avis": "Drôlement bon cette tomate à l'ancienne", // chaîne de caractères, obligatoire
	"mainPepper": "Tomato Chili", // chaîne de caractères, obligatoire
	"heat": 3 // nombre, compris entre 1 et 10, obligatoire
}
```

> PUT /api/sauces/:id : Modifier une sauce existante (nécessite d'être authentifié et d'être le créateur de la sauce)

```js
// http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a

{
	"name": "Ketchup", // chaîne de caractères
	"avis": "Nouvelle génération de sauce tomate", // chaîne de caractères
	"mainPepper": "Tomato Chili", // chaîne de caractères
	"heat": 3 // nombre, compris entre 1 et 10
}
```

> DELETE /api/sauces/:id : Supprimer une sauce existante (nécessite d'être authentifié et d'être le créateur de la sauce)

```txt
http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a
```

> POST /api/sauces/:id/like : Ajouter ou retirer un like/dislike à une sauce existante (nécessite d'être authentifié)

```txt
http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a/like
```

```js
{
    "like" : 1
}
```

### Opérations sur les commentaires:

Les routes suivantes sont disponibles pour effectuer des opérations sur les commentaires :

> POST /api/sauces/:id/comment : Ajouter un commentaire à une sauce existante (nécessite d'être authentifié)

```js
// http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a/comment

{
	"comment": "J'ai aussi trop aimé cette sauce!"
}
```

> DELETE /api/sauces/:id/comment : Supprimer un commentaire existant (nécessite d'être authentifié et d'être l'auteur du commentaire)

```txt
http://0.0.0.0:3000/api/sauces/642062173d87a6ff83d8838a/comment
```

---

## Technologies utilisées:

```js
	"bcrypt": "^5.1.0",
	"cors": "^2.8.5",
	"dotenv": "^16.0.3",
	"express": "^4.18.2",
	"jsonwebtoken": "^9.0.0",
	"mongoose": "^7.0.2"
```

---

Lestage Maxime - Projet de fin parcours NoSQL dispensé par M.ADEYAMA Henok - Ynov - B3 Semestre: 2 - Année: 2022-2023
