function calcularHematocrito() {
    const eritrocitos = parseFloat(document.getElementById('eritrocitos').value);
    const volumeTotal = parseFloat(document.getElementById('volume-total').value);
    const resultadoElement = document.getElementById('resultado');

    if (!isNaN(eritrocitos) && !isNaN(volumeTotal)) {
        const hematocrito = (eritrocitos / volumeTotal) * 100;
        resultadoElement.textContent = `Hematócrito: ${hematocrito.toFixed(2)}%`;
    } else {
        resultadoElement.textContent = 'Por favor, insira valores válidos.';
    }
}
