function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    domElement.innerHTML = reactElement.children  // ✅ Correct spelling
    container.appendChild(domElement)             // ✅ Actually add to DOM
}

const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'click me to visit google',
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)