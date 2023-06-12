//Задание №2

const items = document.getElementById('items');
const keyName = 'currencies';
const loader = document.getElementById('loader');

const removeLoaderActive = () => loader.classList.remove('loader_active');

const getArrayItems = () => {
    const keyToParse = localStorage.getItem(keyName);
    return  keyToParse ? JSON.parse(keyToParse) : [];
}

const createCurrencyList = (currencies) => {
    currencies.forEach((currency) => creatItem(currency));
}

const creatItem = (element) => {
    const itemHTML = `
        <div class="item">
            <div class="item__code">${element.CharCode}</div>
            <div class="item__value">${element.Value}</div>
            <div class="item__currency">руб.</div>
        </div>
    `;

    const itemElement = new DOMParser().parseFromString(itemHTML, 'text/html').body.firstChild;
    items.appendChild(itemElement);

    return itemElement;
}

if (getArrayItems().length !== 0) {
    removeLoaderActive();
    const localCurrencies = getArrayItems();
    createCurrencyList(Object.values(localCurrencies.Valute));
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200 ) {
       removeLoaderActive();
       localStorage.clear();
       items.innerHTML = '';

       const data = JSON.parse(xhr.responseText).response;
       localStorage.setItem(keyName, JSON.stringify(data));
       createCurrencyList(Object.values(data.Valute));
    }
};

