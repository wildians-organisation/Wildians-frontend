# Why this repo ?

This repository hosts the frontend source code. The corresponding website functions as a platform where users can procure "Wildians" and delve into comprehensive insights about them.

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/7d6512ca-7253-4202-8c27-9f33b6c2e4b1)


## Links
- https://wildians-prod.netlify.app/
- https://preprod.wildians.org/
- https://dev.wildians.org/

## Technologies

- Next.js empowering us to construct high-quality web applications seamlessly utilizing React components.
- Firebase: Firebase enriches our frontend with critical functionalities including database management, comprehensive analytics, and secure authentication mechanisms.
- Taquito as our payment gateway to accept cryptocurrency payments.
- Tailwind CSS for styling purposes. Tailwind CSS is a highly customizable CSS framework that offers utility-first CSS classes, allowing for rapid and flexible styling development. 

## How to use it

Before proceeding, ensure you have Node.js and Yarn installed via your preferred package manager. You can obtain them from their official websites. Additionally, configure the necessary environment variables as per your requirements.

- Nodejs: minimum version 20
- Yarn: the version 1.22 works fine

### Install nodejs

Go to the Node.js website here: https://nodejs.org/en

Run the downloaded installer and follow the installation instructions. Make sure to select the option to install Node.js with a minimal version 20.

After installation, open your command prompt or PowerShell and run the following command to verify that Node.js is at least version 20:

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

A continuous integration pipeline is provided to automatically check the code before merging.

Our deployment strategy includes automatic deployment to production (main branch), pre-production (preprod branch), and development (dev branch) environments.

We employ Husky as a pre-commit tool to validate our code and enforce the Git flow as follow:

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/1793bec2-54b2-40ed-a6b1-c535a424e020)



