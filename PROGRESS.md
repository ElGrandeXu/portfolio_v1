# EGX Portfolio -- Etat d'avancement

**Date** : 23 mars 2026
**Repo** : https://github.com/ElGrandeXu/portfolio_v1
**Branche** : main
**Dernier commit** : d8e8972 (fix: 6 micro-fixes pour atteindre 85/100)
**Clone local** : C:\EGX\projects\portfolio_build

---

## Contexte

Site vitrine one-page du cabinet EGX. Specs dans `C:\EGX\projects\portfolio\BRIEF.md`. Maquettes de reference dans `C:\EGX\projects\portfolio\png\` (5 fichiers JPG numerotes).

Stack : HTML / CSS / JS vanilla. Zero framework. Deployable GitHub Pages.

---

## Ce qui est fait (100%)

### Build complet -- 5 sections
1. **Navbar + Hero** : navbar sticky blur pleine largeur, hero split (texte gauche + dashboard SVG droite), CTA cuivre
2. **Le Cabinet** : grille 4x3, 12 agents avec icones SVG isometriques 48x48, tagline italique cuivree
3. **Comment ca marche** : 3 colonnes features (icones 80x80) + schema architecture horizontal (Obsidian Vault -> FastAPI + LanceDB -> 12 Agents)
4. **Le Cockpit** : image reelle croppee du Xeneon Edge (48Ko), parallax au scroll via IntersectionObserver + rAF
5. **Pour qui + L'Architecte + CTA + Footer** : 3 target cards, avatar low-poly SVG avec border cuivree, CTA "Entrez dans le cabinet", footer minimal

### Phrase de positionnement
Bloc texte centre entre hero et cabinet : "EGX est un cabinet de 12 agents IA specialises qui fonctionnent comme une vraie equipe..."

### Audit + corrections (10 corrections appliquees)
Un audit 4 agents (Designer, Dev Lead, Dev Ops, Dircom) a ete realise. Note initiale : 67.9/100. Apres 10 corrections + 6 micro-fixes : **84/100**.

Corrections appliquees :
- C1 : Image cockpit reelle (photo croppee 48Ko au lieu de SVG schematique)
- C2 : Textes "Pour qui" recrits (factuel, zero marketing generique)
- C3 : Textes "Comment ca marche" recrits (idem)
- C4 : Phrase de positionnement ajoutee
- C5 : 18 icones refaites en isometrique 30deg (transforms rotate/skew)
- C6 : Accessibilite -- `<main>`, aria-hidden sur tous SVG, aria-label, prefers-reduced-motion
- C7 : OG tags + favicon SVG + meta description corrigee
- C8 : Parallax cockpit (IntersectionObserver + rAF, facteur 0.3, respecte reduced-motion)
- C9 : 12 descriptions agents reecrites (actions concretes, mot pour mot du brief Max)
- C10 : Inter 500 supprimee, grille 8px corrigee (28/36px -> 32px)

Micro-fixes supplementaires :
- Underline titre 120px -> 160px
- Border-radius cards 10px -> 8px
- Padding hero simplifie
- Schema archi : 1 seule boite "12 Agents" (doublon supprime)
- CTA final en sentence case
- Fichiers de dev supprimes du repo

---

## Notes de l'audit final (84/100)

| Agent | Poids | Note |
|-------|-------|------|
| Designer (DA) | 35% | 81 |
| Dev Lead (code) | 25% | 84 |
| Dev Ops (perf) | 20% | 92 |
| Dircom (editorial) | 20% | 81 |
| **Moyenne ponderee** | | **84.0** |

---

## Ecarts restants (pour atteindre 90+)

### DA (Designer)
- Icones isometriques via CSS transform = approximation. Un vrai dessin isometrique avec profondeur volumetrique serait plus fidele aux maquettes. Generables via fal-ai en batch.
- Hero dashboard SVG garde des radial-gradients et box-shadows (glows) -- contradiction avec la charte "zero gradient, zero glow", mais conforme aux maquettes elles-memes.
- Le hero est full anglais (headline + sous-titre) avec CTA en francais -- choix delibere mais le novice francophone peut decrocher.

### Code (Dev Lead)
- CSS body utilise des valeurs hardcodees (#0a0a0a, 'Inter') au lieu des variables CSS declarees juste en dessous.
- Entites HTML (&eacute;, &agrave;, etc.) au lieu d'ecrire directement en UTF-8 -- fonctionne mais verbeux.
- CSS ecrit desktop-first (max-width queries) alors que le BRIEF dit "mobile-first". Techniquement ca marche, mais c'est l'inverse de la spec.
- Variable --font-mono declaree mais jamais utilisee en CSS (seulement dans les SVG inline).
- Pas de canonical, pas de robots.txt (mineur pour un one-page).

### Perf (Dev Ops)
- JetBrains Mono chargee pour quelques labels SVG -- disproportionne (~20Ko WOFF2 pour 10 mots).
- Le HTML reste verbeux avec les entites au lieu d'UTF-8.

### Editorial (Dircom)
- Hero sous-titre utilise `--` (deux tirets droits) au lieu d'un em-dash propre. Contrainte memoire Max : "jamais de tirets cadratins". A trancher.
- "from scratch" dans le sous-titre hero = cliche tech.
- Quelques anglicismes restants (sparring-partner, pipeline CI/CD, pitchs) -- deliberes et metier.

---

## Structure des fichiers

```
portfolio_build/
  index.html          35.6 Ko  -- one-page complet, 5 sections + positionnement
  css/style.css       14.9 Ko  -- styles + responsive 3 breakpoints (1024/768/480)
  js/main.js           3.3 Ko  -- navbar, reveal, parallax, burger
  assets/cockpit.jpg  48.0 Ko  -- photo cockpit Xeneon Edge (croppee, quality 72)
  favicon.svg          0.2 Ko  -- EGX blanc sur fond noir
  package.json         0.1 Ko  -- metadata seul, zero deps
  .gitignore
  README.md
```

Poids total : ~102 Ko brut, ~15 Ko gzip (hors fonts Google).

---

## Git log complet

```
d8e8972 fix: 6 micro-fixes pour atteindre 85/100
596ecb5 fix: 10 corrections post-audit -- objectif 85/100
c3a4fca fix: navbar pleine largeur
46d33cb fix: elargir le layout - container 1400px, padding 64px
0786b97 fix: passe globale - accents, animations, polish
0846992 feat: section pour-qui, architecte, cta final, footer
7aa9bc9 feat: section cockpit
c351fac feat: section comment ca marche
7f38ade feat: section cabinet - grille 12 agents
eef504c feat: section hero + navbar
d2a716f feat: Initialize EGX Cabinet frontend with Vite and React
7697543 Initial commit
```

---

## Prochaines etapes possibles

1. **Deployer sur GitHub Pages** -- activer dans les settings du repo, branche main, racine /
2. **Generer de vraies icones isometriques** via fal-ai (image-to-svg ou text-to-image -> vectorisation)
3. **OG image** -- l'og:image pointe vers `assets/cockpit.jpg` en relatif. Pour LinkedIn/Twitter il faut une URL absolue. A mettre a jour une fois le domaine connu.
4. **Domaine custom** -- si contact@egx.ai existe, pointer egx.ai vers GitHub Pages
5. **Passer les entites HTML en UTF-8 direct** -- nettoyage cosmétique
6. **Test reel sur mobile** -- verifier le rendu physique sur un iPhone/Android, pas juste les breakpoints CSS
7. **Ajouter le BRIEF original** au repo si besoin de reference future
