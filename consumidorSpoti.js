let url = "https://api.spotify.com/v1/artists/2eEmsgWmUFMbtU7agJpnjY/top-tracks?market=US";
let url2 = "https://api.spotify.com/v1/artists/3MqjsWDLhq8SyY6N3PE8yW/top-tracks?market=US";
let url3 = "https://api.spotify.com/v1/artists/5ZNxiPcbKgaNcBrERMpqeu/top-tracks?market=UK";
let url4 = "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN/top-tracks?market=US";
let url5 = "https://api.spotify.com/v1/artists/1To9XZOmBJgqfVfUCRK0OI/top-tracks?market=US";

let urlPSOT = "https://accounts.spotify.com/api/token";

let llave1 = "grant_type=client_credentials";
let llave2 = "client_id=95f0de03819d4bd7aafdcfec8bc6ba99";
let llave3 = "client_secret=04d6cd80455b41b7b6b70387f492334d";

let parametrosPOST = {

    method: "POST",
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    body: `${llave1}&${llave2}&${llave3}`

}

fetch(urlPSOT, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => ObtenerToken(datos));

function ObtenerToken(datos) {

    let token = datos.token_type + " " + datos.access_token;

    let parametrosGET = {

        method: "GET",
        headers: { "Authorization": token }

    }

    fetch(url, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarDatos(datos));

    fetch(url2, parametrosGET)
        .then(respuesta2 => respuesta2.json())
        .then(datos2 => depurarDatos2(datos2));

    fetch(url3, parametrosGET)
        .then(respuesta3 => respuesta3.json())
        .then(datos3 => depurarDatos3(datos3));

    fetch(url4, parametrosGET)
        .then(respuesta4 => respuesta4.json())
        .then(datos4 => depurarDatos4(datos4));

    fetch(url5, parametrosGET)
        .then(respuesta5 => respuesta5.json())
        .then(datos5 => depurarDatos5(datos5));

}

function depurarDatos(datos) {

    console.log(datos);
    console.log(datos.tracks[9].artists[0].name);
    console.log(datos.tracks[9].preview_url); //cancion
    console.log(datos.tracks[9].name); // nombre
    console.log(datos.tracks[9].album.images[0].url); // imagen

    let nombre = document.getElementById("nombre");
    let titulo = document.getElementById("titulo");
    let imagen = document.getElementById("imagenes");
    let audio = document.getElementById("audio");

    nombre.textContent = datos.tracks[9].artists[0].name;
    titulo.textContent = datos.tracks[9].name;
    imagen.src = datos.tracks[9].album.images[0].url;
    audio.src = datos.tracks[9].preview_url;

}

function depurarDatos2(datos2) {

    console.log(datos2);
    console.log(datos2.tracks[9].preview_url); //cancion
    console.log(datos2.tracks[9].name); // nombre
    console.log(datos2.tracks[9].album.images[0].url); // imagen

    let nombre2 = document.getElementById("nombre2");
    let titulo2 = document.getElementById("titulo2");
    let imagen2 = document.getElementById("imagenes2");
    let audio2 = document.getElementById("audio2");

    nombre2.textContent = datos2.tracks[9].artists[0].name;
    titulo2.textContent = datos2.tracks[9].name;
    imagen2.src = datos2.tracks[9].album.images[0].url;
    audio2.src = datos2.tracks[9].preview_url;

}


function depurarDatos3(datos3) {

    console.log(datos3);
    console.log(datos3.tracks[9].preview_url); //cancion
    console.log(datos3.tracks[9].name); // nombre
    console.log(datos3.tracks[9].album.images[0].url); // imagen

    let nombre3 = document.getElementById("nombre3");
    let titulo3 = document.getElementById("titulo3");
    let imagen3 = document.getElementById("imagenes3");
    let audio3 = document.getElementById("audio3");

    nombre3.textContent = datos3.tracks[9].artists[0].name;
    titulo3.textContent = datos3.tracks[9].name;
    imagen3.src = datos3.tracks[9].album.images[0].url;
    audio3.src = datos3.tracks[9].preview_url;

}

function depurarDatos4(datos4) {

    console.log(datos4);
    console.log(datos4.tracks[0].preview_url); //cancion
    console.log(datos4.tracks[0].name); // nombre
    console.log(datos4.tracks[0].album.images[0].url); // imagen

    let nombre4 = document.getElementById("nombre4");
    let titulo4 = document.getElementById("titulo4");
    let imagen4 = document.getElementById("imagenes4");
    let audio4 = document.getElementById("audio4");

    nombre4.textContent = datos4.tracks[9].artists[0].name;
    titulo4.textContent = datos4.tracks[0].name;
    imagen4.src = datos4.tracks[0].album.images[0].url;
    audio4.src = datos4.tracks[0].preview_url;

} function depurarDatos5(datos5) {

    console.log(datos5);
    console.log(datos5.tracks[0].preview_url); //cancion
    console.log(datos5.tracks[0].name); // nombre
    console.log(datos5.tracks[0].album.images[0].url); // imagen

    let nombre5 = document.getElementById("nombre5");
    let titulo5 = document.getElementById("titulo5");
    let imagen5 = document.getElementById("imagenes5");
    let audio5 = document.getElementById("audio5");

    nombre5.textContent = datos5.tracks[9].artists[0].name;
    titulo5.textContent = datos5.tracks[0].name;
    imagen5.src = datos5.tracks[0].album.images[0].url;
    audio5.src = datos5.tracks[0].preview_url;

}




