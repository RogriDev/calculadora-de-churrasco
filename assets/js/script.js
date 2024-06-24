document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const men = parseInt(document.getElementById('men').value);
    const women = parseInt(document.getElementById('women').value);
    const children = parseInt(document.getElementById('children').value);

    const totalBeef = (men * 500 + women * 300 + children * 200) / 1000;
    const totalChicken = (men * 200 + women * 200 + children * 100) / 1000;
    const totalSausage = (men * 200 + women * 200 + children * 200) / 1000;
    const totalSoda = (men * 300 + women * 400 + children * 200) / 1000;
    const totalBeer = (men * 800 + women * 500) / 1000;

    const result = document.getElementById('result');
    result.innerHTML = `
        <li>${totalBeef.toFixed(2)} kg de carne bovina</li>
        <li>${totalChicken.toFixed(2)} kg de frango</li>
        <li>${totalSausage.toFixed(2)} kg de linguiça</li>
        <li>${totalSoda.toFixed(2)} litros de refrigerante</li>
        <li>${totalBeer.toFixed(2)} litros de cerveja</li>
    `;

    document.getElementById('infos').classList.remove('hidden');
});