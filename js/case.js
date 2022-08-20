function getCaseNumber(isIncreased) {
    const caseNumberElement = document.getElementById('case-number');
    const caseNumberString = caseNumberElement.value;
    const caseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncreased === true) {
        newCaseNumber = caseNumber + 1;
    } else {
        newCaseNumber = caseNumber - 1;
    }
    caseNumberElement.value = newCaseNumber;
    return newCaseNumber;

}

function updateCasePrice(newCaseNumber) {
    const newCasePrice = newCaseNumber * 59;
    const newCaseElement = document.getElementById('case-total');
    newCaseElement.innerText = newCasePrice;
}
function getTotalPriceById(elementId) {
    const caseTotalElement = document.getElementById(elementId);
    const caseTotalString = caseTotalElement.innerText;
    const caseTotal = parseFloat(caseTotalString);
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

    //calculate tax
    const taxAmountString = (priceTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setValue('tax-total', taxAmount);

}

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = getCaseNumber(true);
    updateCasePrice(newCaseNumber);

    subTotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = getCaseNumber(false);
    updateCasePrice(newCaseNumber);

    subTotal();
})