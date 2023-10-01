![Tech Stack](public/images/msh-nextjs.png)

## www.huangyiqiu.com

![website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fmirsazzathossain.me&style=flat-square) ![GitHub](https://img.shields.io/github/license/mirsazzathossain/mirsazzathossain.me?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/hyqshr/personal-blog?style=flat-square) ![GitHub repo size](https://img.shields.io/github/repo-size/hyqshr/personal-blog?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/hyqshr/personal-blog?style=flat-square)

React 精美的个人博客。基于Next.js, 提供静态markdown x页面生成，github评论系统。

In short, the tech stack of the website is as follows:

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Heroicons](https://heroicons.com/)
- Content: [Markdown](https://www.markdownguide.org/)
- Content Management: [Contentlayer](https://www.contentlayer.dev/)
- Deployment: [Vercel](https://vercel.com/)
- Comments: [giscus](https://giscus.app/)

## Overview

- `app/*`: I have used next.js new `app` directory structure. This directory contains the main app.
- `components/*`: All custom components are stored in this directory.
- `content/*`: This directory contains all the [Contentlayer](https://contentlayer.dev/) contents.
- `public/*`: This directory contains all the static assets of the website.
- `public/content/*`: This directory contains all the static contents of the website. e.g. projects, experiences, education, etc.
- `styles/*`: I have used Tailwind CSS for styling. This directory contains the Tailwind CSS global styles and some custom styles for the website.
- `utils/*`: This directory contains some utility functions.

## Cloning and Forking

If you want to clone or fork this repository, please make sure to remove the `content` and `public` directories as they contain my personal content and assets. You can add your own content and assets in the `content` and `public` directories respectively.

Clone the repository by running the following command.

```bash
git clone https://github.com/hyqshr/personal-blog.git
# or
git clone git@github.com:hyqshr/personal-blog.git
```

You can remove the `content` and `public` directories by running the following commands.

```bash
rm -rf content
rm -rf public
```

Add your own content and assets in the `content` and `public` directories respectively.

## Installation

Install the dependencies by running the following command.

```bash
npm install
# or
yarn install
```

Finally, run the following command to start the development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thanks
https://github.com/mirsazzathossain/mirsazzathossain.me
