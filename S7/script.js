const containerEl = document.querySelector('div.container');
const videoEl = document.createElement('video');

videoEl.src = "./img/video_2024-05-06_10-50-44.mp4";
videoEl.width = '640';
videoEl.height = '480';
videoEl.setAttribute('loop', 'true');
containerEl.appendChild(videoEl);
const brEl = document.createElement('br');
// containerEl.appendChild(brEl.cloneNode());

const playEl = document.createElement('div');
playEl.classList.add('play');
const pauseEl = document.createElement('div');
pauseEl.classList.add('pause');

const divButtons = document.createElement('div');
containerEl.appendChild(divButtons);
divButtons.classList.add('container__buttons');

playEl.addEventListener('click', function (e) {
    videoEl.play();
    console.log(videoEl.duration, videoEl.currentTime);
});

pauseEl.addEventListener('click', function (e) {
    videoEl.pause();
})

const controlsDiv = document.createElement('div');
controlsDiv.classList.add('container__controls');
const volumeControlsDiv = document.createElement('div');
const videoScrollDiv = document.createElement('div');
const playBackTimeDiv = document.createElement('div');

const inputEl = document.createElement('input');
inputEl.setAttribute('type', 'range');
inputEl.setAttribute('value', '0');
inputEl.setAttribute('min', '0');
inputEl.setAttribute('max', '100');
inputEl.setAttribute('id', 'video');

const spacesEl = document.createElement('span');
spacesEl.innerHTML = '&emsp;';
const spacesEl2 = document.createElement('span');
spacesEl2.innerHTML = '&emsp;&emsp;&emsp;';

const videoDurationLabel = document.createElement('label');
videoDurationLabel.setAttribute('for', 'video');
videoDurationLabel.innerHTML = 'Полоса прокрутки:';

inputEl.addEventListener('change', function (e) {
    console.log(e.target.value);
    videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

videoEl.addEventListener('timeupdate', function (e) {
    inputEl.setAttribute('value', Math.round((videoEl.currentTime / videoEl.duration) * 100));
});

const volumeEl = document.createElement('input');
volumeEl.setAttribute('type', 'range');
volumeEl.setAttribute('id', 'volume');
volumeEl.setAttribute('min', '0');
volumeEl.setAttribute('max', '100');
volumeEl.setAttribute('value', '0');

const volumeLabel = document.createElement('label');
volumeLabel.setAttribute('for', 'volume');
volumeLabel.innerHTML = 'Регулировка громкости:';

videoEl.addEventListener('loadeddata', function (e) {
    volumeEl.setAttribute('value', videoEl.volume * 100);
});

volumeEl.addEventListener('change', function (e) {
    videoEl.volume = e.target.value / 100;
});

divButtons.appendChild(playEl);
divButtons.appendChild(pauseEl);

volumeControlsDiv.appendChild(volumeLabel);
volumeControlsDiv.appendChild(spacesEl);
volumeControlsDiv.appendChild(volumeEl);
videoScrollDiv.appendChild(videoDurationLabel);
videoDurationLabel.append(spacesEl2);
videoScrollDiv.appendChild(inputEl);
controlsDiv.appendChild(volumeControlsDiv);
controlsDiv.appendChild(videoScrollDiv);
controlsDiv.appendChild(playBackTimeDiv);
containerEl.appendChild(controlsDiv);