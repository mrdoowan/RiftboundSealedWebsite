# RiftboundSealedWebsite

A website that simulates the deck registration and construction experience for players to practice the sealed deck format.

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Material-UI (MUI) v7** - Component library and design system
- **Redux Toolkit** - State management
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CardItem.tsx    # Individual card display component
│   ├── Counter.tsx     # Redux counter example component
│   └── index.ts        # Component exports
│
├── containers/          # Container components (smart components)
│   ├── HomePage.tsx    # Home page container
│   ├── CardList.tsx    # Card list container
│   └── index.ts        # Container exports
│
├── mockData/           # Mock data for development
│   ├── cards.ts        # Sample card data
│   ├── users.ts        # Sample user data
│   └── index.ts        # Mock data exports
│
├── types/              # TypeScript type definitions
│   └── index.ts        # Application types (User, Card, Deck, etc.)
│
├── redux/              # Redux state management
│   ├── slices/         # Redux slices
│   │   └── exampleSlice.ts  # Example Redux slice
│   └── store/          # Store configuration
│       ├── store.ts    # Redux store setup
│       └── hooks.ts    # Typed Redux hooks
│
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Lint

Run ESLint:

```bash
npm run lint
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Architecture Overview

### Components
Presentational components that focus on UI rendering. They are typically stateless and receive data via props.

### Containers
Smart components that connect to Redux state and handle business logic. They compose presentational components.

### Redux Structure
- **slices/**: Feature-based Redux slices containing actions, reducers, and selectors
- **store/**: Store configuration and typed hooks for use throughout the app

### Mock Data
Sample data used during development to simulate API responses and test UI components.

### Types
Centralized TypeScript type definitions ensuring type safety across the application.

## Development Guidelines

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **Type Safety**: Always define TypeScript interfaces for props and state
3. **Redux Best Practices**: Use Redux Toolkit for simplified Redux logic
4. **Material-UI**: Follow Material Design principles and use MUI components consistently
5. **Code Style**: Follow the ESLint configuration and maintain consistent formatting

## Features to Implement

- [ ] Sealed pool generation
- [ ] Deck builder interface
- [ ] Card filtering and search
- [ ] Deck validation
- [ ] Save/load deck functionality
- [ ] User authentication
- [ ] Game statistics

## License

This project is private and not licensed for public use.
