const evento = document.getElementById("send");
const enviarFormulario = () => {
  let nombre = document.getElementById("nombre").value;
  let telefono = parseInt(document.getElementById("telefono").value, 10);
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;
  let saludo = " ¿Como estas? ";
  let msj1 = "Esta es la oferta educativa de la Universidad Freedman \n";
  let msj2 =
    "\nPara mayor información visitanos en https://ceufreedman.com.mx/";
  let msj3 = "Tu te registraste con el correo: ";
  let msj4 = "\n y el numero: ";
  let asunto = "Información Freedman";
  console.log(telefono);
  //   var whasa = window.open(`https://web.whatsapp.com/send/?phone=${telefono}`);
  var whasa = window.open(
    `https://web.whatsapp.com/send/?phone=${telefono}&text=Hola+${nombre}+${saludo}+${msj1}+${msj2}+${msj3}+${msj4}+${telefono}+${correo}+${mensaje}&type=phone_number&app_absent=0`
  );
  console.log(telefono);
  //   var win = window.open(
  //     `https://wa.me/${telefono}?text=Hola%20${nombre}%20${saludo}%20${msj1}%20${msj2}%20${msj3}
  //     %20${msj4}%20${telefono}%20${correo}%20${mensaje}, Asunto:%20${asunto}`,
  //     "_blank"
  //   );
};

evento.addEventListener("click", enviarFormulario);
