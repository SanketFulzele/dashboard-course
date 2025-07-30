# Course Dashboard Application

A modern, responsive React TypeScript application for managing online courses, featuring a clean UI with course progress tracking and a responsive sidebar navigation.

## Table of Contents
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Component Architecture](#component-architecture)
- [Testing](#testing)

## Features
- 📱 Responsive design with mobile-first approach
- 📊 Course progress tracking with visual indicators
- 🎯 Dynamic progress bar colors based on completion status
- 📁 Organized course management interface
- 🔄 Interactive sidebar navigation
- ⚡ Modern component architecture

## Folder Structure
```
src/
├── assets/
│   ├── images/          # Static images
│   └── styles/          # CSS files
│       ├── sidebar.css
│       └── myCourses.css
├── components/
│   ├── ButtonComp/      # Reusable button component
│   ├── CardComp/        # Course card component
│   ├── ProgressBarComp/ # Progress bar with tests
│   └── Sidebar/         # Navigation sidebar
├── data/
│   └── coursesData.ts   # Course data
└── pages/
    ├── Dashboard/       # Main dashboard view
    ├── MyCourses/       # Courses listing
    └── Setting/         # Settings page
```

## Setup Instructions

In the project directory, you can run:

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-course
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Component Architecture

### Sidebar (`components/Sidebar/Sidebar.tsx`)
- Responsive navigation component
- Collapsible on mobile devices
- Handles route management with React Router

### Course Cards (`components/CardComp`)
- Displays course information
- Shows completion status
- Integrates with progress tracking

### Progress Bar (`components/ProgressBarComp`)
- Visual progress indicator
- Dynamic color based on completion
- Animated transitions

## Testing

The project includes comprehensive unit tests using React Testing Library. Tests cover:
- Component rendering
- User interactions
- Responsive behavior
- Progress tracking logic

Run tests with:
```bash
npm test
```

### Production Build

To create a production build:
```bash
npm run build
```

This creates an optimized build in the `build` folder, ready for deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
