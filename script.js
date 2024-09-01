const unitInput = document.getElementById('unit');
const priceInput = document.getElementById('price');
const pricePerUnitInput = document.getElementById('pricePerUnit');
const quantityInput = document.getElementById('quantity');
const totalPriceInput = document.getElementById('totalPrice');

function calculatePricePerUnit() {
    const unit = parseFloat(unitInput.value);
    const price = parseFloat(priceInput.value);

    if (unit > 0 && price >= 0) {
        const pricePerUnit = price / unit;
        pricePerUnitInput.value = pricePerUnit.toFixed(2);
    } else {
        pricePerUnitInput.value = '';
    }
}

function calculateTotalPrice() {
    const pricePerUnit = parseFloat(pricePerUnitInput.value);
    const quantity = parseFloat(quantityInput.value);

    if (pricePerUnit >= 0 && quantity >= 0) {
        const totalPrice = pricePerUnit * quantity;
        totalPriceInput.value = totalPrice.toFixed(2);
    } else {
        totalPriceInput.value = '';
    }
}

unitInput.addEventListener('input', () => {
    calculatePricePerUnit();
    calculateTotalPrice();
});

priceInput.addEventListener('input', () => {
    calculatePricePerUnit();
    calculateTotalPrice();
});

quantityInput.addEventListener('input', calculateTotalPrice);