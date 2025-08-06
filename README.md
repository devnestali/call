# 📅 Call 

Call is a Nextjs website that allows you to create an account and, necessarily, link your Google account to access and manage your Google Calendar. The platform displays your available and unavailable times, and when you create an appointment, it automatically registers it in Google Calendar, informs who will attend, and schedules a Google Meet meeting. The invitee receives a confirmation email, and the user also has an interface to edit their bio and manage their account.

##### 🌟 [Access the website now!!](https://call-six-dusky.vercel.app/)

**⚠️ Attention!! This website was created using an [Design System](https://github.com/devnestali/design-system) created by me. This is a [NPM Link](https://libraries.io/npm/@devnestali-call-ui%2Freact) to access. I hope you enjoy :)**

## 🤖 PROTOTYPE

![CallPrototipe](https://github.com/user-attachments/assets/b00d461b-9685-4e12-bc61-e4196618934a)

## 📒 Features

- **TypeScript**: Provides static typing and modern JavaScript features for safer and scalable development.
- **Zod**: Schema validation for request inputs, ensuring data integrity in routes.
- **RadixUI**: Low-level UI component library for building accessible, customizable, and unstyled components in React.
- **React-hook-form**: Library for managing forms in React using hooks.
- **@hookform/resolvers**: Integrates validation libraries(like Zod) with React hook form.
- **@tanstack/react-query**: Data-fetching and state management library for React.
- **Stitches**: Fast, themeable CSS-in-JS library for styling React components.
- **Nextjs**: React framework for building fast, scalable, and SEO-friendly web applications.
- **Googleapis**: Node.js client library for accessing Google APIs easily and securely.
- **PrismaORM**: Next-generation ORM for Node.js and TypeScript, simplifying database access and management.
- **Next-auth**: Authentication library for Next.js, supporting multiple providers and secure session handling.
- **Next-seo**: Plugin for managing SEO in Next.js applications with a simple API.
- **ESLint**: Tool for identifying and fixing problems in JavaScript and TypeScript code.

## 📇 Main Features
- **Pages:** All the pages from the app is located here (`src/pages`).
- **API:** The API used on this project are located here (`src/pages/api`).
- **Components:** Native components for the project are located here(`src/components`).
- **Libs:** Libs and tools are configured on this folder(`src/lib`)
- **Utils:** Functions that are used in to handle an amount of things are located here(`src/utils`)
- **@Types:** Modules declaration for typescript and nextjs API calls are made here(`src/@types`)
- **Prisma:** All the tables and migration that was created and the configuration for prisma are on this folder(`prisma/`)
## 🛠️ Run the Project

- Before using this app, it's highly recommended to install the latest versions of [Node](https://nodejs.org/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Make sure to follow all the installation and configuration steps provided by their official documentation.

# 🛠️ Configuration

  - To install the node modules package, run the code bellow:
  ```bash
    npm install
  ```
  
  - To run the migrations, run the code bellow:
  ```bash
    npx prisma migrate dev
  ```
  
  - To see all the tables, run the code bellow:
  ```bash
    npx prisma studio
  ```

  - To run the project in your machine, run the code bellow:
  ```bash
    npm run dev
  ```

## 🗂️ Key Files & Directories
- Entrypoint: `src/index.page.tsx`
- App & Providers: `src/_app.page.tsx`
- Pages: `src/pages/`
- Components: `src/components/`
- API Calls: `src/pages/api`
- Tables & migrations: `prisma/`
- External Libs: `src/lib/`

## 📂 Folder Structure

```
src/
  @types/
  assets/
  components/
    Calendar/
  lib/
    auth/
      prisma-adapter.ts
    axios.ts
    dayjs.ts
    google.ts
    prisma.ts
    react-query.ts
  pages/
    api/
      auth/
      users/
    home/
      components/
      index.tsx
      styles.ts
    register/
      connect-calendar/
      time-intervals/
      update-profile/
      index.page.tsx
      styles.ts
    schedule/
      [username]/
        ScheduleForm/
        index.page.tsx
        styles.ts
    _app.page.tsx
    _document.page.tsx
    index.page.tsx
```

## 🚀 License

**[@devnestali]('https://github.com/devnestali') - Software Engineering and FullStack Developer**



All rights reserved by **[devnestali]('https://github.com/devnestali')**
