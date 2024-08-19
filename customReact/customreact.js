     /*  here we created our own customs react library 
      */
 
  function customRender(reactElement, container){
    /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
      container.appendChild(domElement) */

      // in below  line we created our react element 
      const domElement = document.createElement(reactElement.type)

      domElement.innerHTML = reactElement.children
      
      // here we used loop so we can add muliple attributes in single  go 
      for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
      }
      container.appendChild(domElement)
  }
  // here we are passing the props that our custom function will take as input 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    children: 'click me to visit the google'
}
// here we are getting the main root element of HTML
const mainContainer = document.querySelector('#root')

// here we are rendering the our elements
customRender(reactElement,mainContainer)