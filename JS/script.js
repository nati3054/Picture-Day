let button = document.getElementById("buscar");
let body = document.querySelector("body");
button.addEventListener('click', ()=>{
    console.log("button clicado")
    enviarApi()
});
async function enviarApi (){
    let data = document.getElementById("data").value;
    let Key = "KUGkSMoT9CN4n4K9P7iHiSaFaUThkUexuHBv734x";
    const returnApi = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${Key}&date=${data}`);
    const resposta = await returnApi.json();
    let guardaDados = resposta;
    console.log(resposta);
    useApiData(guardaDados);
    body.style.backgroundImage = `url(${guardaDados.url})`;
};
function useApiData (guardaDados){
    
    document.querySelector("#container").innerHTML = guardaDados.explanation;
    document.querySelector("#imagem").innerHTML += `<img src="${guardaDados.url}">`;
    document.querySelector('#title').innerHTML = guardaDados.title;
}

