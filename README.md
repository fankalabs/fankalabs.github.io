# Fanka Labs — site vitrine

Site officiel de **Fanka Labs**, startup technologique guinéenne. « Fanka » signifie la force.

Site statique en HTML, CSS et JavaScript, sans outil de build, publié avec GitHub Pages sur
**https://fankalabs.github.io**.

## Structure

```
index.html            Page unique (textes français)
assets/css/style.css  Styles ; couleurs et polices dans les variables :root
assets/js/main.js     Traduction anglaise, menu mobile, animations
assets/img/           Logo et favicon
```

## Modifier le contenu

- **Textes français** : directement dans `index.html`.
- **Textes anglais** : dans l'objet `EN` en haut de `assets/js/main.js`. Chaque clé correspond
  à un attribut `data-i18n` dans `index.html`.
- **Couleurs et polices** : variables en haut de `assets/css/style.css`.
- **Logo** : remplacer `assets/img/logo.svg` et `assets/img/favicon.svg`.
- Les éléments encore à compléter sont marqués `TODO` ou entre crochets `[...]`.

## Voir le site en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python -m http.server 8000
```

puis aller sur http://localhost:8000.

## Mise en ligne

Chaque `git push` sur la branche `main` met à jour le site automatiquement.
Réglage : **Settings → Pages → Source : Deploy from a branch → main / (root)**.
