function verificarTerna() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);

    if (a * a + b * b === c * c) {
        document.getElementById('resultado').innerHTML = `A terna (${a}, ${b}, ${c}) é pitagórica.`;
    } else {
        document.getElementById('resultado').innerHTML = `A terna (${a}, ${b}, ${c}) não é pitagórica.`;
    }
}
