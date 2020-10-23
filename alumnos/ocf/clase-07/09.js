// 9. Crear una función que valide que una URL es correcta. Vamos a asumir que las urls pueden contener caracteres alfanuméricos, guiones y puntos.

const fnc = url => {
    const regex = /^(https?:)([/]){2}(www.)?([a-zA-Z0-9-])+/;
    const checkUrl = url.match(regex) ? true : false;
    console.log(checkUrl);
}

// URL correctas (retornan 'true')
fnc('https://www.gdScm/');
fnc('http://127.0.0.1:5500/index.html');
fnc('https://github.com/Fictizia/Curso-de-JavaScript-avanzado-para-desarrolladores_ed5/blob/master/teoria/clase7.md');
fnc('https://www.google.com/search?tbm=isch&q=test%20tube&tbs=imgo:1');
fnc('https://dle.rae.es/?w=melodrama');
fnc('https://www.deepl.com/translator#es/en/Melodrama%3A%20Obra%20teatral%2C%20literaria%2C%20cinematogr%C3%A1fica%20o%20radiof%C3%B3nica%20en%20la%20que%20se%20acent%C3%BAan%20los%20aspectos%20pat%C3%A9ticos%20y%20sentimentales.');
fnc('https://www.deeplcom/');
fnc('https://www.deepl.134783473/');

// URL incorrectas (retornan 'false')
fnc('hxxps://www.deeplcom/');
fnc('httpx://www.deepl.com/');
