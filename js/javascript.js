const evento = document.getElementById("send");
const enviarFormulario = () => {
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;
  let saludo = " ¿Como estas? ";
  let msj1 = "Esta es la oferta educativa de la Universidad Freedman \n";
  let msj2 = "Para mayor información visitanos en https://ceufreedman.com.mx/";
  let asunto = "Información Freedman";

  var whasa = window.open(`https://web.whatsapp.com/send/?phone=${telefono}`);
  var win = window.open(
    `https://wa.me/${telefono}%Hola%20${nombre}?text=${saludo}%20${msj1}%20${msj2}, Asunto:%20${asunto}`,
    "_blank"
  );
};

evento.addEventListener("click", enviarFormulario);
