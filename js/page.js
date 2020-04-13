// Logic for the control and use of the web page

import currencyData from '../data/currency.js';

export default {
    addWidget: addWidget,
    loadData: loadData,
    getSelectedWidgets: getSelectedWidgets,
}

function getSelectedWidgets() {
    const widgetPreview = document.getElementsByClassName('touchbar-element widget');
    let widgets = [];

    // HTMLCollection to the Array elements.
    [].forEach.call(widgetPreview, (widget) => {
        widgets.push(widget);
    });
    return widgets;
}

function clearWidgets() {
    const widgets = document.getElementsByClassName('widget');
    while (widgets.firstChild) {
        widgets.removeChild(widgets.firstChild);
    }
}

function getElementData(elementId) {
    const dropdown = document.getElementById(elementId);
    const data = {
        ticker: dropdown.options[dropdown.selectedIndex].dataset.ticker,
        symbol: dropdown.options[dropdown.selectedIndex].dataset.symbol
    };
    return data;
}

function addWidget() {
    const baseData = getElementData('baseCurrency'),
        convertData = getElementData('convertedCurrency'),
        currencyWidget = document.createElement('div'),
        text = document.createElement('span'),
        touchArea = document.getElementById('touchbar-area');

    currencyWidget.setAttribute('id', `${baseData.ticker}-${convertData.ticker}-touch`);
    currencyWidget.className = 'touchbar-element widget';
    currencyWidget.dataset.baseTicker = baseData.ticker;
    currencyWidget.dataset.convertTicker = convertData.ticker;
    currencyWidget.dataset.baseSymbol = baseData.symbol;
    currencyWidget.dataset.convertSymbol = convertData.symbol;

    touchArea.appendChild(currencyWidget);

    text.innerHTML = `${baseData.symbol}1 = ${convertData.symbol}0.00`;
    currencyWidget.appendChild(text);
}

function loadData() {

    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        addWidget();
    });

    const baseList = document.getElementById('baseCurrency');
    const convertedList = document.getElementById('convertedCurrency');
    const currencyList = document.createDocumentFragment();
    new currencyData.data().forEach((currency) => {
        let option = document.createElement('option');
        option.value = currency.ticker;
        option.innerHTML = currency.name;
        option.dataset.ticker = currency.ticker;
        option.dataset.symbol = currency.symbol
        currencyList.appendChild(option);
    });

    baseList.appendChild(currencyList.cloneNode(true));
    convertedList.appendChild(currencyList.cloneNode(true));
}
