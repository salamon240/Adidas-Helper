
document.querySelector("body").style.backgroundColor="white"
let h1Stayle= document.querySelector('h1')
const h1 =h1Stayle
h1.style.fontSize="30px"
h1.style.color="white"
h1.style.textAlign="center"



const li = document.createElement('li')
li.className='collection-item'
li.id ='new-item'
li.setAttribute('titel','new item')
li.appendChild(document.createTextNode("a new item"))

const link =document.createElement('a')
link.className='secodary-content'

link.innerHTML='<i class=material-icons>grade</i>'
li.appendChild(link)
document.querySelector('ul').appendChild(li)


