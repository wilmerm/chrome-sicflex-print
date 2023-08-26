
// Controles.
var empresa_name = document.getElementById("empresa_name");
var empresa_rnc = document.getElementById("empresa_rnc");
var empresa_email = document.getElementById("empresa_email");
var empresa_web = document.getElementById("empresa_web");
var empresa_print_note = document.getElementById("empresa_print_note");

var almacen_01_name = document.getElementById("almacen_01_name");
var almacen_01_direccion = document.getElementById("almacen_01_direccion");
var almacen_01_email = document.getElementById("almacen_01_email");
var almacen_01_phone = document.getElementById("almacen_01_phone");

var almacen_02_name = document.getElementById("almacen_02_name");
var almacen_02_direccion = document.getElementById("almacen_02_direccion");
var almacen_02_email = document.getElementById("almacen_02_email");
var almacen_02_phone = document.getElementById("almacen_02_phone");

var almacen_03_name = document.getElementById("almacen_03_name");
var almacen_03_direccion = document.getElementById("almacen_03_direccion");
var almacen_03_email = document.getElementById("almacen_03_email");
var almacen_03_phone = document.getElementById("almacen_03_phone");

var almacen_04_name = document.getElementById("almacen_04_name");
var almacen_04_direccion = document.getElementById("almacen_04_direccion");
var almacen_04_email = document.getElementById("almacen_04_email");
var almacen_04_phone = document.getElementById("almacen_04_phone");

var alerta = document.getElementById("alert");

const button_save = document.getElementById("button_save");
const button_close = document.getElementById("button_close");
const button_cancel = document.getElementById("button_cancel");


// Datos predeterminados.
const empresa = {
  nombre: "REFRICENTRO RUBIERA SRL",
  direccion: "Av. 27 de Febrero No. 438, Distrito Nacional",
  rnc: "101-82473-5",
  email: "info@rubiera.com.do",
  web: "rubiera.com.do",
  logo: "http://rubiera.com.do/wp-content/uploads/2017/11/rubiera.png",
  print_note: "No se aceptan devoluciones después de 30 días. \nNo se aceptan devoluciones en piezas electrónicas.",
  almacenes: {
      a_01: {
          nombre: "Suc. Tunti Cáceres",
          direccion: "Calle Tunti Caceres #167, Villa Juana",
          telefono: "809-685-4545",
          email: "tuntirubiera@gmail.com",
      },
      a_02: {
          nombre: "Suc. 27 de Febrero",
          direccion: "Av. 27 de Febrero No. 438, Distrito Nacional",
          telefono: "809-537-4545",
          email: "rubiera27@gmail.com",
      },
      a_03: {
          nombre: "Suc. Santiago",
          direccion: "Av. 27 de Febrero No. 31, Santiago",
          telefono: "809-583-2110",
          email: "rubierasantiago@gmail.com",
      },
      a_04: {
          nombre: "Suc. Bávaro",
          direccion: "Km 7, Carretera Verón-Bávaro",
          telefono: "809-468-1498",
          email: "rubierabavaro@gmail.com",
      }
  }
}


function init(data) {

  chrome.storage.sync.get(data, function(items) {

    empresa_name.value = items.nombre;
    empresa_rnc.value = items.rnc;
    empresa_email.value = items.email;
    empresa_web.value = items.web;
    empresa_print_note.value = items.print_note

    almacen_01_name.value = items.almacenes.a_01.nombre;
    almacen_01_direccion.value = items.almacenes.a_01.direccion;
    almacen_01_email.value = items.almacenes.a_01.email;
    almacen_01_phone.value = items.almacenes.a_01.telefono;

    almacen_02_name.value = items.almacenes.a_02.nombre;
    almacen_02_direccion.value = items.almacenes.a_02.direccion;
    almacen_02_email.value = items.almacenes.a_02.email;
    almacen_02_phone.value = items.almacenes.a_02.telefono;

    almacen_03_name.value = items.almacenes.a_03.nombre;
    almacen_03_direccion.value = items.almacenes.a_03.direccion;
    almacen_03_email.value = items.almacenes.a_03.email;
    almacen_03_phone.value = items.almacenes.a_03.telefono;

    almacen_04_name.value = items.almacenes.a_04.nombre;
    almacen_04_direccion.value = items.almacenes.a_04.direccion;
    almacen_04_email.value = items.almacenes.a_04.email;
    almacen_04_phone.value = items.almacenes.a_04.telefono;

  });
}


function updateEmpresa() {
  empresa.nombre = empresa_name.value;
  empresa.rnc = empresa_rnc.value;
  empresa.email = empresa_email.value;
  empresa.web = empresa_web.value;
  empresa.print_note = empresa_print_note.value;

  empresa.almacenes.a_01.nombre = almacen_01_name.value;
  empresa.almacenes.a_01.direccion = almacen_01_direccion.value;
  empresa.almacenes.a_01.email = almacen_01_email.value;
  empresa.almacenes.a_01.telefono = almacen_01_phone.value;

  empresa.almacenes.a_02.nombre = almacen_02_name.value;
  empresa.almacenes.a_02.direccion = almacen_02_direccion.value;
  empresa.almacenes.a_02.email = almacen_02_email.value;
  empresa.almacenes.a_02.telefono = almacen_02_phone.value;

  empresa.almacenes.a_03.nombre = almacen_03_name.value;
  empresa.almacenes.a_03.direccion = almacen_03_direccion.value;
  empresa.almacenes.a_03.email = almacen_03_email.value;
  empresa.almacenes.a_03.telefono = almacen_03_phone.value;

  empresa.almacenes.a_04.nombre = almacen_04_name.value;
  empresa.almacenes.a_04.direccion = almacen_04_direccion.value;
  empresa.almacenes.a_04.email = almacen_04_email.value;
  empresa.almacenes.a_04.telefono = almacen_04_phone.value;

  return empresa;
}

button_save.addEventListener("click", function() {
  updateEmpresa();
  chrome.storage.sync.set(empresa, function() {
    console.log(empresa);
  });
  alerta.style.display = "block";
  window.location.href = "#alert";
});


button_close.addEventListener("click", function() {
  window.close();
});
button_cancel.addEventListener("click", function() {
  window.close();
});


init(data=empresa);