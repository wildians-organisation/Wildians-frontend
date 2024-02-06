# Why this repo ?

This repository hosts the frontend source code. The corresponding website functions as a platform where users can procure "Wildians" and delve into comprehensive insights about them.

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/7d6512ca-7253-4202-8c27-9f33b6c2e4b1)


## Links
- https://wildians-prod.netlify.app/
- https://preprod.wildians.org/
- https://dev.wildians.org/

## Technologies

In our frontend, we use Next.js. Next.js empowering us to construct high-quality web applications seamlessly utilizing React components. Furthermore, our frontend architecture benefits significantly from Firebase integration. Firebase enriches our frontend with critical functionalities including efficient database management, comprehensive analytics, and secure authentication mechanisms. We leverage Taquito as our payment gateway to accept cryptocurrency payments. We utilize Tailwind CSS for styling purposes. Tailwind CSS is a highly customizable CSS framework that offers utility-first CSS classes, allowing for rapid and flexible styling development. 

## How to use it

Before proceeding, ensure you have Node.js and Yarn installed via your preferred package manager. You can obtain them from their official websites. Additionally, configure the necessary environment variables as per your requirements. 

## Update nodejs and yarn.

### Install nodejs

Visit Node.js Website:
Go to the Node.js website here.

Download Node.js Installer:
Download the Node.js installer for Windows.

Run Installer:
Run the downloaded installer and follow the installation instructions. Make sure to select the option to install Node.js with a minimal version 18.

Verify Node.js Version:
After installation, open your command prompt or PowerShell and run the following command to verify that Node.js is at least version 18:




Installing Dependencies:

To install project dependencies, execute the following command in your terminal

```bash
node -v
```

Installing Yarn

To install Yarn, follow these steps:

    Open Console:
    Open your preferred console or terminal.

    Install Yarn:
    Run the following command in your console to install Yarn globally:

    bash

npm install --global yarn

Verify Installation:
After installation, verify that Yarn is installed correctly by running:

bash

yarn --version

## CI/CD & Deploy / GitFlow

A continuous integration pipeline is provided to automatically check the code. This ensures that each code change is thoroughly tested before merging.

Our deployment strategy includes automatic deployment to production (main branch), pre-production (preprod branch), and development (dev branch) environments. This enables automatic deployment.

We employ Husky as a pre-commit tool to validate our code and enforce the Git flow as follow:

![image](https://github.com/areschain-organization/Wildians-frontend/assets/70762494/1793bec2-54b2-40ed-a6b1-c535a424e020)





