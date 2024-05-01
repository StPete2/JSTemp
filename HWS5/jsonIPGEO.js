const ipAddress = '178.67.141.12';
fetch(`https://ipinfo.io/${ipAddress}/geo`)
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((parseRes) => {
        const divEl = document.querySelector('div.container');
        const headingEl = document.createElement('h2');
        headingEl.innerHTML = 'Добро пожаловать на сайт по проверке Вашего IP';
        divEl.appendChild(headingEl);
        const ipEl = document.createElement('p');
        ipEl.innerHTML = "Указанный IP в программе: " + ipAddress;
        divEl.appendChild(ipEl);
        const cityEl = document.createElement('p');
        cityEl.innerHTML = `Город: ${parseRes.city}`;
        const countryEl = document.createElement('p');
        countryEl.innerHTML = `Страна: ${parseRes.country}`;
        const locationEl = document.createElement('p');
        locationEl.innerHTML = `Координаты: ${parseRes.loc}`;
        const providerEl = document.createElement('p');
        providerEl.innerHTML = `Провайдер ${parseRes.org}`;
        divEl.appendChild(cityEl);
        divEl.appendChild(countryEl);
        divEl.appendChild(locationEl);
        divEl.appendChild(providerEl);
    })
