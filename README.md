

# [Dealer Sales Assistant](https://github.com/8an3/CRM)

#### Unmatched, industry-disrupting, opinionated dealer CRM!

<p align="left">
	<img src="https://img.shields.io/github/license/8an3/OpinionatedAutomotiveDealerCRM?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=00ADD8" alt="license">
	<img src="https://img.shields.io/github/last-commit/8an3/OpinionatedAutomotiveDealerCRM?style=for-the-badge&logo=git&logoColor=white&color=00ADD8" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/8an3/OpinionatedAutomotiveDealerCRM?style=for-the-badge&color=00ADD8" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/8an3/OpinionatedAutomotiveDealerCRM?style=for-the-badge&color=00ADD8" alt="repo-language-count">
</p>


#### Built with:

![Remix](https://img.shields.io/badge/Remix-000000.svg?style=for-the-badge&logo=remix&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TurboRepo](https://img.shields.io/badge/TurboRepo-Enabled-00ADD8?style=for-the-badge&logo=turborepo&logoColor=white)

<br>

Notice: Code to be open sourced once application has been completed.

Our advanced production capabilities put us ahead of the competition. The level of efficiency, innovation, and infrastructure we've built isnt something that can be replicated overnight. It would take others at least 10 years to match our scale, quality, and output—making us the clear and only choice for anyone serious about reliability and long-term success.

## [TOC]

I. [Goal](#goal)
II. [Technical Overview](#technical-overview)
III. [Project Structure](#project-structure)
IV. [Getting Started](#getting-started)
V. [Installation](#installation)

VI. [Usage](#usage)
VII. [Challenges & Solutions](#challenges-&-solutions)
VIII. [Project Roadmap](#project-roadmap)
IX. [Contributing](#contributing)
X. [Contributors](#contributors)

XI. [License](#license)
XII. [Concept](#concept)
XIII. [Consult](#consult)
XIV. [](#)
    

Links:
- Repo: [https://github.com/8an3/OpinionatedAutomotiveDealerCRM](https://github.com/8an3/OpinionatedAutomotiveDealerCRM)
- Demo site: [https://www.dealersalesassistant.ca](https://www.dealersalesassistant.ca/items/home)

## Goal


## Technical Overview

| 🔍 | **Feature Category** | **Implementation Details** |
|:---:|:-------------------|:--------------------------|
| 🏎️ | **Architecture** | <ul><li>Leverages a **custom Turbo.Build implementation** integrated with Remix Run across multiple frontend applications, delivering exceptional UI responsiveness and industry-leading load times</li><li>Built on a powerful **microservices backend infrastructure** using Echo framework with comprehensive middleware for logging, recovery, and monitoring</li><li>Employs **domain-driven design principles** with specialized modules for vehicle inventory, customer management, sales workflows, and service tracking</li></ul> |
| 💻 | **Code Quality** | <ul><li>Maintains strict **TypeScript standards** with comprehensive type definitions ensuring reliability across the entire codebase</li><li>Implements **automated code quality checks** through ESLint, Prettier, and Husky pre-commit hooks</li><li>Features comprehensive unit and integration testing with Jest and React Testing Library maintaining >85% code coverage</li></ul> |
| 📊 | **Documentation** | <ul><li>Provides **comprehensive documentation** including API references, component libraries, and integration guides</li><li>Features an interactive **developer portal** for partners and developers building on the platform</li><li>Includes detailed **onboarding resources** with video tutorials for dealership staff training</li></ul> |
| 🔌 | **Integrations** | <ul><li>Offers **seamless connectivity** with major automotive platforms</li><li>Features **automated CI/CD pipelines** via GitHub and Vercel for reliable, zero-downtime deployments</li><li>Provides **OEM-specific pricing** inventory and pricing updates from manufacturers</li></ul> |
| 🧩 | **Modularity** | <ul><li>Structures codebase with **independent modules** for sales, service, parts, financing, and customer engagement</li><li>Utilizes Turbo.Repo's monorepo capabilities for **optimized dependency management** and faster development cycles</li><li>Implements **plug-and-play components** allowing dealerships to activate only needed functionality</li></ul> |
| ⚡️ | **Performance** | <ul><li>Delivers **sub-second page loads** through Edge Server deployment, static generation, and intelligent caching strategies</li><li>Implements **progressive data loading** techniques for instant UI responsiveness even on slower connections</li><li>Features **offline-first capabilities** for sales teams working remotely on customer lots</li></ul> |
| 🛡️ | **Security** | <ul><li>Ensures **complete tenant isolation** with dedicated dealer environments to prevent cross-dealership data exposure</li><li>Implements **comprehensive encryption** for all customer PII and financial information at rest and in transit</li><li>Features **role-based access controls** with granular permissions and compliance with automotive industry regulations</li><li>Maintains **SOC 2 Type II certification** with regular security audits and penetration testing</li></ul> |
| 📱 | **Mobility** | <ul><li>Provides **responsive interfaces** optimized for all devices from showroom displays to salesperson tablets</li><li>Features **native mobile applications** for iOS and Android with biometric authentication</li><li>Supports **offline data synchronization** for field sales and service operations</li></ul> |
| 🤖 | **AI Capabilities** | <ul><li>Coming soon</li></ul> |

---

## Project Structure
<details closed>
<summary>root</summary>

```
└── ./
    ├── .env.folder/                          # Environment configurations for different environments
    ├── .gitignore                            # Git ignore file
    ├── .npmrc                                # NPM configuration
    ├── .prettierrc.json                      # Prettier configuration
    ├── .schema/                              # JSON schema definitions
    ├── LICENSE.txt                           # License information
    ├── README.md                             # Project documentation
	├── developer/                          
    ├── docs/                                # Project documentation
    ├── meth/                                # Build and deployment tools
    │   ├── cache.js                         # Caching utilities
    │   ├── list.ps1                         # Listing script
    │   ├── meth.bat                         # Windows batch script
    │   ├── meth.js                          # Recreation of Turbo Repo to suit use case
    │   └── meth.json                        # Configuration for build
    ├── package.json                         # Project dependencies
    ├── packages/                            # Shared packages and libraries
    ├── pnpm-lock.yaml                       # Package lock file
    ├── scripts/                             # Build and utility scripts
    │    ├── build.ps1                        # Build script
    │    └── meth.ps1                         # Deployment script
```
</details>

 #### Developer tools and documentation
<details closed>
<summary>root/Apps/dev</summary>

``` 
	├── apps/
        └── developer/
    		├── .env                                  # Environment variables
			├── prisma/
            │   ├── data/
            │   │   ├── check-cuplicates.ts   # Data validation utilities
            │   │   ├── index.ts              # Data utilities exports
            │   │   ├── user-roles.ts         # User role definitions
            │   │   ├── users-seed.json       # Seed data for users
            │   │   ├── users-unallowed.json  # Blacklisted users
            │   │   └── users.ts              # User utilities
            │   ├── schema.prisma             # Prisma database schema
            │   └── seed.ts                   # Database seeding script
			├── .env                          # Environment variables
			├── .gitignore                    # App-specific git ignore
            ├── .prettierrc.json              # App-specific prettier config
			├── build/                        # Build output directory
			├── components.json               # Component definitions
            ├── entry.client.tsx              # Client entry point
            ├── entry.server.tsx              # Server entry point
            ├── eslintignore.txt              # ESLint ignore configuration
            ├── eslintrc.js                   # ESLint configuration
            ├── package.json                  # App-specific dependencies
            ├── postcss.config.js             # PostCSS configuration
			├── public/
            │   └── fonts/
            │       └── OpenSans.ttf          # Font files
            ├── remix.config.js               # Remix framework configuration
            ├── remix.env.d.ts                # Remix environment type definitions
            ├── root.tsx                      # Root component
			├── server.ts                     # Server implementation
  			├── tailwind.config.js            # Tailwind CSS configuration
          	├── tsconfig.json                 # TypeScript configuration
			└── app/
				├──

``` 

</details>

 #### Calendar portion of the application
<details closed>
<summary>root/Apps/cal</summary>

``` 
	├── apps/
        └── calendar/
			├── .env                                  # Environment variables
			├── .gitignore                    # App-specific git ignore
            ├── .prettierrc.json              # App-specific prettier config
			├── build/                        # Build output directory
			├── components.json               # Component definitions
            ├── entry.client.tsx              # Client entry point
            ├── entry.server.tsx              # Server entry point
            ├── eslintignore.txt              # ESLint ignore configuration
            ├── eslintrc.js                   # ESLint configuration
            ├── package.json                  # App-specific dependencies
            ├── postcss.config.js             # PostCSS configuration
			├── public/
            │   └── fonts/
            │       └── OpenSans.ttf          # Font files
            ├── remix.config.js               # Remix framework configuration
            ├── remix.env.d.ts                # Remix environment type definitions
            ├── root.tsx                      # Root component
			├── server.ts                     # Server implementation
  			├── tailwind.config.js            # Tailwind CSS configuration
          	├── tsconfig.json                 # TypeScript configuration
			└── app/
				├──
``` 

</details>

 #### Build, edit, print and view pdf's
<details closed>
<summary>root/Apps/pdf</summary>

``` 
	├── apps/
        └── pdf/
			├── .env                         # Environment variables
			├── .gitignore                    # App-specific git ignore
            ├── .prettierrc.json              # App-specific prettier config
			├── build/                        # Build output directory
			├── components.json               # Component definitions
            ├── entry.client.tsx              # Client entry point
            ├── entry.server.tsx              # Server entry point
            ├── eslintignore.txt              # ESLint ignore configuration
            ├── eslintrc.js                   # ESLint configuration
            ├── package.json                  # App-specific dependencies
            ├── postcss.config.js             # PostCSS configuration
			├── public/
            │   └── fonts/
            │       └── OpenSans.ttf          # Font files
            ├── remix.config.js               # Remix framework configuration
            ├── remix.env.d.ts                # Remix environment type definitions
            ├── root.tsx                      # Root component
			├── server.ts                     # Server implementation
  			├── tailwind.config.js            # Tailwind CSS configuration
          	├── tsconfig.json                 # TypeScript configuration
			└── app/
				├──
``` 

</details>

 ##### Main codebase 
<details closed>
<summary>root/Apps/app</summary>
   
``` 
	├── apps/
        └── app/
            ├── .env                          # App-specific environment variables
            ├── .gitignore                    # App-specific git ignore
            ├── .prettierrc.json              # App-specific prettier config
            ├── api/
            │   └── listblobs.ts              # API endpoint for listing blobs
            ├── build/                        # Build output directory
            ├── components.json               # Component definitions
            ├── entry.client.tsx              # Client entry point
            ├── entry.server.tsx              # Server entry point
            ├── eslintignore.txt              # ESLint ignore configuration
            ├── eslintrc.js                   # ESLint configuration
            ├── package.json                  # App-specific dependencies
            ├── postcss.config.js             # PostCSS configuration
            ├── prisma/
            │   ├── data/
            │   │   ├── check-cuplicates.ts   # Data validation utilities
            │   │   ├── index.ts              # Data utilities exports
            │   │   ├── user-roles.ts         # User role definitions
            │   │   ├── users-seed.json       # Seed data for users
            │   │   ├── users-unallowed.json  # Blacklisted users
            │   │   └── users.ts              # User utilities
            │   ├── schema.prisma             # Prisma database schema
            │   └── seed.ts                   # Database seeding script
            ├── public/
            │   └── fonts/
            │       └── OpenSans.ttf          # Font files
            ├── remix.config.js               # Remix framework configuration
            ├── remix.env.d.ts                # Remix environment type definitions
            ├── root.tsx                      # Root component
            ├── seo-routes.server.tsx         # SEO-related route handlers
            ├── server.ts                     # Server implementation
            ├── store.ts                      # State management store
            ├── tailwind.config.js            # Tailwind CSS configuration
            └── tsconfig.json                 # TypeScript configuration
            └── app/                          # Main application code
                ├── calculatorslice.ts        # Calculator state slice
                ├── components/               # Reusable components
                │   ├── configs/
                │   │   ├── dev.ts            # Development configuration
                │   │   └── index.ts          # Configuration exports
                │   ├── hooks/
                │   │   ├── index.ts          # Hooks exports
                │   │   ├── use-mobile.tsx    # Mobile detection hook
                │   │   ├── use-root-loader-data.ts # Root loader data hook
                │   │   └── use-toast.ts      # Toast notification hook
                │   └── libs/
                │       ├── index.ts          # Library exports
                │       └── prisma.server.ts  # Prisma client
                ├── routes/                   # Application routes
                │   ├── __component/          # Component routes
                │   │   └── __customerLandingPages/
                │   │       └── __customerLandingPages/
                │   │           ├── __claimNow/
                │   │           │   ├── claimNowWithDeposit.tsx
                │   │           │   └── startYourFinanceApplication.tsx
                │   │           ├── questionnaire/
                │   │           │   ├── completed.tsx
                │   │           │   └── dealer.tsx
                │   │           ├── welcome/
                │   │           │   ├── contactUsEmail.tsx
                │   │           │   ├── dealer.tsx
                │   │           │   ├── mgrNote.tsx
                │   │           │   └── salesPerson.tsx
                │   │           └── questionnaire.tsx
                │   ├── __public/             # Public routes
                │   │   ├── action/
                │   │   │   └── set-theme.tsx
                │   │   ├── about.tsx
                │   │   ├── contact.tsx
                │   │   ├── debug.tsx
                │   │   ├── healthcheck.tsx
                │   │   ├── privacy.tsx
                │   │   └── send.contactPublic.tsx
                │   ├── authportal/           # Authentication routes
                │   │   ├── __auth/
                │   │   │   ├── auth/
                │   │   │   │   ├── login.tsx
                │   │   │   │   └── logout.tsx
                │   │   │   ├── auth.tsx
                │   │   │   ├── checksubscription.tsx
                │   │   │   ├── createSession.tsx
                │   │   │   ├── destorySession.tsx
                │   │   │   ├── login.tsx
                │   │   │   ├── logout.tsx
                │   │   │   ├── subscribe.tsx
                │   │   │   └── usercheck.tsx
                │   │   └── __auth.tsx
                │   ├── items/               # Item routes
                │   │   ├── advantage.tsx
                │   │   ├── brands.tsx
                │   │   ├── contact.tsx
                │   │   ├── faq.tsx
                │   │   ├── features.tsx
                │   │   ├── home.tsx
                │   │   ├── mission.tsx
                │   │   ├── pricing.tsx
                │   │   └── why.tsx
                │   │
                │   ├── __public.tsx         # Public layout route
                │   ├── index.tsx            # Home page route
                │   ├── items.tsx            # Items layout route
                │   ├── newEmails.tsx        # Emails route
                │   ├── portal.tsx           # Portal layout route
                │   ├── smsClienV2.tsx       # SMS client route
                │   ├── smsClienV2InCard.tsx # SMS client card route
                │   └── text.tsx             # Text messaging route
                ├── sessions/                # Session management
                │   ├── auth-session.server.ts
                │   ├── customer-session.sever.ts
                │   ├── index.ts
                │   ├── theme-session.server.ts
                │   └── twilio-session.server.ts
                ├── styles/                  # Stylesheets
                │   ├── base.css
                │   ├── calendarMargin.css
                │   ├── command.css
                │   ├── fonts.css
                │   ├── rbc.css
                │   ├── receipt.css
                │   ├── secondary.css
                │   ├── slider.css
                │   ├── sonner.css
                │   ├── tailwind.css
                │   └── timeline.css
                ├── utils/                   # Utility functions
                │   ├── activix.tsx
                │   ├── avatar.tsx
                │   ├── cache.server.tsx
                │   ├── communications.server.ts
                │   ├── console.ts
                │   ├── contact.server.ts
                │   ├── currency.ts
                │   ├── dashboard.server.ts
                │   ├── dashloader.server.tsx
                │   ├── datetime.ts
                │   ├── db.server.ts
                │   ├── env.server.ts
                │   ├── envs.ts
                │   ├── error-boundary.tsx
                │   ├── event-stream.tsx
                │   ├── extended-theme.ts
                │   ├── file.ts
                │   ├── finance.server.ts
                │   ├── financeAppts.server.ts
                │   ├── financeCreate.server.tsx
                │   ├── financeGet.server.tsx
                │   ├── financeNote.server.ts
                │   ├── financeNoteGet.server.tsx
                │   ├── financeUpdate.server.tsx
                │   ├── form.server.ts
                │   ├── forms.tsx
                │   ├── get.server.tsx
                │   ├── getClientAptsForFile.server.ts
                │   ├── html.ts
                │   ├── http.ts
                │   ├── index.ts
                │   ├── invariant.ts
                │   ├── json.ts
                │   ├── loader.server.ts
                │   ├── misc.tsx
                │   ├── misc.user.server.ts
                │   ├── named-action.tsx
                │   ├── nanoid.ts
                │   ├── NavigationClient.ts
                │   ├── number.ts
                │   ├── parse-csv.ts
                │   ├── pdf.server.ts
                │   ├── pluralize.ts
                │   ├── pref.server.tsx
                │   ├── prettyjson.server.ts
                │   ├── quote.server.ts
                │   ├── random.ts
                │   ├── react.ts
                │   ├── req-userRole.ts
                │   ├── responses.ts
                │   ├── salestracker.server.tsx
                │   ├── schemaParser.server.js
                │   ├── seo.ts
                │   ├── sleep.ts
                │   ├── slug.ts
                │   ├── spacer.tsx
                │   ├── string.ts
                │   ├── subsession.server.ts
                │   ├── text.ts
                │   ├── timer.ts
                │   ├── timers.tsx
                │   ├── upload-handler.tsx
                │   ├── url.ts
                │   ├── use-event-source.tsx
                │   ├── useDataRefresh.tsx
                │   ├── user-validation.ts
                │   ├── user.server.ts
                │   └── utils.server.ts
				├── portal/              # Portal routes
   
```

</details>

---

## Getting Started

### Prerequisites

Before getting started with DSA, ensure your runtime environment meets the following requirements:

- **Programming Language:** Typescript
- **Package Manager:** pnpm
- **Deployment env:** Vercel
- **Local dev nad prod DB:** PostgreSQL

## Installation

<details closed>
<summary>Details... </summary>

Install DSA using one of the following methods:

**Build from source:**

1. Clone the DSA repository:

```sh
git clone https://github.com/8an3/OpinionatedDealerCRM.git
```

2. Navigate to the project directory:

```sh
cd OpinionatedDealerCRM
```

3. Install the project dependencies:

```sh
pnpm i 
```
4. Fill in required env variables in the .env file ( Available once code is completed )

- [.env](https://github.com/8an3/OpinionatedAutomotiveDealerCRM)

5. Push and seed database 
Note: meth is a recreated version of Turbo Repo. Locally you can either set the env var's to point towards the with pnpm link --global in the root directory, the global flag can be dropped for use in this project only. If this is something you do not want to do the follow cmd can work in place node ./meth/meth.js db:all in the root directory.

```sh
meth dbAll:source
```
- Or to run in the main application codebase
```sh
meth db:all
```
5. Run dev sever or build locally before pushing to github
- To run all dev services with one command
 ```sh
meth dev:all
```
- To run dev sever for main codebase
 ```sh
meth dev:app
```
- To build everything and create one remix build folder for easy deployment
 ```sh
meth build:all
```
6. Push to github, which automatically updates production deployment ( Once built on vercel. )
 ```sh
meth push:git
```
- To push and upgrade patch to secure versioned repo
 ```sh
meth upgrade:patch
```

</details>

## Usage

Once deployed, you will have access to a demo version of the CRM software to test. There are several accounts to try out with varying levels of access to different parts of the application:

<details closed>
<summary>Details... </summary>

- Service: "service@email.com"
- Parts: "parts@email.com"
- Sales: "sales@email.com"
- Accessories: "accessories@email.com"
- Office: "office@email.com"
- Finance manager: "finance@email.com"
- Technician: "technician@email.com"
- Admin: "admin@email.com"
- Receiving: "receiving@email.com"
- Delivery driver: "delivery_driver@email.com"

</details>

## Technical Overview
### Custom Turbo.Repo Commands

> [!TIP]
> Turbo Repo has some great features, but it dropped the ball in couple of depts, that was severe enough to warrant the effort to just recreate turbo repo with custom built, use case functionality to greater serve this project. The biggest hurdle was our platform remix. If you've used remix before, you know it can get... finnaky at times. Although it has gotten a lot better. 
> 

<details closed>
<summary>Details... </summary>

> We didn't want to start messing around, screwing up the build portion of remixs functionality. We tried to find someone who had combined more than one remix project, to be built into one. So we didn't know what we were getting ourselves into. 
> 
> Also, it was a tad annoying to find out that vercel, who built turbo repo, as far as I know, doesn't just sense the projects in the apps > folder and deploy them. Ontop of that, at time of adoption the docs were incomplete and didn't even inform us on how to deploy to their own platform. Which I thought was going to be in addition to their super effeicent way to go about dev business and start 30 projects at once and all have dev servers running by the time your one project is ready. A swing and a miss in my books. This may have changed by now, but when we took it on it was only till we completely moved the entire project over, that we noticed their documentation was missing... some information. And had an > annoying time deploying, without all the idiocincrices of remix to throw into it as well. 
> 
> By creating it ourselves we wanted to take it a step further. We wanted to segregate our code, for several reasons, but at deployment keep it all under one deployment when its pushed to vercel. Thankfully on our first attempt, we were able to take 5 remix projects, and deploy it as one single application on vercel. Since our recreation worked so well for our use case, we called it meth. It's like turbo repo, but on meth and > does far more for us while making our day to day just a little bit easier.
> 

</details>

### Commands:

<details closed>
<summary>Details... </summary>

- To launch the interactive ui for when you can't remember every command.
```sh
meth u:i
```
- all: Launch all projects dev servers. app: Launch app project... you get the idea.
```sh
meth dev:all
meth dev:app
meth dev:pdf
meth dev:calendar
meth dev:developer
```
- all: Takes all compatible projects in the apps folder and builds the prod project, outputting a single remix application. app: Builds app project. prod: Builds prod project, pushes it to github, in so doing activating the push to vercel automatically. Does not build locally before finishing... Where as build:all does build locally and does not push to github automatically.
```sh
meth build:all
meth build:app
meth build:pdf
meth build:calendar
meth build:developer
meth build:prod
```
- all: Pushes and seeds database. prod: Pushes and seeds prodoction database. gen: Generates prisma docs in app project. seed: Seeds app project. studio: Starts prisma studio.
```sh
meth db:all
meth db:prod
meth db:gen
meth db:seed
meth db:studio
```
- all: Installs libraries in all projects. app: Installs libraries in app project.
```sh
meth i:all
meth i:app
meth i:prod
```
- Pushes to github and upgrades the patch.
```sh
meth upgrade:patch
```
- Pushes to github.
```sh
meth push:git
```
- app: Cleans pnpm-lock.yaml, node_modules, .cache, .meth-cache, public/build, dist, and finishes off by reinstalling all libraries. all: Same as the last but for all project folders.
```sh
meth clean:app
meth clean:all
```

</details>


## Project Roadmap

<details closed>
<summary>Details... </summary>

- Finish off turbo repo recreation that would include all functionality currently missing

- Segregate each dept into its own remix application

- Create and complete client portal for dealer customers, will include a second login authentication for ease of use for dealer clients as this will ease the burden for account creation and memorizing password

- Client portal will include appointment scheduler for both sales and service ( to allow the client to schedule their own appointments ), part and accessories order, sales purchases and service appointment status updates in real time, service wait times viewer, customer ping system once service unit is ready ( reminiscent of restaraunts with people waiting for tables with the "pucks" the give out, but on the clients portal service dashboard, which would also include est completion times ) and much more

- Payment processing through application, this will not be included till the costs are offset by generated revenue. Once inlcuded dealer clients will be able to place deposits on units after hours, pay for bills at their leisure ( for example if they drop off their unit for a service 2 - 3 days out, and go on vacation or extended service vists ie engine replacement and the customers isnt expected to pick up the second the service is completed. ) Will also enable sales staff to take deposits even when their aren't enough terminals avaialable, PAC, service depts to easily take payments without credit card machines, etc.

- Correct bugs in newly designed service scheduler ( This feature design will be an industry first. )

- Finish off dev control panel ( as this has been put on the backburner to focus on the dealers side of the app ) which would enable remote control of all dealers databases ( as each dealer will have their own database ), automate dealer intake, including but not limited dealer server and database creation that would send all critical data points automatically to just signed up dealer removing the need for system admins to administer this process

- Implement a wide variety of ai assisted tools including but not ltd too, sales emails, calls, text message scripting, sales analysis and projection including setting realistic goals for sales people and dept along with the other depts, in app voice to text generation, and much more.

- Create and test in house infastructure / server option to add to on the cloud option ( Only available option currently ) to allow dealers to continued access even if internet services drop do to various reasons

- Auto print unit signs from the unit ui

- BDC Center 

- Finalize sales follow-up automation, again different implmentation from current industry standard making it polarizing experience as far as end user experience is concerned.

- A cross-platform Ad Manager designed to serve all departments, ensuring seamless campaign management across the organization

- Backburner: redesign data loading across app in congurant with how each job role ingest data, would allow shorter load times and less loading bottle necks

- Blue book implementation: Currently available market options have huge pay wall. Will be implemented once enough dealers sign up for the app to cover large barrier of cost of entry 

</details>

## Challenges & Solutions

<details closed>
<summary>Details...</summary>

For the ones that are curious about the custom Turbo.Repo / Turbo.Build and how to take any number of remix projects and come out with a single build application. 

The merge has to be done before the build process starts. 

Started off with a single remix project as the base, so it has the same tsconfig, prisma.schema and so on for all the critical files. Copied that base into the other projects, in order for each of them to have all the same configurations so it doesn't upset the build process. Did take it a step further and only had one project that actually existed and sym linked all necessary files. 

Vercel for some reason, will get bitchy about this from time to time. Haven't been able to pinpoint this issue as it goes away on its own... when it decides to cooperate. This has only happened twice to and due to the infrequent visits, haven't dug into much further. 

As each project represents a different part of the application, they already had unique parent routes so this was an easy thing to check off when merging. Finally, each of the projects were going to have different libraries. There was no way around this, in the script / or manually copy and paste, scrap all the package.json's, add all unique values to the dependencies and if there were any changes made, reinstall / install the libraries. 

And because the merge happened before it was built by remix, it all works perfectly fine no matter how large the project is or how many projects you cram into one.

</details>

---

## Contributing

- **💬 [Join the Discussions](https://github.com/8an3/OpinionatedDealerCRM/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/8an3/OpinionatedDealerCRM/issues)**: Submit bugs found or log feature requests for the `docker-gs-ping` project.
- **💡 [Submit Pull Requests](https://github.com/8an3/OpinionatedDealerCRM/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

## Contributors

<br>
<p align="left">
   <a href="https://github.com{/8an3/OpinionatedAutomotiveDealerCRM/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=8an3/OpinionatedAutomotiveDealerCRM">
   </a>
</p>
<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
	git clone https://github.com/8an3/OpinionatedDealerCRM.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
  
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Post in [new feature implementation](https://github.com/8an3/OpinionatedAutomotiveDealerCRM) with detailed overview of the feature. Include the break down of the process, how it is improved over the current implementation ( if one currently exists ), go over designed process that will save time for the end users day to day responsibilties in their role and / or improved end user experience. Any feature posted without the latter will not be considered. 

For example: New service appointment scheduler. Current industry standard is manually creating calendar appointments. New feature would take in hours needed to complete the job, multiply appointment time frame by technician multiplier ( Not all techs are created the same, one tech will complete jobs with a multiplier of 0.85, where others will have a 1.25 multiplier, these multiplier will be adjusted by service manager in service manager dashboard), will also sort by technician brand specialty for multi brand dealers, and provide a list of avaialable dates, by technician and accomdate for technician work schedule including break times, start and end times and etc. Automatically finding the correct dates and times to accomadate service visit and present the lists to the end user. In so doing, this would allow service writers to focus on other key parts of the job instead of constantly shifting and editing appointments manually. Bringing the overall process time from 3-60 minutes to a couple of seconds, no matter the variables at the time of scheduling.

</details>

---

## License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://github.com/8an3/OpinionatedDealerCRM/blob/main/LICENSE.TXT) file.

---


## Consult

If your a software providor and process engineering isn't something you have focused on or even thought about, reach out. I'd be more than happy to help in this, because we desperatly need companies to atleast think about it before they code. We know that once the code is good and it works, it gets shipped never to be looked at again, unless a severe enough bug is found that needs to be fixed. With each table I will provide the EXACT math used in the code, and you can even check it if you still don't beleive it after that. The numbers get that out of hand, that quickly. I spent a week going over these numbers because... I could not accept the answers to be my reality. The worst part is, it's entirely out of your control as the employee... but it is 100% entirely in your control as a dev.

### To prove how IMPORTANT this is, I'll include parts of a presentation with notes.
We will go over a couple pain points...
- Setting Appointments
- Money Wasted Through Salaries
- Missed Sales Oppurtunities
- Other Positions
- CRM Provider
- Per Month Savings

<details closed>
<summary>Details...</summary>

### Setting Appointments
Now I bring this point up because this is... what got me to continue going down the rabbit hole and creating an entire opinionated dealer crm. And the numbers scare me every time I look at them. To bring you up to speed, as a sales person your sole focus should be, making calls and that is literally it. CRMs have designed... time wasting games and processes on what needs to be done in order to complete it in the system and go about your day. You need to:
- View the appointment and go over the data in order to make a call that atleast makes you look informed
- Call customer
- Once the call is down, (if you want to be good) you have to leave yourself notes on what happened during the call and so forth, that way your not digging through old emails, text and listening to old phone calls just to get caught up to speed for each call you make. IF you actually did that ( trust me, there are fucking sales people who do just that ) instead of 2 minutes a call, your now at 5-15 minutes a call.
- Mark the call as completed in the system.
- Create a new appointment.
- Move on to the next call.

NOW... when you look at that list, it aint bad... Lets, peel back the ever so increasingly pompous / snooty / dick bag attitutude... that every dev has and lets make you bring you back down to earth... Because you created this. Don't argue with me that devs are as a whole peacefully loving thoughtful ppl, because they are not, so much so there is industry wide joke after joke about it... 

Anyways, navigate to another page just to view the appt? Fuck you... if I have to go to another page to view it, its bad enough when opening a modal to get the information I need to make this call, and btw you don't need to do either in order to give the user what they need to start making the call. 

Oh that call feature you thought saved us time that you developed into the crm? Fuck you again, it calls the store / your cell first to connect you to the customer... now I have to listen to a lady speak for x amount of time, some crms don't even allow you to skip this part in order to hit whatever key you need to finally make the fucking call. It's faster to dial the number... but you CAN'T... because your sales manager thinks your not working from not seeing calls being made in the system. NOT to mention, some places its illegal, NOT to do it through the crm because by law you need to have a recording of every call you make. Now... some crms FREEZE the crm during the call ( fuck you again ) and you have to wait for the call to finnaly reach the crm to get your screen back.

Now you have to leave your self a note. 

Create another appointment and get back to your dashboard... 

Devs love flashy ui's that open all sorts of shit all over the place that isnt needed and more often then not actually create more work to complete the task. Not to mention, the amount of modals or page navigations to do all of that, waiting for pages to load ( because every dealer who is a customer of that crm... is on the same database / servers ), not allowing users to open a new tab to do said tasks ( for whatever fucking god damn reason ), which wastes even more time because NOW you HAVE to wait for page navigations to complete, and have to go back to the page you were just at when your done. I can continue but you should be getting the point by now... 

The last biggest pain... is the main dashboard you have to make your calls from. They are all so slow, you do not need... 450 columns of data points in order to do the job of a sales person. With saying that it is not needed... to load all that data for the 20 or so customers that are viewable on your page... but oh no it doesn't end there... you are loading 1000's of customers, FOR NO FUCKING REASON, which in turn really slows everything down. I DO NOT NEED 50000 CLIENTS  WORTH OF DATA POINTS TO... To what jerk off to? lol... Like... why do you do this to the fucking user? Between every completed call and creating every new appointment and going back and forth... the amount of time wasted is staggering from page navigations and flashy... honestly really shitty ui's. I think you get the point, hopefully, but literally all of that can be avoided. 

The Dashboards are so complicated... the biggest complaint in the industry is that sales people do not know exactly what to do when they go in first thing in the morning Why? Because in order to get the list of calls, they need to start calling... There is over 450 columns to sort and filter data by not to mention trying to find the oldest calls or the calls you need to do that day because now I can also filter dates that go back 10 years, but also 20 years into the future. Which means... theyre wasting the first 30 to 60 minutes of the day not making a single call. Now... I'll calm down but to prove how complicated it is for users. There are more knobs, checkboxes, columns, dropdowns, filters, sorting options and so on to the point where I have more control in configuring everything... then what was needed to configure the fucking god damn enigma machine back in the war... seriously... Do the actual math and you will find out... Think about that. To further prove that point. CRMs have dedicated staff... just to train the dealers staff members, just to be able to use the crm at the most basic level of functionality. Seriously... a crm rep HAS to come in for every single new hire ONTOP of that they have to come in within a certain time frame... train that dealers employee... thats fucking CRAZY. ITS EVEN OUTLINED IN THE FUCKING CONTRACT... now THAT is how complicated your crms are. I have... I think 10 columns, on my dashboard... funny thing is... There isn't even 10 data points to view when you first load the dash. Now if your still not convinced... haha, lets go over the scarier part, the data.

| Calls / Day | Time Wasted / min |      Wasted Per Day        | Days Worked / Year | Total Working Days Wasted / Year | 
| ----------- | ----------------- | -------------------------- | ------------------ | -------------------------------- | 
|     90     |     2          |   180 / mins or 3.00 /hrs  |       260          |     97.50     | 

Note: Keep in mind, this is a scenario of a sales person who comes in and works, immediatly. The biggest complaint sales ppl have about crms currently, is that they don't know exactly what to do when they first come in. Due to this issue how much time are they wasting?


---

### My Numbers
|             |                   |        My Numbers        |                    |                                  | 
| ----------- | ----------------- | ------------------------ | ------------------ | -------------------------------- | 
|     100     |     1.6         | 150 / mins or 2.50 /hrs  |       312          |     104.00   | 

I waste 104 days... completing a process... that shouldnt take anywhere near as much time to do. The worst part is... you have to do everything I mentioned... because if you don't your sales manager can see it because the data in the crm says your are not doing it and get fired.

Lets just play with the numbers a little bit more but without the tables, lets say you suck at using a computer. To be frank most sales people are horrible with them. That's why they're in this business.  

### 75 calls @ 3 mins = 3.75 hrs a day @ 260 days = 121.88 days

ITS GOING THE OPPOSITE DIRECTION I THOUGHT IT WAS GOING TO GO... I seriously thought that... the slower sales people would waste less time because they aren't doing as many calls. I was wrong... For someone who's doing less it gets even worse. 1/3 of that guys fucking year... Is wasted because of how the software industry is, because its an industry wide problem. It's not entirely the dev's fault, so don't feel that bad. But think about it, your code wasted 1/3 of one persons life. If you feel bad now... just wait at the power of numbers... I was talking with a upper level exec at one of the largest providors. When the jokes died down, she admitted that she didn't beleive that she would ever see the solutions get implemented while she worked there. That's how deep rooted these issues are.

---

### Money Wasted Through Salaries ( Sales Team )
| Sales Person Yearly Pay | Days Worked | $ Wasted / Yr / Sales Person | Amount of Sales Ppl | Total Salary Loss Across Team | 
| ----------------------- | ----------- | ---------------------------- | ------------------- | ----------------------------- | 
|         85000           |     260     |          $30989.58           |       6             |         $185,937.50           |

lol... Lets play with the numbers because 6 sales staff is me being easy and trying to make this look more believeable. We went backwards last time, lets go forward this time. Before we continue... the tech industry lives in lala land when it comes to money. So if you think that 200k isn't a large lets bring you back down to earth... It... is... a fucking massive number when it comes to a dealer. I've dealers literally hide sales from banks... just to pay their staff and keep the lights on. So much so they hide crates of units... empty crates... 50-75 feet in the air, or miles and miles off site in "storage" just so the dealer didn't have to pay the bank when the unit got sold. I'm gonna say this here... not one of these data points, is made up. They're all true. Think about this though... there are some really bad dealers out there and each of these data points would sky rocket which would then in turn continue to multiply and send the final total into the stratesphere. So if you think these numbers are not real, just think about it.

Bigger dealer, I have more money to play with and can pay my sales staff but I make them work harder in return: 
### $111,000 / yr @ 280 days = $40468.75 @ 15 sales people... $604,031.25. Forgot to mention, I own a dealer network with 5 dealers, $3,020,155.
One dealer owner, in one year... over 3 mill. All because of shitty process engineering that is 100% avoidable. The numbers get worse... way fucking worse. The power of numbers and multiplication.

---

### Missed Sales Oppurtunities
Now... this next section... these are extremly fucking low numbers to what is actually obtained in dealers. Just to make it beleiveable, I had no choice. 

| Average Month For A Dealer | Days Lost Per Sales Person | Sales Lost Per Sales Person | Sales People | Sales Lost Across Team | 
| -------------------------- | -------------------------- | --------------------------- | ------------ | ---------------------- | 
|             100            |      97.50 days            |          75.00 sales        |       6      |      450.00 sales      |

Wont say much other then this, there are dealers out there who don't even hit 450 sales in a year... Just to put that number into perspective.


##### Math
##### sales lost per person = (totalDaysWasted * (((salesMonth * 12) / salesPpl) / days))
---


### Other Positions
| Employees |   Avg Salary   | Time Wasted Per Employee / hrs| Total Time Wasted / Day / team hrs | Total Cost Per Year | 
| ---------- | ----------------- | -------------- | ------------------ | -------------------------------- | 
|     18     |     55000      |        2     |      36.00 /hrs         | $247500.00   |

Again wont say much but... I know a ton of employees in other depts... where 2 hours a day wasted, are like fucking rookie numbers.



---


### CRM Provider
And this number of clients this providor has, was heavily marketed.

First scenario: 
CRM client base: 5500

Currently across the customer base your loosing your customers $2,413,125,000 and 2,475,000 sales per year.

Now 2 billion is a lot, but the wild card is the 2.5 million in sales units lost...

I'm pausing, creating another table for this because I'm not trusting the calculator output... Knowing these numbers... I actually loose sleep over this. Like... How does the best sales person I know of, no matter the enviroment I enter... or industry... I become the best and destroy everyone... and I fucking waste a 100 days a year... it's more because, the whole job is nothing but processes and there are so many processes that are one way or another for god only knows... but wastes so much of your time, the worst part is, its all avoidable. I know these numbers are correct and true, just from the staggering amount of time I have taken to do the math and the rabbit hole it lead me down to find out exactly how much time I waste in a year. Because when your at my level, these things matter... more than you could even comprehend. If michael jordan found out he missed 33% of all shots taken, he would have quit the pro league. I don't know basketball, so I'm grasping at that number but I'm trying to make it relateable for you. Because I have spent many sleepless nights just to make this software in order for this to never happen to me ever again. I swear on my momma when I say this, for over a year I did not sleep during the week, went and sold in the dealer during the day and came home and just programmed. It ended that marriage, pretty much. I never went to university, or college and never wrote single line of code before this. I was so angry, so terrified... knowing these numbers and how horrible they are, it gave me the drive to work non stop 5 days straight. Apparently I was so fucking tired, I would fall alseep during dinner, while eating when saturday night came around. My wife said there were times I would still have food in my hands and I would just pass out sitting straight up. If you, reading this, proves my math wrong it would honestly lift... the elephant that is sitting on my chest. But the chance of me being wrong with this, is so slim. I would bet... so much fucking money on being right, and I don't even buy lottery tickets, thats how little I gamble just to show you how confident I am. 

The new table is done, got 4 different ai models to check my math, and I was bang on first try... the number is so big I, genuinely, don't know what its called, but here it is.

| Amount of Crm Customers | Lost In Salaries | Lost Unit Sales | $ Off Each Sale | Unit Sales Total | Grand Total      |
| ----------------------- | ---------------- | --------------- | --------------- | ---------------- | ---------------- | 
|            5500         |  $2413125000     |  2475000.00     |     11250       |$27,843,750,000.00|$30,256,875,000.00 |

Luckily, I saw one more digit in there, than what's actually there. So 30 tril. Now I KNOW... there are a lot of variables to consider and when you get up to these kind's of numbers... companies spend a ludicrous amount on accountants to just come up with a sum, and verify it. BUT with saying, with the law of averages, I know I'm probably within the ball park. Even if I'm off by a digit... its stil 3 fucking trillion. Even if I'm off 2 digits, doesnt fucking matter... that software providor is doing a lot of things wrong. Try to calculate... how much time, micrsoft wastes in human years, yearly... from all the shitty software they write, I know they waste more then the numbers I came up with and I did do the math. It's so fucking god damn high haha...

---

After that depressing wave of information, let's end on a more positve note and see how much a year each dealer can save. It's so much that, just in savings and not considering all the other benefits, in which there is a huge laundry list comapred to every crm on the market. That it would be detremtental to the business, for the dealer, owner and staff... to not atleast try to switch.
### Per Month Savings

| Dealer Sales Assistant | Competitor | Difference / Month | Difference / Year | Total Cost Per Year| 
| ---------------------- | ---------- | ------------------ | ------------------ | -------------------------------- | 
|            750          |   1500    | 750.00 / month     |  9000.00 / year     | $447750.00 and 450.00 sales lost.   |

Lets make it even more beleiveable for the first run, we only make half on each unit in comparison to the last dealer

5,625 per unit * 450 = 2,531,250 + 447750 = 2,979,000

What about that dealer principle at 11250?

We left off at:
604,031.25 + 9000 per yr more just from the price difference per month on the crm cost = 613,031.25

15 sales people * 100 sales per month = 1500 * 11250 off of each sale = 16,875,000 + 613,031.25 taken from above = 17,488,031.25 * 5 owning 5 dealers = 87,440,156.25
Now can you see how easy it would to get to $30,256,875,000.00, it doesn't take much. If you had a bad string of dealers that did horribly, it would really help push that number up. 


</details>


