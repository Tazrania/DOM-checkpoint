const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const quantityInputs = document.querySelectorAll('input[type="text"]');
const heartButtons = document.querySelectorAll('.heart');

minusButtons.forEach((button, index) => {
button.addEventListener('click', () => {
    if (quantityInputs[index].value > 1) {
    quantityInputs[index].value--;
    updateTotalPrice();
    }
});
});

plusButtons.forEach((button, index) => {
button.addEventListener('click', () => {
    quantityInputs[index].value++;
    updateTotalPrice();
});
});

heartButtons.forEach((button) => {
button.addEventListener('click', () => {
    button.classList.toggle('liked');
});
});

const deleteButtons = document.querySelectorAll('.delete');

deleteButtons.forEach((button) => {
button.addEventListener('click', () => {
    const item = button.parentNode.parentNode;
    item.remove();
    updateTotalPrice();
});
});

function updateTotalPrice() {
const quantityValues = Array.from(quantityInputs).map((input) => Number(input.value));
const itemPrices = [100, 150, 170];
  const totalPrice = quantityValues.reduce((total, quantity, index) => total + quantity * itemPrices[index], 0); document.getElementById('total-price').textContent = totalPrice.toFixed(3);
}