# Pokédex

Ce projet est un cas d'école. Il est développé sous React et utilise Vite.

## 📖 Utilisation

L'application Pokédex se compose de différentes pages :

- La page d'accueil qui liste tous les pokémons, avec pagination dynamique
- La page Pokédex propre à chacun, pour tous les Pokémons que vous avez capturé
- La fiche d'un pokémon avec ses informations

Sur l'application, il est possible, en plus, de :

- Rechercher un pokémon par nom
- Consulter sa fiche depuis l'accueil ou le pokédex
- Capturer un pokémon depuis sa fiche

## 📦 Installation

Assure-vous d'avoir la dernière version de [Node.js](https://nodejs.org/) installée sur votre machine. Vous pouvez exécuter ces commandes :

```sh
git clone https://github.com/emericsoquet/pokedex-app.git
npm install
```

## 🚀 Lancement du projet

En mode développement, vous pouvez utiliser cette commande pour démarrer le projet :

```
npm run dev
```

Le projet sera accessible sur http://localhost:5173/, par défaut

## ⚒️ Liste des commandes

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Génère une version optimisée pour la production.
- `npm run preview` : Prévisualise le projet après build.

## 🧩 Dépendances

- React
- Vite
- React Router
- Redux
- Axios

## 🎨 Mise en style

- Bootstrap 5
- Sass _(Installer avec npm install sass --save-dev si nécessaire)_

## 🪲 Débogage

Si Vite n'est pas reconnu, lancez :

```sh
npm install
```

Si le préprocesseur Sass est manquant, utilisez :

```sh
npm install sass --save-dev
```

## 🗒️ Licence

Le projet Pokédex est sous licence MIT

Développé avec 🩷 par Emeric
