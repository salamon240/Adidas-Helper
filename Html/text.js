document.body.addEventListener('click',addFacorite)

function addFacorite(e)
{   
    
    if (e.target.parentElement.classList.contains('add-favorite'))
   {
    if (e.target.parentElement.parentElement.style['background-color']=='yellow')
    {
        e.target.parentElement.parentElement.style['background-color']='white'

    }
    else
    {
        e.target.parentElement.parentElement.style['background-color']='yellow'
    }
   }
}

function person (Name,dob) //קונסטרקטור עם פונקצייה שיוצרת עצם ומחשבת גיל
{
    this.name=Name
    this.dob=new Date(dob)
    this.callculate_age=function()
    {
        var diff_ms=Date.now() - this.dob.getTime();
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear()-1970)
    }
    console.log(this.callculate_age())

}

const arik=new person("arik","06-04-1989")
var days = function(month,year) {
    
    return new Date(year, month, 0).getDate()-8


 }

document.getElementById('get').addEventListener('click',luodUser)

function luodUser()
{
    const xhr= new XMLHttpRequest()
    xhr.open('get','user.json',true)
    xhr.onload= function()
    {
        if(this.status===200)
        {
            const users= JSON.parse(this.responseText)
            const output =`  <ul class="collection">
            <li class="collection-item avatar">
                <img src="${users.avatar}" alt="" class="circle">
                <span class="title">${users.first_name} ${users.last_name}</span>
                <p>email: ${users.email}
                   
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        <ul>`;

        document.getElementById('users').innerHTML=output

        }
    }
    xhr.send()
}

