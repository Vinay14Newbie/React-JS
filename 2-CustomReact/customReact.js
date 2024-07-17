function customRender(reactElement, container){
    /*
    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    domEle.setAttribute('href', reactElement.props.href)
    domEle.setAttribute('target', reactElement.props.target)

    container.appendChild(domEle)
    */

    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    for (const prop in reactElement.props) {   //as we know forin loop only used in object traversing
        if(prop === 'children') continue   // for this code this if statement is not useful it useful for when the props contains any children in it
        domEle.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domEle)
}

const reactElement = {
    type: 'a', 
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)