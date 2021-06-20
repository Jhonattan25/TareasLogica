/*
    3. Cree un programa que solicite al usuario el nombre de uno de los cinco continentes, luego, muestre cinco países del continente seleccionado por el usuario. Use diccionarios. Use ciclos.
*/
let continent = prompt("Ingrese nombre del continente");
showCountries(continent);

function showCountries(nameContinent){
    let continents = {
        'Asia': ['China', 'Corea del Norte', 'Emiratos Árabes Unidos', 'Rusia','Filipinas', 'Maldivas'],
        'Europa': ['Alemania', 'Croacia', 'Italia', 'Francia', 'España'],
        'África': ['Egipto', 'Sudáfrica', 'Marruecos', 'Nigeria', 'Senegal'],
        'Oceanía': ['Australia', 'Nueva Zelanda', 'Tonga', 'Micronesia', 'Palaos'],
        'America': ['Colombia','Chile', 'Argentina', 'Cuba', 'Ecuador']
    };
    console.log(`Los países del continente ${nameContinent} son:\n${continents[nameContinent].join('\n')}`);   
}