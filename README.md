# Quiz App Backend

Ce projet est le backend de l'application Quiz. Il est construit avec Apollo Server et utilise GraphQL pour les requêtes de données.

## Prérequis

- Node.js
- pnpm (recommandé) ou npm

## Stack technologique

- TypeScript
- Apollo Server
- GraphQL

## Installation

1. Clonez ce dépôt sur votre machine locale.

```bash
git clone https://github.com/danielgonzalez0/20240205-simple-Apollo-server-graphQL.git
```

2. Allez sur le dossier créé et installez les dépendances

```bash
# Avec pnpm (recommandé)
pnpm install

# Ou avec npm
npm install
```

3. Créez un fichier `.env` à la racine du projet et définissez les variables d'environnement nécessaires. Par exemple :

```
CORS_URLS=http://localhost:5173,http://localhost:4000,https://studio.apollographql.com,https://20240119-ts-react-frontend-quizz-app.vercel.app
```

4. Démarrez le serveur

```bash
# Avec pnpm
pnpm run start

# Ou avec npm
npm run start
```

Le serveur devrait maintenant être en cours d'exécution à http://localhost:4000.

## Tests

Ce projet inclut des tests unitaires utilisant Jest. Pour exécuter les tests :

```bash
pnpm run test
```

Pour voir le rapport de couverture des tests :

```bash
pnpm run test -- --coverage
```

## Utilisation

Vous pouvez envoyer des requêtes GraphQL à http://localhost:4000/graphql. Pour voir l'interface utilisateur de GraphQL Playground, ouvrez http://localhost:4000/graphql dans votre navigateur.

## Déploiement

### Fly.io (actuel)

Ce projet est déployé sur Fly.io. Pour déployer votre propre instance :

1. Installez Flyctl :

```bash
# Sur Windows avec PowerShell
iwr https://fly.io/install.ps1 -useb | iex
```

2. Connectez-vous à Fly.io :

```bash
flyctl auth login
```

3. Lancez votre application :

```bash
flyctl launch
```

4. Configurez les variables d'environnement :

```bash
flyctl secrets set CORS_URLS="http://localhost:5173,http://localhost:4000,https://studio.apollographql.com,https://votre-frontend-url.com"
```

5. Déployez l'application :

```bash
flyctl deploy
```

L'application sera accessible à l'adresse `https://votre-app-nom.fly.dev`.

### Intégration Continue (CI/CD)

Ce projet utilise GitHub Actions pour l'intégration continue et le déploiement continu. À chaque push sur la branche main, l'application est automatiquement testée et déployée sur Fly.io.

Pour configurer CI/CD sur votre fork :

1. Créez un token d'API Fly.io :

```bash
flyctl auth token
```

2. Ajoutez ces secrets dans les paramètres de votre dépôt GitHub :
   - `FLY_API_TOKEN` : Votre token d'API Fly.io
   - `CORS_URLS` : La liste des origines CORS autorisées

## Licence

Ce projet est sous licence MIT.
