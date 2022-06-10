/*function LaTeX(code) {
    return `${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }*/
  
  let baseDePreguntas = [
    {
      pregunta: "¿Quién desarrollo facebook?",
      respuesta: "Mark Zuckerberg ",
      distractores: ["Bill Gates", "Steve Jobs", "Paull Allen"],
    },
    {
      pregunta: "¿En que año nacio apple?",
      respuesta: "1976",
      distractores: ["2000", "1999", "1978"],
    },
    {
      pregunta: "¿Cual es la secuencia 4, 8, 10, 20, 22, 44,..?",
      respuesta: "46",
      distractores: ["35", "45", "50"],
    },
    {
      pregunta: "¿Cuál es el lugar más frío de la tierra?",
      respuesta: "Antártida",
      distractores: ["Rusia", "Francia", "EEUU"],
    },
    {
      pregunta: "¿En qué país se encuentra la torre de Pisa?",
      respuesta: "Italia",
      distractores: ["México", "Ecuador", "Colombia"],
    },
    {
      pregunta: "¿Dónde se encuentra la Sagrada Familia?",
      respuesta: "Barcelona",
      distractores: ["Venezuela", "Paris", "China"],
    },
    {
      pregunta: "¿Si 50 es el 100%, ¿cuánto es el 90%?",
      respuesta: "45",
      distractores: ["43", "60", "55"],
    },
    {
      pregunta: "¿Quién es Justin Timberlake?",
      respuesta: "Cantante",
      distractores: ["Desarrollador", "Abogado", "Empresario"],
    },
    {
      pregunta: "¿De qué país es el futbolista Zlatan Ibrahimović?",
      respuesta: "Suiza",
      distractores: ["Londres", "España", "Brasil"],
    },
    {
      pregunta: "¿Cual es un lenguaje de programación?",
      respuesta: "Java",
      distractores: ["Visual Studio", "Blender", "Html"],
    },
    {
      pregunta: "¿Cómo se llama la estación espacial rusa?",
      respuesta: "Mir",
      distractores: ["Morty", "Marge", "Marte"],
    },
    {
      pregunta: "¿Qué es más pequeño, un átomo o una molécula?",
      respuesta: "Átomo",
      distractores: ["Molecula", "Celulas", "Cromoplastos"],
    },
    {
      pregunta: "¿Qué era el Concorde?",
      respuesta: "Avión supersónico",
      distractores: ["Cuatrimoto", "Camperos", "Tractocamiones"],
    },
    {
      pregunta: "¿Cómo se llama el proceso por el cual las plantas obtienen alimento?",
      respuesta: "Fotosíntesis",
      distractores: ["Respiración", "Energia", "Agua"],
    },
    {
      pregunta: "¿Qué día celebran los cristianos la festividad de la Epifanía de Jesús?",
      respuesta: "6 de Enero",
      distractores: ["6 de Febrero", "8 de Marzo", "16 de Mayo"],
    },
    {
      pregunta: "¿Cuánto vale el número pi?",
      respuesta: "3,1416",
      distractores: ["4,2416", "3,1214", "2,8756"],
    },
    {
      pregunta: "¿Cuál es la capital de Croacia?",
      respuesta: "Zagreb",
      distractores: ["Lima", "Copenhague", "Medellín"],
    },
    {
      pregunta: "¿Cuál es la capital de Dinamarca?",
      respuesta: "Copenhague",
      distractores: ["Praga ", "Budapest ", "Ámsterdam"],
    },
    {
      pregunta: "¿Quién fue el presidente de España que gobernó desde el año 2011 hasta el 2018?",
      respuesta: "Mariano Rajoy",
      distractores: ["Adama Barrow", "Ali Bongo", " Filipe Nyussi"],
    },
    {
      pregunta: "¿En qué país se usó la primera bomba atómica en combate?",
      respuesta: "Japón",
      distractores: ["China", "Misisipi", "Hungria"],
    },
    {
      pregunta: "¿Cuántos años tiene un lustro?",
      respuesta: "5 años",
      distractores: ["7 años", "10 años", "20 años"],
    },
    {
      pregunta: "¿En qué país se encuentra la Universidad de Cambridge?",
      respuesta: " Reino Unido",
      distractores: ["Paris", "Canadá", "Eeuu"],
    },
    {
      pregunta: "¿En qué isla está situado el Teide?",
      respuesta: "Canarias",
      distractores: ["Baru", "Seychelles", "Santorini"],
    },
    {
      pregunta: "¿Cuántos corazones tienen los pulpos?",
      respuesta: " 3",
      distractores: ["1", "2", "4"],
    },
    {
      pregunta: "¿En qué año se produce la Revolución Francesa?",
      respuesta: "1789",
      distractores: ["1998", "1886", "1720"],
    },
  ];
  