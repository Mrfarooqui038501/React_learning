NOTE = WE should keep first letter  of Components file CAPITAL 
NOTE = Function name and file name can be different but for good practice we Keep them same.


1. Basics of react and installation 
a. vite  installation =  


2. <> </> =  These  called fragments 

3.Components = are the fundamental building blocks of React applications. They are independent and reusable pieces of UI that encapsulate both structure (HTML) and behavior (JavaScript). Think of them as custom HTML elements.

--- Key Characteristics of Components
-Independent: Components can be developed and tested in isolation.
-Reusable: They can be used multiple times within an application, promoting code efficiency.
-Composable: Components can be nested within other components to create complex UIs.
-State Management: Components can manage their own state, allowing for dynamic updates.
-Props: Components can receive data and configuration through props (properties).

-- Types of Components
- Functional Components: Primarily used for simple components with no internal state. They are pure functions that take props as input and return JSX.
- Class Components: More complex components that can manage state using the this keyword and lifecycle methods.

--- Benefits of Using Components:
- Improved code organization: Breaking down the UI into smaller, manageable components.
- Increased reusability: Using the same component in multiple places.
- Easier testing: Testing components in isolation is simpler.
- Better collaboration: Multiple developers can work on different components simultaneously.

3.  // here we created our own function to check if we directly render the tags and functions of our own
function Myapp(){
  return(
    <h1>HI </h1>,
      <h2> hey I am learing</h2>
  )
}

const anoterel = "I am from another Mother"  here we created a variable   to check if can added it to direcly in our app
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click me to visit google',
  here we added our  variable--  anoterel // here this is our evaluated expression 
)


                         HOOKS 

5. HOOKs = are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use state and other React features without writing a class

 let [counter, setCounter] = useState(0)  // here we made a varible and it takes input in array form "setcounter" we can give it any name but it's good pratice to use the variable name 
 
-- Key Benefits of Hooks:
- Simplify state management: Hooks provide a cleaner way to manage state in functional components.   
- Reusability: Custom hooks can be created to share stateful logic between components.   
- Improved code organization: Hooks promote better code structure and readability

--- Common Hooks:
- useState: Used to manage state within a component.   
- useEffect: Used to perform side effects in function components, such as data fetching, subscriptions, and manual DOM manipulations.   
- useContext: Provides a way to share data across components without prop drilling.   
- useReducer: Used for managing complex state logic.   
- useRef: Creates a mutable ref object that persists across re-renders.   
- useCallback: Memoizes callback functions to prevent unnecessary re-renders.   
- useMemo: Memoizes values to prevent expensive calculations on every render.   
- useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations.    

A.--  UseState = The useState hook is essential for managing state within functional components in React. Before hooks were introduced, state management was primarily handled in class components.  

--- Key Reasons for Using useState:
- Simplifies state management: It allows you to add state to function components without converting them to class components. This leads to cleaner and more concise code.   
- Promotes functional programming: By using useState, you can write more functional-style components, leading to better code organization and reusability.
- Enables component reusability: You can create custom hooks to encapsulate stateful logic and reuse it across multiple components.   

--- When to Use useState:
- When you need to store data that can change over time within a component.
- When you need to trigger re-renders based on state changes.   
- When you want to manage local component state without affecting parent or global state.
