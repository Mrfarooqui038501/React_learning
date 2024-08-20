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

E.G. 
import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

Explanation: of above example 
- useState(0) initializes the count state with the value 0.
- The returned array is destructured into count and setCount.
- count holds the current value of the state.
- setCount is a function used to update the state.

B. useCallback  = is a React Hook that memoizes a callback function to prevent unnecessary re-renders of child components.

-- What does it do?
-- Memoization: Caches the returned callback function based on its dependencies.   
-- Optimization: Prevents the callback function from being recreated on every render, improving performance.   
-- Child component re-renders: Helps avoid unnecessary re-renders of child components that rely on the callback's reference.  

-- When to use it?
- When passing callbacks as props to child components.
- When the callback function is expensive to create.
- To optimize performance by preventing unnecessary re-renders. 

-- Key points:
- useCallback takes a function and an array of dependencies as arguments.
- The returned function is cached based on the dependencies.
- If the dependencies change, a new function is created.
- useCallback can help optimize performance in React applications.

-- By using useCallback effectively, you can improve the performance of your React components and avoid unnecessary re-renders.

E.G. 
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array

  return (
    <div>
      <Child increment={increment} />
    </div>
  );
}
 In this example, useCallback is used to memoize the increment function. The increment function is passed as a prop to the Child component. By using useCallback, we ensure that the Child component only re-renders when the count value changes, preventing unnecessary re-renders.

C. useRef =  is a React Hook that allows you to persist values between renders. It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 

--- Key Points:
- Persistence: The current property of the ref object persists for the full lifetime of the component.
- Direct Manipulation: Unlike state, you can directly mutate the current property.
- DOM Access: Commonly used to access DOM elements directly.

--- When to use useRef:
- Accessing DOM elements: To focus input elements, manipulate DOM nodes, or measure dimensions.   
- Persisting values: To store values that don't need to trigger re-renders.   
- Creating mutable objects: To hold mutable data that needs to be preserved across renders. 

-- Important Considerations:
-- Overusing useRef can lead to performance issues and make your code harder to reason about.
-- For most cases, state management with useState is preferred.
Use useRef judiciously for specific use cases like DOM manipulation or persisting values.
-- By understanding useRef, you can effectively manage values and interact with the DOM in your React components.

E.G. 
import { useRef, useEffect } from 'react';
function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef}   
 type="text" />
}
In this example, useRef is used to create a ref object inputRef. The useEffect hook focuses the input element after it's mounted by accessing inputRef.current.

D. useEffect = is a React Hook that lets you perform side effects in function components. These effects can be anything from data fetching, setting up subscriptions, or manually changing the DOM.

--- When to Use useEffect:
- Fetching data: Fetching data from an API when the component mounts.   
- Setting up subscriptions: Subscribing to external data sources (e.g., WebSockets).
- Manipulating the DOM: Directly interacting with the DOM (though this is generally discouraged).   
- Cleaning up: Performing cleanup actions when a component unmounts.  

-- How useEffect Works:
-- Runs after every render: By default, useEffect runs after every render of a component.   
-- Dependency array: You can specify a dependency array as the second argument to control when the effect runs.   
-- Cleanup function: You can return a cleanup function from useEffect to perform actions before the component unmounts or when dependencies change. 

-- Key Points:
-- useEffect replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
-- Using the dependency array correctly is crucial for performance optimization. 
- For complex side effects, consider breaking them down into smaller, independent effects.

-- By effectively using useEffect, you can manage side effects in your functional components and build more complex and interactive user interfaces.
 
 e.g. 
  import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count}   
 times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>   

  );
 } 

 In the above  example:
-The useEffect hook updates the document title whenever the count value changes.   
- The dependency array [count] ensures the effect runs only when count changes.
