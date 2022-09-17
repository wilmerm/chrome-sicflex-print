



var logo;
var almacen_id;
var almacen_name;
var documento_id;
var documento_name;
var numero;
var estatus;
var fecha;
var fecha_vence;
var cliente_id;
var cliente_name;
var cliente_contacto;
var cliente_name2;
var moneda;
var tasa;
var detalle1;
var vendedor_id;
var vendedor_name;
var paga_itbis;
var itbis_incluido;
var descuento;
var condicion;
var pedido;
var pedido_numero;
var pedido_fecha;
var ncf;
var nif;
var nota;
// Dependiendo de la configuración de la página de Sicflex, sumaremos
// los totales al final. Su representación está dada por controles ocultos
// con los siguientes ids:
// __locale_decimal_separator, __locale_grouping_separator
var decimal_separator = ".";
var grouping_separator = ",";
// Solo para devoluciones:
var factura_afectada_fecha;
var factura_afectada_numero;
var factura_afectada_tipo;







function update(tipo="factura") {
    /*
    Parameters:
        tipo (string): 'factura', 'devolucion'.
    */
    console.log(`update(tipo=${tipo})`);

    logo = document.getElementsByClassName("sic-header-org-logo")[0];
    decimal_separator = document.getElementById("__locale_decimal_separator").value; 
    grouping_separator = document.getElementById("__locale_grouping_separator").value;

    if (tipo == "factura") {
        almacen_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__warehouse___id");
        almacen_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__warehouse___description");
        documento_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__document___id");
        documento_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__document___description");
        numero = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__numero");
        estatus = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__estatus");
        fecha = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__fecha");
        fecha_vence = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__fechaVence");
        cliente_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__ccamc___noCliente");
        cliente_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__ccamc___nombre");
        cliente_contacto = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__ccamc___contacto");
        cliente_name2 = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__tarjetHabiente");
        moneda = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__currencyDefinition___currencyCode");
        tasa = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__currencyRate");
        detalle1 = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__detalle1");
        vendedor_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__salesperson___id");
        vendedor_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__salesperson___name");
        paga_itbis = document.getElementsByName("ox_jSicflexWebApp_InventoryInvoice__pagaItbis")[0];
        itbis_incluido = document.getElementsByName("ox_jSicflexWebApp_InventoryInvoice__itbisIncluido")[0];
        descuento = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__porcentajeDesc");
        condicion = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__condicion___id");
        pedido = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__creditCash");
        pedido_numero = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__numeroPedido");
        pedido_fecha = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__fechaPedido");
        ncf = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__fiscalDocument");
        nif = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__fiscalPrinterNumber");
        nota = document.getElementById("ox_jSicflexWebApp_InventoryInvoice__notas");
        
    } else if (tipo == "devolucion") {
        almacen_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__warehouse___id");
        almacen_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__warehouse___description");
        documento_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__document___id");
        documento_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__document___description");
        numero = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__numero");
        estatus = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__estatus");
        fecha = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__fecha");
        fecha_vence = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__fechaVence");
        cliente_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__ccamc___noCliente");
        cliente_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__ccamc___nombre");
        cliente_contacto = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__ccamc___contacto");
        cliente_name2 = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__tarjetHabiente");
        moneda = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__currencyDefinition___currencyCode");
        tasa = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__currencyRate");
        detalle1 = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__detalle1");
        vendedor_id = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__salesperson___id");
        vendedor_name = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__salesperson___name");
        paga_itbis = document.getElementsByName("ox_jSicflexWebApp_InventoryInvoiceReturn__pagaItbis")[0];
        itbis_incluido = document.getElementsByName("ox_jSicflexWebApp_InventoryInvoiceReturn__itbisIncluido")[0];
        descuento = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__porcentajeDesc");
        condicion = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__condicion___id");
        pedido = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__creditCash");
        pedido_numero = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__numeroPedido");
        pedido_fecha = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__fechaPedido");
        ncf = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__fiscalDocument");
        nif = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__fiscalPrinterNumber");
        nota = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__notas");
        // Solo para devoluciones.
        factura_afectada_tipo = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__cxcDocumento___id");
        factura_afectada_numero = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__cxcNumero");
        factura_afectada_fecha = document.getElementById("ox_jSicflexWebApp_InventoryInvoiceReturn__cxcFecha");
    }

    


}



// Datos predeterminados.
// Este mismo objeto (tal cual) se encuentra también en 
// options.js para administrar el almacenamiento del mismo.
var empresa = {
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
            direccion: "Calle Tunti Caceres #167, Villa juana",
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



var html = '<!DOCTYPE html><html lang="es"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>REFRICENTRO RUBIERA SRL</title> <style> body { font-size: 16px; font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif; color: black; } #header { width: 100% } #header th { text-align: right; } #header-left { width: 50%; padding-top: 0px; } #header-right { width: auto } h1 { font-size: 26px; margin: 0px; padding: 0px; font-style: normal; font-weight: bold; } #logo { width: 128px } #items { border-collapse: collapse; font-size: 14px; } #items td { border: 1px solid gray } #items th { text-align: center; border: 1px solid gray; background-color: #eee; } hr { border: none; border-top: 1px solid gray; } #mark { position: fixed; font-size: 5rem; font-weight: bold; opacity: 0.1; top: 45%; left: 10%; -webkit-transform: rotate(-45deg); -webkit-transform: rotate3d(20,41,10); } .btn, .btn-img, .btn img { display: none; } </style></head><body> <div id="mark"> REIMPRESIÓN </div> <div id="app" class="container-fluid"> <table id="header"> <tr> <td id="header-left" style="font-weight: bold;">  <h1 id="empresa">UNOLET</h1>  <div id="direccion">Dirección de la empresa.</div>  <div id="rnc">RNC: 001-00000-1</div>  <div id="telefono">Tel.: 809-000-0000</div>  <div id="email">Email: info@unolet.com</div>  <div id="web">blog.unolet.com</div> </td> <td id="header-right">  <table>  <tr>  <td colspan="2" id="titulo" style="font-size: 20px;">FACTURA A CONTADO</td>  </tr>  <tr>  <th>Almacén: </th>  <td id="almacen">Suc. Principal</td>  </tr>  <tr>  <th>Número: </th>  <td id="numero" style="white-space: nowrap;">000000000000</td>  </tr>  <tr>  <th>Fecha: </th>  <td id="fecha">01-01-2020</td>  </tr>  <tr>  <th>Vendedor: </th>  <td id="vendedor">Juan Pérez</td>  </tr>  <tr>  <th>Condición: </th>  <td id="condicion">A Contado</td>  </tr>  </table> </td> </tr> <tr> <td id="header-left-2">  <table>  <tr>  <th>Cliente: </th>  <td id="cliente">Juana Pérez</td>  </tr>  <tr>  <th>Contacto: </th>  <td id="cliente_contacto">809-000-0001</td>  </tr>  </table> </td> <td id="header-right-2">  <table>  <tr>  <th>NCF: </th>  <td id="ncf">B010000000001</td>  </tr>  <tr>  <th>NIF: </th>  <td id="nif">0123456789876543210</td>  </tr>  </table>  <table id="factura_afectada" style="display: none;">  <tr><th colspan="2" style="text-align: center;">Factura afectada</th></tr>  <tr>  <th>Número: </th>  <td id="factura_afectada_numero" style="white-space: nowrap;">AAA-0000000000</td>  </tr>  <tr>  <th>Fecha: </th>  <td id="factura_afectada_fecha">01/01/1900</td>  </tr>  </table> </td> </tr> </table> <table id="items" style="width: 100%"> <thead> <tr id="keys"></tr> </thead> <tbody id="values"></tbody> </table> <!-- Totales --> <table style="width: 100%;"> <tr> <td id="print_note" style="width: 55%; font-style: italic; font-size: 14px; padding-right: 5px;"></td> <td>  <table style="text-align: right; width: 100%">  <tr>  <td id="subtotal"></td>  </tr>  <tr>  <td id="descuento"></td>  </tr>  <tr>  <td id="itbis"></td>  </tr>  <tr>  <td id="total" style="font-weight: bold; font-size: 18px;"></td>  </tr>  <tr>  <td id="total2" style="font-weight: bold; font-size: 18px;"></td>  </tr>  </table> </td> </tr> </table> </div> <footer style="position: fixed; bottom: 10px; width: 100%;"> <table style="width: 100%;"> <tr> <td style="border: none; border-top: 1px solid black; text-align: center;">Revisado por</td> <td style="border: none; padding: 5px"></td> <td style="border: none; border-top: 1px solid black; text-align: center;">Despachado por</td> <td style="border: none; padding: 5px"></td> <td style="border: none; border-top: 1px solid black; text-align: center;">Recibido por</td> </tr> </table> </footer></body></html>';

// Con este id base Sicflex identifica los encabezados de la tabla de movimientos.
// Pero el texto se encuentra en un tag "a" dentro de muchos otros.
// Tenemos 2 ids, uno para facturas y otro para devoluciones, según en la página
// donde se encuentre el usuario se usará uno u otro.
var base_items_id = 'ox_jSicflexWebApp_InventoryInvoice__xava_collectionTab_imatrs_'; // agregamos el indice de la columna al final col0, col1
var base_items_devolucion_id = 'ox_jSicflexWebApp_InventoryInvoiceReturn__xava_collectionTab_imatrs_'; // agregamos el indice de la columna al final col0, col1


function get(element, method="value") {
    console.log(`get(element=${element}, method=${method})`);
    try {
        if (method == "value") {return element.value}
        if (method == "select") {return element.options[element.selectedIndex].text}
        if (method == "src") {return element.src}
        if (method == "href") {return element.href}
        if (method == "innerHTML") {return element.innerHTML}
        if (method == "innerText") {return element.innerText}
    } catch (error) {return ""}
}






function getAlmacen(element, empresa) {
    console.log(`getAlmacen(element=${element}, empresa=${empresa})`);
    
    try {
        id = element.value;
    } catch (error) {
        return {};
    }

    if (id == "01") {
        return empresa.almacenes.a_01;
    }
    if (id == "02") {
        return empresa.almacenes.a_02;
    }
    if (id == "03") {
        return empresa.almacenes.a_03;
    }
    if (id == "04") {
        return empresa.almacenes.a_04;
    }
    return {};
}


function Float(value) {
    //console.log(`Float(value=${value})`);
    if (decimal_separator == ",") {
        value.replace(/./g, "");
        value.replace(",", ".");
    } else {
        value = value.replace(/,/g, "");
    }
    return parseFloat(value);
}


function Int(value) {
    //console.log(`Int(value=${value})`);

    if (decimal_separator == ",") {
        value.replace(/./g, "");
        value.replace(",", ".");
    } else {

        value = value.replace(/,/g, "");
    }
    return parseInt(value);
}


function intComma(x) {
    //console.log(`intComma(x=${x})`);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }


function parseValue(value, typee) {
    // Convierte al tipo indicado en typee según sea entero, decimal, texto...
    //console.log(`parseValue(value=${value}, typee=${typee})`);
    try {
        if (typee == "entero") {return Int(value).toLocaleString()}
        if (typee == "decimal") {return parseFloat(Float(value).toFixed(2)).toLocaleString()}
    } catch (error) {
        return value;
    }
    return value;
}


function getItemsFields() {
    // Obtiene los nombres de las columnas de los movimientos.
    console.log(`getItemsFields()`);

    let properties = [
        {prop: "noLinea", name: "No.", style: "text-align: right", typee: "entero"},
        {prop: "referencia.referencia", name: "Referencia", style: "text-align: left", typee: "texto"},
        {prop: "descripcion", name: "Descripción", style: "text-align: left", typee: "texto"},
        {prop: "cantOriginal", name: "Cantidad", style: "text-align: right", typee: "decimal"},
        {prop: "precioOriginal", name: "Precio", style: "text-align: right", typee: "decimal"},
        {prop: "ventaNeto", name: "Neto", style: "text-align: right", typee: "decimal", sumar: true},
        {prop: "ventaDescuento", name: "Descuento", style: "text-align: right", typee: "decimal", sumar: true},
        {prop: "ventaItbis", name: "Itbis", style: "text-align: right", typee: "decimal", sumar: true},
        {prop: "ventaBruto", name: "Total", style: "text-align: right", typee: "decimal", sumar: true}
    ]
    const names = [];
    properties.forEach(prop => {
        console.log("data-property=", prop);
        let th = document.querySelectorAll("[data-property='" + prop.prop + "']")[0];
        // Cuando es una devolución algunas columnas no estarán. O simplemente
        // si la columna no está visible, no la mostramos.
        if (th != undefined) {
            names.push({prop: prop, element: th, index: th.cellIndex})
        }
    });

    return names;
}


function setItems(doc, tipo="factura") {
    console.log(`setItems(doc=${doc}, tipo=${tipo})`);

    let items_id = base_items_id;
    
    if (tipo == "devolucion") {
        items_id = base_items_devolucion_id;
    }

    console.log("Obteniendo los items como tipo", tipo);
    console.log("items_id:", items_id);

    let names = getItemsFields();
    let keys = doc.getElementById("keys");
    let values = doc.getElementById("values");

    // totales.
    var bruto = 0;

    // Añadimos los nombres de columnas.
    console.log("setItems() | Añadiendo nombre a columnas.")
    for (i=0; i<names.length; i++) {
        let e = names[i];
        let th = doc.createElement("th");
        th.innerText = e.prop.name;
        th.style = "text-align: center";
        th.id = "item-" + e.index;
        keys.appendChild(th);
    }

    // Añadimos los valores.
    console.log("setItems() | Añadiendo valores.")
    for (i=0; i<100; i++) {
        id = items_id + i;
        let tr = document.getElementById(id);

        try {
            var tds = tr.getElementsByTagName("td");
        } catch (error) {
            break;
        }

        var newRow = doc.createElement("tr");

        // Cada campo.
        for (a=0; a<names.length; a++) {
            let e = names[a];
            let value = tds[e.index].innerText.replace(/\n/g, "").replace("  ", " ").trim();;
            let newCell = doc.createElement("td");

            if (e.prop.prop == "cantOriginal") {
                value = intComma(Float(parseValue(value, e.prop.typee)))
            }
            if (e.prop.prop == "precioOriginal") {
                value = intComma(Float(parseValue(value, e.prop.typee)));
            }
            if (e.prop.prop == "ventaBruto") {
                bruto += Float(parseValue(value, e.prop.typee));
            }

            newCell.innerText = value;
            newCell.style = e.prop.style;

            newRow.appendChild(newCell);
        }
        // Cada iteración establece una fila más de item.
        values.appendChild(newRow);
    }

    console.log("setItems() | Totales.")
    let rowsTotal = document.getElementsByClassName("ox-total-row");
    let rt0 = rowsTotal[0]; // Sumatoria de columnas. La venta en bruto está en su index.
    let rt1 = rowsTotal[1]; // Descuento.
    let rt2 = rowsTotal[2]; // Itbis.
    let rt3 = rowsTotal[3]; // Neto. (Tip value en devolución.)
    let rt4 = rowsTotal[4]; // (Neto en devolución.)
    let sb = rt0.cells[rt0.cells.length-1];

    console.log("setItems() | Totales | Escribiendo...")
    doc.getElementById("subtotal").innerText = "Subtotal " + sb.innerText.replace(/\n/g, "").replace("  ", " ").trim();
    if (tipo == "factura") {
        doc.getElementById("descuento").innerText = rt1.innerText.replace(/\n/g, "").replace("  ", " ").trim();
    }
    doc.getElementById("itbis").innerText = rt2.innerText.replace(/\n/g, "").replace("  ", " ").trim();
    doc.getElementById("total").innerText = rt3.innerText.replace(/\n/g, "").replace("  ", " ").trim();

    try {
        doc.getElementById("total").innerText = rt4.innerText.replace(/\n/g, "").replace("  ", " ").trim();
    } catch (error) {
        
    }

    console.log("setItems() | Totales | Totales escritos.");
}



function onPrint() {
    // Este métido se maneja de forma asincrona, por eso lo llamamos asi.
    console.log("onPrint()")
    chrome.storage.sync.get(null, function(data) {

        // Cuando la extensión no se ha configurado y por tanto no 
        // existen datos de usuario almacenados, entoces recurrimos 
        // al objeto empresa default.
        if (Object.keys(data).length === 0) {
            data = empresa;
        }
        printPagina(0, data);
    });
}


function printPagina(intentos=0, empresa) {
    console.log(`printPagina(intentos=${intentos}, empresa=${empresa})`);
    // Extraemos los datos de la página.

    // La página puede ser facturación o devolución.
    // El path termina en InventoryInvoice para facturas y InventoryInvoiceReturn
    // para devoluciones.
    let url = window.location.href;
    let url_array = url.split("/");
    let url_last = url_array[url_array.length-1];
    let tipo = "factura";

    if (url_last.indexOf("InventoryInvoiceReturn") != -1) {
        tipo = "devolucion";
    }

    console.log("URL", url);
    console.log("Tipo: ", tipo)
    
    update(tipo=tipo);

    almacen = getAlmacen(almacen_id, empresa);

    if (decimal_separator != ".") {
        let sino = confirm("La configuración regional de Sicflex no es la aducuada para el formato numérico utilizado en República Dominicana. Al hacer click en 'Aceptar' se cambiará la configuración regional ideal para República Dominicana, con los decimales separados por punto y no por coma. También podrá hacerlo usted mismo dando click a la banderita dominicana que aparece en la parte superior de la página.");
        if (sino == true) {
            // Este código es propio del sitio donde se ejecutará esta extensión.Al igual que otros más 'openxava'.
            location.href = "javascript:openxava.executeAction('jSicflexWebApp', 'InventoryInvoice', '', false, 'UserLocales.esDo')";
        }
        return;
    } 

    // Si no se obtiene un número, esto significa que no se está 
    // mostrando ninguna factura.
    if (!get(numero)) {
        return alert("No hay ninguna factura para imprimir.");
    }
    // Para poder incluir el NCF y el NIF, estos deberán estar mostrandose 
    // en la página, de no ser así, intentamos mostrarlo primero.
    if (!get(ncf)) {
        // Este código es propio del sitio donde se ejecutará esta extensión.Al igual que otros más 'openxava'.
        location.href = "javascript:openxava.executeAction('jSicflexWebApp', 'InventoryInvoice', '', false, 'Sections.change', 'activeSection=0')";
        
        if (intentos > 3) {
            location.href =  "#ox_jSicflexWebApp_InventoryInvoice__sections_xava_view";
            return alert("No fue posible extraer el NCF de esta página, confirme que realmente se encuentra en una factura y que la pestaña 'Registro de autorizaciones (NCF)' se esté mostrando.");
            
        } else {
            setTimeout(() => {
                printPagina(intentos + 1);
            }, 7000);
            return;
        }
    }


    // Es obligatorio que la factura ya se haya impreso en la impresora fiscal,
    // antes de reeimprimirla por aqui.
    if (!get(nif)) {
        if (location.hostname == "demo.sicflex.com") {
            // "Se permitirá imprimir a modo de debug."
        } else {
            let sino = confirm("Antes de reeimprimir una factura en este formato, dicha factura debió antes ser impresa por la impresora fiscal \n\n¿Desea imprimir ahora por la impresora fiscal?");
            if (sino == true) {
                // Este código es propio del sitio donde se ejecutará esta extensión.Al igual que otros más 'openxava'.
                location.href = "javascript:openxava.executeAction('jSicflexWebApp', 'InventoryInvoice', '', false, 'InventoryInterfacedController.generateDetailPdf')";
            } 
            return;
        }
    }

    console.log("Creando ventana de impresión...");
    var win = window.open();
    console.log("Creando ventana de impresión | Escribiendo HTML...")
    win.document.write(html);
    //win.document.getElementById("logo").src = get(logo, "src");
    win.document.getElementById("empresa").innerText = empresa.nombre;
    win.document.getElementById("rnc").innerText = "RNC: " + empresa.rnc;
    win.document.getElementById("print_note").innerText = empresa.print_note;
    win.document.getElementById("direccion").innerText = almacen.direccion;
    win.document.getElementById("telefono").innerText = "Tel.: " + almacen.telefono;
    win.document.getElementById("email").innerText = "Email: " + almacen.email;
    win.document.getElementById("web").innerText = empresa.web;
    win.document.getElementById("almacen").innerText = get(almacen_name);
    win.document.getElementById("numero").innerText = get(documento_id) + "-" + get(numero);
    win.document.getElementById("fecha").innerText = get(fecha);
    win.document.getElementById("vendedor").innerText = get(vendedor_name);
    win.document.getElementById("condicion").innerText = get(condicion, "select");

    // Solo para devoluciones.
    if (tipo == "devolucion") {
        console.log("Creando ventana de impresión | Devoluciones...");
        win.document.getElementById("titulo").innerText = "DEVOLUCIÓN EN FACTURA";
        win.document.getElementById("factura_afectada").style.display = "block";
        win.document.getElementById("factura_afectada_numero").innerText = get(factura_afectada_tipo) + "-" + get(factura_afectada_numero);
        win.document.getElementById("factura_afectada_fecha").innerText = get(factura_afectada_fecha);
    // Solo para facturas.
    } else {
        console.log("Creando ventana de impresión | Facturas...");
        win.document.getElementById("titulo").innerText = "FACTURA A " + get(pedido, "select").toUpperCase(); 
    }


    // El nombre de cliente será el que se indique o el nombre guardado.
    console.log("Creando ventana de impresión | Nombre del cliente...");
    let cliente;
    if (get(cliente_name2)) {
        cliente = "[" + get(cliente_id) + "] " + get(cliente_name2);
    } else {
        cliente = "[" + get(cliente_id) + "] " + get(cliente_name);
    }

    win.document.getElementById("cliente").innerText = cliente;
    win.document.getElementById("cliente_contacto").innerText = get(cliente_contacto);
    win.document.getElementById("ncf").innerText = get(ncf);
    win.document.getElementById("nif").innerText = get(nif);
    win.document.getElementById("print_note").innerText = `${empresa.print_note} \n${get(nota)}`

    console.log("Creando ventana de impresión | setItems()...");
    setItems(win.document, tipo=tipo);

    console.log("Creando ventana de impresión | cerrando documento de la ventana...");
    win.document.close();

    setTimeout(function(){
        console.log("Creando ventana de impresión | imprimiendo documento de la ventana...");
        win.print();
    }, 500);

    win.onfocus = function (event) {
        setTimeout(function() {
            console.log("Creando ventana de impresión | cerrando la ventana...");
            win.close(); 
        }, 500); 
    }

}




// Interfaz (controles.)
// -----------------------------------------------------------------------------

let pathname = window.location.href;
pathname = pathname.split("/");
pathname = pathname[pathname.length-1].toLowerCase();
//console.log("Creando el botón imprimir...");

// Si nos encontramos en facturación o devolución.
// InventoryInvoice e InventoryInvoiceReturn
if (pathname.indexOf("inventoryinvoice") != -1) {

    //console.log("Creando botón imprimir... Condición Ok.");

    let img = document.createElement("img");
    img.src = chrome.runtime.getURL("images/print128.png");
    img.className = "btn-img";

    // let span = document.createElement("span");
    // span.innerHTML = "Imprimir con la extensión <b>Unolet</b>.";
    // span.className = "btn-text";
    
    let btn = document.createElement("a");
    //btn.title = "Imprimir con la extensión.";
    btn.onclick = onPrint;
    btn.setAttribute("id", "printPage");
    btn.className = "btn";
    //btn.setAttribute("style", "");
    btn.appendChild(img);
    
    let body = document.getElementsByTagName("body")[0];
    let div = document.createElement("div");
    div.appendChild(btn);
    //div.appendChild(span);
    body.appendChild(div);

    //console.log("Botón imprimir creado.");
}
