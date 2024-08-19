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