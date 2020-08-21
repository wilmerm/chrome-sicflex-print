

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


let empresa = {
    nombre: "REFRICENTRO RUBIERA SRL",
    direccion: "Av. 27 de Febrero No. 438, Distrito Nacional",
    rnc: "101-82473-5",
    email: "info@rubiera.com.do",
    web: "rubiera.com.do",
    logo: "http://rubiera.com.do/wp-content/uploads/2017/11/rubiera.png",
    almacenes: {
        a_01: {
            nombre: "Suc. Tunti Cáceres",
            direccion: "Calle Tunti Caceres #167, Villa juana",
            telefono: "809-685-4545"
        },
        a_02: {
            nombre: "Suc. 27 de Febrero",
            direccion: "Av. 27 de Febrero No. 438, Distrito Nacional",
            telefono: "809-537-4545"
        },
        a_03: {
            nombre: "Suc. Santiago",
            direccion: "Av. 27 de Febrero No. 31, Santiago",
            telefono: "809-583-2110"
        },
        a_04: {
            nombre: "Suc. Bávaro",
            direccion: "Km 7, Carretera Verón-Bávaro",
            telefono: "809-468-1498"
        }
    }
}


function update() {
    logo = document.getElementsByClassName("sic-header-org-logo")[0];
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
    decimal_separator = document.getElementById("__locale_decimal_separator").value; 
    grouping_separator = document.getElementById("__locale_grouping_separator").value;
}


var html = '<html><head><title>Factura Sicflex | By Wilmer Martínez</title><style>body {font-size: 16px;font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;}#header {width: 100%}#header th {text-align: right;}#header-left {width: 50%;padding-top: 0px;}#header-right {width: auto}h1 {font-size: 26px;margin: 0px;padding: 0px;font-style: normal;font-weight: bold;}#logo {width: 128px}#items {border-collapse: collapse;font-size: 14px;}#items td {border: 1px solid gray}#items th {text-align: center;border: 1px solid gray;background-color: #eee;}hr {border: none;border-top: 1px solid gray;}</style></head><body><div id="app" class="container-fluid"><table id="header"><tr><td id="header-left"><h1 id="empresa">UNOLET</h1><div id="direccion" style="font-style: italic;">Dirección de la empresa.</div><div id="rnc">RNC: 001-00000-1</div><div id="telefono">Tel.: 809-000-0000</div><div id="email">Email: info@unolet.com</div><div id="web">blog.unolet.com</div></td><td id="header-right"><table><tr><td colspan="2" id="titulo" style="font-size: 20px;">FACTURA A CONTADO</td></tr><tr><th>Almacén: </th><td id="almacen">Suc. Principal</td></tr><tr><th>Número: </th><td id="numero">000000000000</td></tr><tr><th>Fecha: </th><td id="fecha">01-01-2020</td></tr><tr><th>Vendedor: </th><td id="vendedor">Juan Pérez</td></tr><tr><th>Condición: </th><td id="condicion">A Contado</td></tr></table></td></tr><tr><td id="header-left-2"><table><tr><th>Cliente: </th><td id="cliente">Juana Pérez</td></tr><tr><th>Contacto: </th><td id="cliente_contacto">809-000-0001</td></tr></table></td><td id="header-right-2"><table><tr><th>NCF: </th><td id="ncf">B010000000001</td></tr><tr><th>NIF: </th><td id="nif">0123456789876543210</td></tr></table></td></tr></table><hr><table id="items" style="width: 100%"><thead><tr id="keys"></tr></thead><tbody id="values"></tbody></table><!-- Totales --><table style="width: 100%;"><tr><td id="nota" style="width: 65%; font-style: italic; font-size: 14px; padding-right: 5px;"></td><td><table style="text-align: right; width: 100%"><tr><th>Subtotal: </th><td id="subtotal"></td></tr><tr><th>Descuento: </th><td id="descuento"></td></tr><tr><th>Itbis: </th><td id="itbis"></td></tr><tr><th>Total: </th><td id="total" style="font-weight: bold; font-size: 18px;"></td></tr></table></td></tr></table></div><footer style="position: fixed; bottom: 10px; width: 100%;"><table style="width: 100%;"><tr><td style="border: none; border-top: 1px solid black; text-align: center;">Revisado por</td><td style="border: none; padding: 5px"></td><td style="border: none; border-top: 1px solid black; text-align: center;">Despachado por</td><td style="border: none; padding: 5px"></td><td style="border: none; border-top: 1px solid black; text-align: center;">Recibido por</td></tr></table></footer></body></html>';

// Con este id base Sicflex identifica los encabezados de la tabla de movimientos.
// Pero el texto se encuentra en un tag "a" dentro de muchos otros.
var base_items_id = 'ox_jSicflexWebApp_InventoryInvoice__xava_collectionTab_imatrs_'; // agregamos el indice de la columna al final col0, col1


function get(element, method="value") {
    try {
        if (method == "value") {return element.value}
        if (method == "select") {return element.options[element.selectedIndex].text}
        if (method == "src") {return element.src}
        if (method == "href") {return element.href}
        if (method == "innerHTML") {return element.innerHTML}
        if (method == "innerText") {return element.innerText}
    } catch (error) {return ""}
}


function getAlmacen(element) {
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
    if (decimal_separator == ",") {
        value.replace(/./g, "");
        value.replace(",", ".");
    } else {

        value = value.replace(/,/g, "");
    }
    return parseFloat(value);
}


function Int(value) {
    if (decimal_separator == ",") {
        value.replace(/./g, "");
        value.replace(",", ".");
    } else {

        value = value.replace(/,/g, "");
    }
    return parseInt(value);
}


function parseValue(value, typee) {
    // Convierte al tipo indicado en typee según sea entero, decimal, texto...
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

    let names = [];

    for (i=0; i<properties.length; i++) {
        var prop = properties[i];
        var th = document.querySelectorAll("[data-property='" + prop.prop + "']")[0];
        names.push({prop: prop, element: th, index: th.cellIndex})
    }
    return names;
}


function setItems(doc) {
    let names = getItemsFields();
    let keys = doc.getElementById("keys");
    let values = doc.getElementById("values");
    
    // totales.
    let descuento = 0;
    let itbis = 0;
    let bruto = 0;
    let neto = 0;

    // Añadimos los nombres de columnas.
    for (i=0; i<names.length; i++) {
        let e = names[i];
        let th = doc.createElement("th");
        th.innerText = e.prop.name;
        th.style = e.prop.style;
        th.id = "item-" + e.index;
        keys.appendChild(th);
    }

    // Añadimos los valores.
    for (i=0; i<100; i++) {
        id = base_items_id + i;
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
            let value = tds[e.index].innerText;
            let newCell = doc.createElement("td");

            value = parseValue(value, e.prop.typee);

            // Totales.
            let v = Float(value);
            if (e.prop.prop == "ventaBruto") {
                bruto += v;
            }
            if (e.prop.prop == "ventaDescuento") {
                descuento += v;
            }
            if (e.prop.prop == "ventaItbis") {
                itbis += v;
            }
            if (e.prop.prop == "ventaNeto") {
                neto += v;
            }

            newCell.innerText = value;
            newCell.style = e.prop.style;

            newRow.appendChild(newCell);
        }
        // Cada iteración establece una fila más de item.
        values.appendChild(newRow);
    }

    // Al finalizar el registro de items, ponemos los totales generados.
    // Siflex no identifica de manera individual los totales en su página,
    // por lo que fue necesario realizar la suma en la iteración.
    neto += 0.000000001;
    doc.getElementById("subtotal").innerText = parseFloat(bruto.toFixed(2)).toLocaleString();
    doc.getElementById("descuento").innerText = parseFloat(descuento.toFixed(2)).toLocaleString();
    doc.getElementById("itbis").innerText = parseFloat(itbis.toFixed(2)).toLocaleString();
    doc.getElementById("total").innerText = parseFloat(neto.toFixed(2)).toLocaleString();
}


function printPagina(intentos=0) {
    // Extraemos los datos de la página.
    update();

    if (decimal_separator != ".") {
        let sino = confirm("La configuración regional de Sicflex no es la aducuada para el formato númerico utilizado en República Dominicana. Al hacer click en 'Aceptar' se cambiará la configuración regional ideal para República Dominicana, con los decimales separados por punto y no por coma. También podrá hacerlo usted mismo dando click a la banderita dominicana que aparece en la parte superior de la página.");
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
        
        let sino = confirm("Antes de reeimprimir una factura en este formato, dicha factura debió antes ser impresa por la impresora fiscal \n\n¿Desea imprimir ahora por la impresora fiscal?");
        if (sino == true) {
            // Este código es propio del sitio donde se ejecutará esta extensión.Al igual que otros más 'openxava'.
            location.href = "javascript:openxava.executeAction('jSicflexWebApp', 'InventoryInvoice', '', false, 'InventoryInterfacedController.generateDetailPdf')";
        } 
        return;
    }


    try {
        let win = window.open();
        win.document.write(html);
        //win.document.getElementById("logo").src = get(logo, "src");
        win.document.getElementById("empresa").innerText = empresa.nombre;
        win.document.getElementById("rnc").innerText = "RNC: " + empresa.rnc;
        win.document.getElementById("direccion").innerText = getAlmacen(almacen_id).direccion;
        win.document.getElementById("telefono").innerText = "Tel.: " + getAlmacen(almacen_id).telefono;
        win.document.getElementById("email").innerText = "Email: " + empresa.email;
        win.document.getElementById("web").innerText = empresa.web;
        win.document.getElementById("titulo").innerText = "FACTURA A " + get(pedido, "select").toUpperCase(); 
        win.document.getElementById("almacen").innerText = get(almacen_name);
        win.document.getElementById("numero").innerText = get(documento_id) + "-" + get(numero);
        win.document.getElementById("fecha").innerText = get(fecha);
        win.document.getElementById("vendedor").innerText = get(vendedor_name);
        win.document.getElementById("condicion").innerText = get(condicion, "select");
        win.document.getElementById("cliente").innerText = "[" + get(cliente_id) + "] " + get(cliente_name);
        win.document.getElementById("cliente_contacto").innerText = get(cliente_contacto);
        win.document.getElementById("ncf").innerText = get(ncf);
        win.document.getElementById("nif").innerText = get(nif);
        win.document.getElementById("nota").innerText = get(nota);
        setItems(win.document);
        win.document.close();
        win.print();
        win.close();
    } catch (error) {
        alert("No fue posible extraer los datos de la factura. " + error);
    }
}

