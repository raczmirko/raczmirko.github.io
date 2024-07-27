# My Portfolio Website

Welcome to my portfolio website repository! This project is built using React and Material-UI (MUI), and is automatically deployed to GitHub Pages using CI/CD workflows.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [CI/CD and Deployment](#cicd-and-deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

This is my personal portfolio website showcasing my projects, skills, and experience. It is built with React for the frontend, utilizing Material-UI for styling and components, MUI-x for additional features, and i18n for internationalization support. The ParticlesJS library provides a fun, interactive particle background for the site. I wanted to create this site to learn more about React, CD/CI workflows and to replace my old wordpress website.

## Demo

You can view the live site here: [My Portfolio](https://raczmirko.github.io)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raczmirko/raczmirko.github.io.git
   cd raczmirko.github.io
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

To start the development server, run:

```bash
npm start
```

This will launch the application on `http://localhost:3000`.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material-UI (MUI):** A popular React UI framework.
- **MUI-x:** Extensions for Material-UI, providing additional components and utilities for data-heavy uses. The resources table is made with the MUI-X Data Grid for example.
- **i18n:** Internationalization framework for managing translations.
- **GitHub Pages:** Hosting the website.

## CI/CD and Deployment

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The workflow is defined in the `.github/workflows/npm.yml`  and `.github/workflows/deploy.yml` files and includes the following steps:

1. **Build:** The project is built using the latest Node.js environment, as well as an older one to ensure compatibility.
2. **Deploy:** The build is automatically deployed to GitHub Pages upon successful completion of the build and test steps. The deploy uses the gh-pages script.

## Dependabot
Dependencies are monitored by Dependabot, making sure the application always stays up to date with the newest dependencies.


## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. Please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.