const nodemailer = require('nodemailer');

export function depositPaymentEmail (user, orderPay, subtotalLempiras, costoEnvioLempiras, totalLempiras, numeroPedido, numeroReferencia, items, tazaCambio, fecha, tienda, metodoEnvio, lugarEnvio){
    // Definimos el transporter
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rosydevelopers@gmail.com',
                pass: 'r0sydev.'
            }
        });
    // Definimos el email
    var mailOptions = {
        from: 'Remitente',
        to: user.correoElectronico,
        subject: 'Pedido #'+ numeroPedido +', Tiendas Rosy',
        html: '<p>Hola <strong>'+ user.nombres + ' ' + user.apellidos +'</strong></p>'+
        ''+
        '<p>Tu pedido está en espera hasta que confirmemos que se ha recibido el pago.</p>'+
        '<p>Una vez realizado el pago con depósito o transferencia bancaria, envíanos una foto del comprobante de pago <strong>(que se vea claramente el monto, la referencia y la fecha)</strong> a <strong>contabilidad@tiendasrosy.com</strong> o por Whatsapp al número <strong>9441-4022</strong> con tu <strong>Nombre Completo</strong>, <strong>Número de Identidad</strong>, <strong>Número de Pedido</strong> y <strong>Número de Referencia</strong>.</p>'+
        '<p>Tu pedido no se procesará hasta que confirmes el depósito.</p>'+
        ''+
        '<p><strong>Nota:</strong> Te pedimos que estes pendiente de tu celular ya que nuestro agente podria ponerse en contacto contigo</p>'+
        ''+
        '<h3 style="color:rgb(234, 117, 0);"><u>Nuestros Detalles Bancarios</u></h3>'+
        ''+
        '<h3>Inversiones CASTELL:</h3>'+
        '<li>Banco: <strong>BANPAIS</strong></li>'+
        '<li>Número de cuenta: <strong>01-299-001603-3</strong></li>'+
        ''+
        '<h3>Inversiones CASTELL:</h3>'+
        '<li>Banco: <strong>BAC CREDOMATIC</strong></li>'+
        '<li>Número de cuenta: <strong>722869481</strong></li>'+
        ''+
        '<h3>Inversiones CASTELL:</h3>'+
        '<li>Banco: <strong>BANCO ATLANTIDA</strong></li>'+
        '<li>Número de cuenta: <strong>20120056922</strong></li>'+
        ''+
        '<h3>Inversiones CASTELL:</h3>'+
        '<li>Banco: <strong>BANCO DE OCCIDENTE</strong></li>'+
        '<li>Número de cuenta: <strong>21-201-1049797</strong></li>'+
        ''+
        '<h3 style="color:rgb(234, 117, 0);"><u>Detalle del Pedido</u></h3>'+
        ''+
        '<table style="border: 1px solid black; border-collapse: collapse; width: 60%;">'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Fecha:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ fecha +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Orden de Pago:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ orderPay +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Número de Pedido:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ numeroPedido +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Número de Referencia:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ numeroReferencia +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Nombre Completo:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ user.nombres + ' ' + user.apellidos +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Número de Identidad:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ user.numeroIdentidad +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Teléfono Celular:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>'+ user.telefonoMovil +'</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Método de Pago:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>Depósito/Transferencia Bancaria</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">SubTotal:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>L. '+ subtotalLempiras +'.00</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Costo de Envío:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>L. '+ costoEnvioLempiras +'.00</strong></p></td>'+
        '    </tr>'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">Total:</p></td>'+
        '        <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;"><strong>L. '+ totalLempiras +'.00</strong></p></td>'+
        '    </tr>'+
        '</table>'+
        '<h3 style="color:rgb(234, 117, 0);"><u>Contenido del Pedido</u></h3>'+
        '<table style="border: 1px solid black; border-collapse: collapse; width: 100%;">'+
        '    <tr style="border: 1px solid black; border-collapse: collapse;">'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Tipo de Compra'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Nombre Producto'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Talla'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Cantidad'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Precio Unitario'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Subtotal'+
        '        </th>'+
        '        <th style="border: 1px solid black; border-collapse: collapse;">'+
        '            Lugar de Envio'+
        '        </th>'+
        '    </tr>'+
             listarItems(items, tazaCambio, metodoEnvio, tienda, lugarEnvio)+
        '</table>'     
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent");
        }
    });
};

function listarItems(items, tazaCambio, metodoEnvio, tienda, direccion) {
    var cadena = '';
    var direccionEnvio;
    var talla;
    for (let i = 0; i < items.length; i++) {
        cadena = cadena +
        '<tr style="border: 1px solid black; border-collapse: collapse;">'
        if (items[i].sucursal === 'HNCD01') {
            cadena = cadena + '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">MAYOREO</p></td>'
            direccionEnvio = tienda 
            talla = ''
        }
        if (items[i].sucursal === 'HNR036') {
            cadena = cadena + '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">DETALLE</p></td>' 
            if (metodoEnvio === 'tienda') {
                direccionEnvio = tienda
            }else{
                direccionEnvio = direccion
            }
            talla = items[i].talla
        }
        cadena = cadena +
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">'+ items[i].nombreProducto +'</p></td>'+
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">'+ talla +'</p></td>'+
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">'+ items[i].cantidadCarritoCompra +'</p></td>'+
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">L. '+ formatoMoneda(Math.round(tazaCambio * items[i].precioVenta)) +'.00</p></td>'+
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">L. '+ formatoMoneda(Math.round(tazaCambio * items[i].precioVenta * items[i].cantidadCarritoCompra)) +'.00</p></td>'+
        '   <td style="border: 1px solid black; border-collapse: collapse;"><p style="margin-left: 5px;">'+ direccionEnvio +'</p></td>'+
        '</tr>'
    }
    return cadena;
}

function formatoMoneda(number) {
    var number1 = number.toString(), result = '', estado = true;
    if (parseInt(number1) < 0) {
        estado = false;
        number1 = parseInt(number1) * -1;
        number1 = number1.toString();
    }
    if (number1.indexOf(',') == -1) {
        while (number1.length > 3) {
            result = ',' + '' + number1.substr(number1.length - 3) + '' + result;
            number1 = number1.substring(0, number1.length - 3);
        }
        result = number1 + result;
        if (estado == false) {
            result = '-' + result;
        }
    }
    else {
        var pos = number1.indexOf(',');
        var numberInt = number1.substring(0, pos);
        var numberDec = number1.substring(pos, number1.length);
        while (numberInt.length > 3) {
            result = ',' + '' + numberInt.substr(numberInt.length - 3) + '' + result;
            numberInt = numberInt.substring(0, numberInt.length - 3);
        }
        result = numberInt + result + numberDec;
        if (estado == false) {
            result = '-' + result;
        }
    }
    return result;
}
