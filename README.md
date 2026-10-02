# ByteSpace

ByteSpace is a modern, responsive Next.js web application designed to provide a premium user experience. Built with performance and aesthetics in mind, it leverages cutting-edge web technologies to deliver dynamic and accessible interfaces.

## 🚀 Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion & tw-animate-css
- **UI Components**: Radix UI, Base UI & shadcn/ui
- **Forms & Validation**: React Hook Form & Zod
- **Icons**: Lucide React & SVGR

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v20+)
- [Bun](https://bun.sh/) (Recommended package manager)

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd "ByteSpace - New Check Website/my-app"
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/` - Next.js App Router pages and layouts (e.g., Home, Auth, Courses).
- `components/` - Reusable UI components (Shared, Animate UI, Nav & Footer).
- `hooks/` - Custom React hooks for state and utility management.
- `lib/` - Utility functions and context providers.
- `types/` - TypeScript type definitions and interfaces.
- `data/` - Static data sets and configuration.

## 🛠️ Development Scripts

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the app for production.
- `bun run start`: Runs the built app in production mode.
- `bun run lint`: Lints the codebase using ESLint.
- `bun run format`: Formats code using Prettier.
- `bun run typecheck`: Runs TypeScript compiler check without emitting files.
