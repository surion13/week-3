let saldo = 0;

function actualizarSaldo() {

    document.getElementById("saldo").textContent =
        "$" + saldo.toFixed(2);
}

function mostrarMensaje(texto, color) {

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = texto;

    mensaje.className =
        `mt-6 text-center font-semibold ${color}`;
}

function depositar() {

    let monto =
        parseFloat(document.getElementById("monto").value);

    if (monto > 0) {

        saldo += monto;

        actualizarSaldo();

        mostrarMensaje(
            "✅ Depósito realizado correctamente",
            "text-green-600"
        );

    } else {

        mostrarMensaje(
            "⚠️ Ingrese un monto válido",
            "text-yellow-600"
        );
    }
}

function retirar() {

    let monto =
        parseFloat(document.getElementById("monto").value);

    if (monto <= 0 || isNaN(monto)) {

        mostrarMensaje(
            "⚠️ Ingrese un monto válido",
            "text-yellow-600"
        );

    } else if (monto > saldo) {

        mostrarMensaje(
            "❌ Saldo insuficiente",
            "text-red-600"
        );

    } else {

        saldo -= monto;

        actualizarSaldo();

        mostrarMensaje(
            "💸 Retiro realizado correctamente",
            "text-blue-600"
        );
    }
}

function consultarSaldo() {

    mostrarMensaje(
        `💰 Su saldo actual es: $${saldo.toFixed(2)}`,
        "text-slate-700"
    );
}