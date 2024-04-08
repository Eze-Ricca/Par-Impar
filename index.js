let elNumero = document.querySelector(".input-class");
let formulario = document.querySelector(".form");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  // const input = formulario.elements[0].value; //utilizo la posicion 0 porque se que es un solo input
  let input;
  let paragraphLog = document.querySelector("#log");
  for (let index = 0; index < formulario.length; index++) {
    const element = formulario[index].value;
    console.log(element);
    if (element == elNumero.value) {
      input = element;
    }
  }

  if (input % 2 === 0) {
    console.log("es par");
    paragraphLog =
      paragraphLog.textContent = `Ingresaste el número: ${input}, y es un numero par'`;
  } else {
    paragraphLog =
      paragraphLog.textContent = `Ingresaste el número: ${input}, y es un numero impar'`;
  }
});
