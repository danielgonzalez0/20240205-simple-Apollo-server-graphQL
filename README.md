# Quiz App Backend

Ce projet est le backend de l'application Quiz. Il est construit avec Apollo Server et utilise GraphQL pour les requêtes de données.

## Prérequis

- Node.js
- npm

## stack

typescript, apollo server, graphQL

## Installation

1. Clonez ce dépôt sur votre machine locale.

```bash
git clone https://github.com/danielgonzalez0/20240205-simple-Apollo-server-graphQL.git
```

2. Aller sur le dossier créer et installez les dépendances

```bash
npm install
```

3. Créez un fichier .env à la racine du projet et définissez les variables d'environnement nécessaires. Par exemple :

```js
CORS_URLS=http://localhost:3000,https://votre-url-de-production
```
4. Démarrer le serveur

```bash
npm run start
```

Le serveur devrait maintenant être en cours d'exécution à http://localhost:4000.

## Utilisation

Vous pouvez envoyer des requêtes GraphQL à http://localhost:4000/graphql. Pour voir l'interface utilisateur de GraphQL Playground, ouvrez http://localhost:4000/graphql dans votre navigateur.

### Déploiement

Ce projet est prêt à être déployé sur Heroku. 

Assurez-vous de définir les variables d'environnement nécessaires dans les paramètres de votre application Heroku.

Licence
Ce projet est sous licence MIT.

