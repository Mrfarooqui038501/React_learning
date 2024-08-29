Q1 - What is React and what are its key features?
React is a JavaScript library for building user interfaces. Key features include:
- Virtual DOM for efficient updates
- Component-based architecture
- JSX syntax
- Unidirectional data flow
- React Native for mobile development
- Large ecosystem and community suppor

Q2 -  Explain the difference between functional and class components.
-- Functional components:
    1. Simple JavaScript functions
    2.Use hooks for state and lifecycle features
    3.Generally more concise and easier to test
    4.Preferred in modern React development

    Class components:
  - ES6 classes that extend React.Component
  - Have their own state and lifecycle methods
   - Can be more verbose
   - Used in older React codebases

Q3 -  What's the difference between state and props in React?
State:
- Managed within the component
- Can be changed using setState() or useState hook
- Causes re-render when modified

Props:
- Passed to a component from its parent
- Read-only within the component
- Changes to props are managed by the parent component

Q4 - Explain the useEffect hook and its common use cases
-- useEffect is a hook for side effects in functional components. Common use cases:
- Fetching data from an API
- Setting up subscriptions or event listeners
- Manually changing the DOM
- Cleaning up (e.g., removing event listeners)

Q5 - React Router
Using React Router:
- Install react-router-dom
- Import BrowserRouter, Route, and Switch
- Wrap your app with BrowserRouter
- Define routes using Route components
- Use Link or NavLink for navigation

JSX.file 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

Q6 - Compare React's Context API with Redux for state management.
Context API:
- Built into React
- Simpler for small to medium apps
- No additional libraries needed
- Can become complex for large-scale state management

Redux:
- More structured approach
- Better for complex state logic
- Useful for large applications
- Has dev tools for debugging
- Steeper learning curve

Q7 - How can you optimize performance in a React application?
- Use React.memo for functional components
- Implement shouldComponentUpdate in class components
- Use the useCallback hook for memoizing functions
- Utilize the useMemo hook for expensive calculations
- Code-splitting with React.lazy and Suspense
- Use production builds
- Optimize images and assets
- Implement virtualization for long lists

Q8-  What testing libraries do you use with React and why?
Common testing libraries:
-Jest: For unit and integration testing
- React Testing Library: For component testing, focuses on user interactions
- Enzyme: For component testing, allows testing of internal component state
- Cypress: For end-to-end testing

Reasons to use these:
- Jest is the standard for JavaScript testing
- React Testing Library encourages testing from a user's perspective
- Enzyme allows for more granular component testing
- Cypress provides powerful E2E testing capabilities