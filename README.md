# Portfolio — Mohamed Khalifa Boufares

**Site en ligne :** [portfolio-med-khalifa.vercel.app](https://portfolio-med-khalifa.vercel.app)

Portfolio personnel créé avec **Next.js 16**, **React 19**, **TypeScript** et **Tailwind CSS 4**.

Code source : [github.com/mohamedkhalifaboufares-ui/portfolio](https://github.com/mohamedkhalifaboufares-ui/portfolio)

## Lancer le site en local

Si Node.js est installé :

```bash
npm install
npm run dev
```

Puis ouvrir [http://127.0.0.1:3000](http://127.0.0.1:3000).

Sur cet ordinateur, les scripts `dev.bat` et `build.bat` utilisent la version portable de Node.js située dans `C:\Users\user\AppData\Local\node-portable`.

## Commandes utiles

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification du code |

## Personnaliser le contenu

Tout le texte du site (profil, expérience, projets, compétences, formation, certifications, CV interactif et centres d'intérêt) se trouve dans un seul fichier :

**`lib/data.ts`**

Modifiez les objets `profile`, `projects`, `skillGroups`, `education`, `experience`, `certifications`, `videoCv`, `distinction` et `interests` pour mettre à jour le portfolio.

### Photo, certificats et CV

- **Photo principale** : remplacez `public/photo-original.jpg` en gardant le même nom. Elle apparaît dans le hero, la navigation, la section À propos, le CV interactif et l'image de partage.
- **Photos des certificats** : les onze images sont dans `public/certifications/`. Toutes les certifications du portfolio ont maintenant leur image.
- **CV PDF** : remplacez `public/CV-Mohamed-Khalifa-Boufares.pdf` pour publier une version plus récente.
- **CV interactif** : la section est une présentation animée et chapitrée. Pour utiliser une vraie vidéo, placez le fichier dans `public/` puis renseignez `videoCv.src` dans `lib/data.ts`.

### Liens des projets

Le champ optionnel `repoUrl` dans chaque entrée de `projects` (`lib/data.ts`) permet d'ajouter un vrai lien GitHub par projet. Tant qu'il n'est pas renseigné, la carte affiche « Projet académique · détails sur demande » plutôt qu'un lien trompeur.

## Structure

```
app/
  layout.tsx            Métadonnées, polices et style global
  page.tsx              Assemblage des sections
  globals.css           Thème, animations et utilitaires
  opengraph-image.tsx   Image de partage LinkedIn / réseaux sociaux
  icon.tsx              Favicon MKB
  robots.ts             Instructions pour les moteurs de recherche
  sitemap.ts            Plan du site
components/             Navbar, Hero, HeroVisual, About, Projects, Skills,
                        Journey, Certificates, VideoCV, Contact, Footer
lib/data.ts             Tout le contenu du portfolio
public/                 CV, photo, certificats et fichiers statiques
```

## Design

Thème sombre avec dégradés cyan / violet / rose, effets de verre, animations douces et mise en page responsive. La scène 3D du hero réagit à la souris sur ordinateur (inclinaison et halo qui suit le curseur) ; sur mobile et avec « réduire les animations », elle reste statique.
