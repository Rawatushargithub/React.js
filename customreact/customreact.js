function customrender(createElement , Container)  {
    console.log(Container)
    const domElement = document.createElement(createElement.type)
    domElement.innerHTML = document.createElement.children
    domElement.setAttribute('href' ,  createElement.props.href)
    domElement.setAttribute('target' ,  createElement.props.target)
    
    Container.appendChild(domElement)

}

const createElement = { 
    type:'a', 
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}

const mainContainer = document.querySelector('#root')
console.log(mainContainer)

customrender(createElement , mainContainer)