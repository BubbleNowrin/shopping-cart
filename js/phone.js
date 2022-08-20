function getPhoneNumber(isIncreased) {
    const phoneNumberElement = document.getElementById('phone-number');
    const phoneNumberString = phoneNumberElement.value;
    const phoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncreased === true) {
        newPhoneNumber = phoneNumber + 1;
    } else {
        newPhoneNumber = phoneNumber - 1;
    }
    phoneNumberElement.value = newPhoneNumber;
    return newPhoneNumber;

}

function updatePhonePrice(newPhoneNumber) {
    const newPhonePrice = newPhoneNumber * 1219;
    const newPhoneElement = document.getElementById('phone-total');
    newPhoneElement.innerText = newPhonePrice;
}

function getTextElementValueById(elementId) {
    const phonePriceElement = document.getElementById(elementId);
    const phonePriceString = phonePriceElement.innerText;
    const phonePrice = parseInt(phonePriceString);
    return phonePrice;
}

function setValue(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function subTotal() {
    //calculate totalprice

    const phonePrice = getTextElementValueById('phone-total');
    const casePrice = getTextElementValueById('case-total');
    const priceTotal = casePrice + phonePrice;
    setValue('sub-total', priceTotal);

    // calculate tax
    const taxAmountString = (priceTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setValue('tax-total', taxAmount);

    //calculate total
    const total = priceTotal + taxAmount;
    setValue('total', total);

}

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneNumber = getPhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    subTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhoneNumber = getPhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    subTotal();
})