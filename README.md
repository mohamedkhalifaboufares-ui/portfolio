# Portfolio — Mohamed Khalifa Boufares

Portfolio personnel créé avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

## Lancer le site — le plus simple

Double-cliquez sur **`dev.bat`** à la racine du projet, puis ouvrez [http://127.0.0.1:3000](http://127.0.0.1:3000) (ou `http://localhost:3000`).

Le script utilise la version portable de Node.js installée dans `C:\Users\user\AppData\Local\node-portable`, donc aucune installation globale n'est nécessaire.

## Lancer le site en ligne de commande

Depuis le dossier du projet (`C:\Users\user\Documents\Projet par défaut`) :

```bash
set PATH=C:\Users\user\AppData\Local\node-portable;%PATH%
npm run dev
```

Si vous installez Node.js globalement depuis [nodejs.org](https://nodejs.org), la première ligne n'est plus nécessaire.

## Commandes utiles

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification du code |

## Personnaliser le contenu

Tout le texte du site (profil, expérience, projets, compétences, formation, certifications, CV vidéo et centres d'intérêt) se trouve dans un seul fichier :

**`lib/data.ts`**

Modifiez les objets `profile`, `projects`, `skillGroups`, `education`, `experience`, `certifications`, `videoCv`, `distinction` et `interests` pour mettre à jour le portfolio.

### Remplacer la photo et les certificats

- **Photo principale** : remplacez simplement `public/photo.jpg` par votre vraie photo en gardant le même nom de fichier. Elle apparaît dans le hero, la navigation, la section À propos et le CV vidéo.
- **Photos des certificats** : les six images sont dans `public/certifications/`. Les noms de fichiers sont définis dans le champ `image` de chaque entrée de `certifications` dans `lib/data.ts`.

### CV vidéo

La section **CV vidéo** est une présentation animée et chapitrée, lisible sans héberger de fichier vidéo. Les chapitres sont modifiables dans `videoCv` (`lib/data.ts`). Si vous avez une vraie vidéo filmée, placez-la dans `public/` puis indiquez son chemin dans `videoCv.src` et `components/VideoCV.tsx` pourra afficher un lecteur vidéo classique.

Les liens GitHub et LinkedIn sont définis dans `profile`. Le CV PDF est disponible dans `public/CV-Mohamed-Khalifa-Boufares.pdf` — remplacez ce fichier pour publier une version plus récente.

## Structure

```
app/
  layout.tsx      Métadonnées, polices et style global
  page.tsx        Assemblage des sections
  globals.css     Thème, animations et utilitaires
components/       Navbar, Hero, HeroVisual, About, Projects, Skills, Journey,
                  Certificates, VideoCV, Contact, Footer
lib/data.ts       Tout le contenu du portfolio
public/           CV, photo, certificats et fichiers statiques
```

## Design

Thème sombre avec dégradés cyan / violet / rose, effets de verre, animations douces et mise en page responsive. Les animations respectent la préférence système « réduire les animations ».
