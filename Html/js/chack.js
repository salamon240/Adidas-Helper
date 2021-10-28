document.getElementById('get-joke').addEventListener('click',getjoke)

function getjoke()
{
    
    let JOKES=document.querySelector('.display-fact');
    const http= new getHTTP();
    http.get('https://api.chucknorris.io/jokes/random').then(data=> JOKES.innerHTML=data.value).catch(err => console.logO(err))
}


