const ipAddress = '178.67.141.12';
fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((parseRes) => {
        console.log(parseRes);
        const divEl = document.querySelector('div.container');
        const headingEl = document.createElement('h2');
        headingEl.innerHTML = "Добро пожаловать на сайт по проверке NASA API";
        divEl.appendChild(headingEl);
        headingEl.classList.add('heading');
        const imgEl = document.createElement('img');
        imgEl.src = parseRes.url;
        divEl.appendChild(imgEl);
        imgEl.classList.add('img');
        const photoTitleEl = document.createElement('p');
        photoTitleEl.innerHTML = "Название фотографии: " + parseRes.title;
        photoTitleEl.classList.add('text');

        const authorEl = document.createElement('p');
        authorEl.innerHTML = "Права на фотографию принадлежат " + parseRes.copyright;
        authorEl.classList.add('text');
        divEl.appendChild(photoTitleEl);
        divEl.appendChild(authorEl);
    });

