let burger =document.getElementById("burger_nav").addEventListener('click',open)


function open()
{
    
    let nav =document.getElementById("nav_id")
    if(nav.style.display=='block')
    {
        nav.style.display='none'
    }
    else
    (
        nav.style.display='block'
    )
   
   
}