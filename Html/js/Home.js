
let btnHome;
document.querySelector("body").style.backgroundColor="white"
document.getElementById("btn-blue").onclick=function()
{
    console.log("blue")
    btnHome="blue"
    
}
document.getElementById("btn-red").onclick=function()
{}
document.getElementById("btn-purple").onclick=function()
{}
document.getElementById("btn-yellow").onclick=function()
{}
document.getElementById("btn-pink").onclick=function()
{}
document.getElementById("btn-green").onclick=function()
{}
document.getElementById("btn-orange").onclick=function()
{}
document.getElementById("btn-black").onclick=function()
{}
document.getElementById("btn-white").onclick=function()
{}
document.getElementById("btn-brown").onclick=function()
{}
document.getElementById("btn-grey").onclick=function()
{}


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