# Nikko Kowalow — Portfolio

A personal developer portfolio built with Next.js, React, Three.js, and Tailwind CSS. Features interactive 3D visuals, animated light rays, tilt cards, and a floating nav bar.

---

## Table of Contents

- [What This Project Is](#what-this-project-is)
- [Tech Stack (Plain English)](#tech-stack-plain-english)
- [Prerequisites — What You Need to Install](#prerequisites--what-you-need-to-install)
  - [1. Install Node.js](#1-install-nodejs)
  - [2. Install Git](#2-install-git)
  - [3. Install a Code Editor](#3-install-a-code-editor)
- [Getting the Project onto Your Computer](#getting-the-project-onto-your-computer)
- [Installing Project Dependencies](#installing-project-dependencies)
- [Running the Project Locally](#running-the-project-locally)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Deploying to the Web (Vercel)](#deploying-to-the-web-vercel)
- [Common Issues & Fixes](#common-issues--fixes)

---

## What This Project Is

This is a portfolio website — a webpage that acts as a digital resume and showcase. It lives on the internet and lets people see who you are, what you've built, and how to reach you.

The site is built as a **web application**, which means instead of a simple static HTML page, it uses a modern JavaScript framework to generate the page dynamically and add interactive animations.

---

## Tech Stack (Plain English)

Here's every major technology used in this project and what it actually does:

| Technology | What it does |
|---|---|
| **Next.js** | The main framework. Think of it as the engine of the car — it handles routing, page loading, and building the final website. |
| **React** | The library Next.js is built on. You write the UI as reusable "components" (like LEGO bricks). |
| **TypeScript** | JavaScript but with stricter rules, so mistakes get caught before they cause bugs. Files end in `.tsx` or `.ts`. |
| **Tailwind CSS** | A way to style the page using short class names directly in your code (e.g. `bg-black`, `text-white`, `p-4`). |
| **Three.js / React Three Fiber** | Renders 3D graphics in the browser. Used for the Prism and Aurora visual effects. |
| **Motion (Framer Motion)** | Handles animations — things sliding in, fading, bouncing, etc. |
| **Node.js & npm** | Node.js lets JavaScript run on your computer (outside a browser). npm is its package manager — it downloads and manages all the libraries above. |

---

## Prerequisites — What You Need to Install

Before you can run this project, you need to install three things on your computer. This only needs to be done once ever — not per project.

### 1. Install Node.js

Node.js is what lets your computer run this project. npm (the package manager) comes bundled with it automatically.

**Steps:**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the version that says **LTS** (Long Term Support) — it's the stable one
3. Open the downloaded file and follow the installer steps (just keep clicking Next/Continue)
4. When it's done, verify it worked:
   - On **Mac**: open the **Terminal** app (search for it in Spotlight with Cmd+Space)
   - On **Windows**: open **Command Prompt** (search "cmd" in the Start menu)
   - Type the following and press Enter:
     ```
     node --version
     ```
   - You should see something like `v22.0.0`. If you do, Node.js is installed.
   - Also run:
     ```
     npm --version
     ```
   - You should see a version number like `10.0.0`.

> **What is the Terminal / Command Prompt?**
> It's a text-based way to control your computer. Instead of clicking icons, you type commands. Developers use it constantly. Don't be intimidated by it — you only need a handful of commands.

---

### 2. Install Git

Git is a version control system. It tracks changes to your code and lets you download ("clone") projects from the internet (like this one from GitHub).

**Steps:**

**On Mac:**
1. Open Terminal
2. Type `git --version` and press Enter
3. If Git isn't installed, Mac will automatically prompt you to install it — click Install and follow the steps
4. Alternatively, download it from [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

**On Windows:**
1. Go to [https://git-scm.com/download/windows](https://git-scm.com/download/windows)
2. Download and run the installer
3. Leave all options at their defaults and click Next through the whole thing
4. After install, open **Git Bash** (it was installed with Git) and type `git --version` to confirm

---

### 3. Install a Code Editor

A code editor is where you'll actually read and edit the code. The most popular free one is **Visual Studio Code (VS Code)**.

**Steps:**

1. Go to [https://code.visualstudio.com](https://code.visualstudio.com)
2. Download the version for your operating system
3. Open the installer and follow the steps

Once installed, open VS Code. You don't need to do anything in it yet.

---

## Getting the Project onto Your Computer

Now you'll **clone** (download) this project from GitHub to your computer.

1. Open Terminal (Mac) or Git Bash (Windows)

2. Navigate to where you want the project to live. For example, your Desktop:
   ```bash
   cd ~/Desktop
   ```
   > `cd` means "change directory" — it's how you navigate folders in the terminal.

3. Clone the repository:
   ```bash
   git clone https://github.com/nikkowalow/portfolio.git
   ```
   > Replace the URL above with your actual GitHub repo URL if it differs.

4. Move into the project folder:
   ```bash
   cd portfolio
   ```

5. Open the project in VS Code:
   ```bash
   code .
   ```
   > The `.` means "current folder". This opens the entire project in VS Code.

---

## Installing Project Dependencies

The project relies on many libraries (Three.js, Motion, Tailwind, etc.). These aren't included in the repo — they need to be downloaded separately. This is called installing **dependencies**.

In your terminal, make sure you're inside the project folder (you should see `portfolio` in the path), then run:

```bash
npm install
```

This reads the `package.json` file (which lists all required libraries) and downloads them all into a folder called `node_modules`. This can take 1–3 minutes.

You'll see a lot of text scroll by — that's normal. When it's done, you'll be back at a blank prompt.

> **Note:** The `node_modules` folder can be several hundred MB. Never delete it manually — if something goes wrong, just run `npm install` again.

---

## Running the Project Locally

Now you can start the development server — this runs the website on your own computer so you can see it in a browser.

```bash
npm run dev
```

You'll see output like:

```
▲ Next.js 15.x
- Local: http://localhost:3000
```

Open your browser and go to:

```
http://localhost:3000
```

The site will load. Any time you save a change to a file, the browser will automatically update — no refreshing needed. This is called **hot reloading**.

To stop the server, go back to the terminal and press `Ctrl + C`.

---

## Project Structure

Here's a map of the important files and folders:

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          ← The main homepage (this is what you see at localhost:3000)
│   │   ├── layout.tsx        ← The wrapper around every page (sets fonts, metadata, etc.)
│   │   └── globals.css       ← Global CSS styles applied to the whole site
│   ├── components/
│   │   ├── LightRays.tsx     ← The animated light ray background effect
│   │   ├── CardCarousel.tsx  ← The scrollable project cards in the center
│   │   ├── Card.tsx          ← A single project card component
│   │   ├── Badge.tsx         ← The name/intro badge on the left
│   │   ├── Aurora.tsx        ← Aurora animated background (currently commented out)
│   │   ├── Prism.tsx         ← 3D prism effect (currently commented out)
│   │   └── GradientDots.tsx  ← Dot grid background (currently commented out)
│   └── styles/
│       └── fonts.css         ← Custom font imports
├── public/
│   ├── icons/                ← GitHub, LinkedIn, X icons used in the nav bar
│   └── fonts/                ← Font files
├── package.json              ← Lists all dependencies and scripts
├── tailwind.config.ts        ← Tailwind CSS configuration
├── tsconfig.json             ← TypeScript configuration
└── next.config.ts            ← Next.js configuration
```

---

## Making Changes

Here are the most common things you'll want to edit:

### Change your name or bio
Open `src/components/Badge.tsx` and look for the text content. Edit it directly and save — the browser will update automatically.

### Add or edit a project card
Open `src/components/CardCarousel.tsx`. Each card is a component — you can add new ones or edit existing text/links.

### Change social links (GitHub, LinkedIn, X)
Open `src/app/page.tsx` and look for the `<a href="...">` tags near the bottom. Replace the URLs with your own profiles.

### Change the background effect
In `src/app/page.tsx`, you'll see several commented-out blocks (lines starting with `{/*`). You can swap which background is active by:
1. Commenting out the current `<LightRays ... />` block (add `{/*` before it and `*/}` after)
2. Uncommenting one of the other options (`<Aurora />`, `<Prism />`, `<GradientDots />`)

### Change colors or layout
Most styling is done with Tailwind CSS class names directly on the HTML elements. For example, `bg-black` sets the background to black. Refer to the [Tailwind docs](https://tailwindcss.com/docs) to find class names for what you want to change.

---

## Deploying to the Web (Vercel)

Vercel is the easiest way to put this site on the internet for free. It's made by the same team as Next.js.

### One-time setup:

1. Go to [https://vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Leave all settings at their defaults and click **"Deploy"**

Vercel will build and deploy your site. In about 1 minute you'll get a live URL like `your-portfolio.vercel.app`.

### Every future update:

After you make changes locally and push them to GitHub:
```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel automatically detects the push and redeploys your site. No manual steps needed.

---

## Common Issues & Fixes

**"command not found: npm"**
Node.js isn't installed or didn't install correctly. Go back to [Install Node.js](#1-install-nodejs) and redo the steps. Try closing and reopening your terminal after installing.

**"command not found: git"**
Git isn't installed. Go back to [Install Git](#2-install-git).

**Port 3000 already in use**
Something else is already running on port 3000. Either stop that process, or run the dev server on a different port:
```bash
npm run dev -- -p 3001
```
Then visit `http://localhost:3001`.

**The page is blank or shows an error**
Check your terminal — it will usually print an error message explaining what went wrong. Common causes:
- A syntax error in a file you edited (a missing `}` or `"`, etc.)
- A missing import at the top of a file

**`node_modules` is missing**
Run `npm install` again.

**Changes aren't showing up in the browser**
Make sure you saved the file (Cmd+S on Mac, Ctrl+S on Windows). If it still doesn't update, stop the server with Ctrl+C and run `npm run dev` again.

---

## Quick Reference — Terminal Commands

| Command | What it does |
|---|---|
| `cd folder-name` | Enter a folder |
| `cd ..` | Go up one folder |
| `ls` (Mac) / `dir` (Windows) | List files in the current folder |
| `npm install` | Install all dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production version |
| `Ctrl + C` | Stop whatever is running in the terminal |
| `git status` | See what files have changed |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save a snapshot of your changes |
| `git push` | Upload changes to GitHub |
