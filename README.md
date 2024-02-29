# Why this repo ?

This repository hosts the frontend source code. The corresponding website
functions as a platform where users can procure "Wildians" and delve into
comprehensive insights about them.

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/7d6512ca-7253-4202-8c27-9f33b6c2e4b1)

## Links

-   https://wildians.org/
-   https://preprod.wildians.org/
-   https://dev.wildians.org/

## Technologies

-   Next.js empowering us to construct high-quality web applications seamlessly
    utilizing React components.
-   Firebase: Firebase enriches our frontend with critical functionalities
    including database management, comprehensive analytics, and secure
    authentication mechanisms.
-   Taquito as our payment gateway to accept cryptocurrency payments.
-   Tailwind CSS for styling purposes. Tailwind CSS is a highly customizable CSS
    framework that offers utility-first CSS classes, allowing for rapid and
    flexible styling development.

## How to use it

Before proceeding, ensure you have Node.js and Yarn installed via your preferred
package manager. You can obtain them from their official websites. Additionally,
configure the necessary environment variables as per your requirements.

-   Nodejs: minimum version 18
-   Yarn: recommended version 1.22

### Install nodejs

Go to the Node.js website here: https://nodejs.org/en

Run the downloaded installer and follow the installation instructions. Make sure
to select the option to install Node.js with a minimal version 18.

After installation, open your command prompt or PowerShell and run the following
command to verify that Node.js is at least version 18:

```bash
node --version
```

### Install yarn

Run the following command in your console to install Yarn globally:

```bash
npm install --global yarn
```

After installation, verify that Yarn is installed correctly by running:

```bash
yarn --version
```

### Setup project

Clone the repository and install the dependencies:

To install project dependencies, execute the following command in your terminal

```bash
yarn
```

Run the project as dev mode

```bash
yarn run dev
```

## CI/CD & Deploy / GitFlow

A continuous integration pipeline is provided to automatically check the code
before merging.

Our deployment strategy includes automatic deployment to production (main
branch), pre-production (preprod branch), and development (dev branch)
environments.

We employ Husky as a pre-commit tool to validate our code and enforce the Git
flow as follow:

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/1793bec2-54b2-40ed-a6b1-c535a424e020)

# Outil de suivi

## Microsoft Clarity

### Qu'est ce que Clarity ?

Microsoft Clarity est une solution d'analyse comportementale qui permet aux
développeurs et aux propriétaires de sites de recueillir des données sur la
façon dont les visiteurs naviguent et interagissent avec leur site web.
Contrairement à d'autres outils d'analyse, Clarity se concentre sur la
compréhension des actions des utilisateurs à travers des visualisations comme
les heatmaps (cartes de chaleur), les enregistrements de sessions et un tableau
de bord d'analyse approfondie.

### Intégration dans le code

Code clarity:

```
<script type="text/javascript">
   (function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
   })(window, document, "clarity", "script", CLARITY_ID);
</script>
```

Avec **CLARITY_ID** représentant le code de suivi actuel. (retrouvable sur
https://clarity.microsoft.com/projects/)

Dans le fichier app.tsx ajouter le morceau de clarity avec l'id de suivi dans le
Head de l'app. Si le code de suivi est changé, juste remplacer le code de dans
le script suffit.

Fonction appelée dans le render de l'app:\
![image](https://github.com/areschain-organization/Wildians-frontend/assets/61387998/a8fee10d-6f96-4f0f-b978-de9ee627fd03)

**Attention !** Le code de suivi peut être différent sur les différents
environnements (doit être déployé en prod pour avoir la lecture du site
officiel).

### Navigation

1. Dashboard:\
   ![image-8](https://github.com/areschain-organization/Wildians-frontend/assets/61387998/a3f0b6c9-128d-400f-a91c-9cc811995520)

Ici on peut retrouver les informations du nombres d'utilisateurs, le temps
qu'ils ont passé, le navigateur utilisé, la région/pays, etc... 2. Recordings:\
![image-9](https://github.com/areschain-organization/Wildians-frontend/assets/61387998/74a39ce2-9697-4713-a00f-f1ef5c0986e1)

Capture une vidéo du passage de l'utilisateur sur le site web avec ses
mouvements. (Cela aide à identifier les obstacles et les points de friction dans
l'expérience utilisateur). 4. Heatmaps:\
![image-10](https://github.com/areschain-organization/Wildians-frontend/assets/61387998/aede73d1-7723-4f33-841b-4f97dab702d5)

Carte thermique, offre une représentation visuelle des zones d'activité et
d'intérêt du site (où les utilisateurs cliquent, déplacent leur souris, et
défilent sur le site). 5. Settings:\
![image-11](https://github.com/areschain-organization/Wildians-frontend/assets/61387998/806ce6bf-ea55-4a26-80d4-31b1dc1a7cfb)

Pour ajouter des membres et activer l'intégrations des informations avec google
Analytics.

### Problèmes

-   Les codes de suivi ne sont pas facile à cacher voir impossible, après de
    multiple tentative de passage dans des secrets, ce n'est pas une information
    qui sera facilement caché, cependant ce n'est pas un code qui donne accès a
    tout, si une bonne sécurité est mise en place (double authentifications
    etc..) alors il n'y a pas de problème à le mettre directement dans le
    <>Head> de la page.
