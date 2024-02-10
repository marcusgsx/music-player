let musics = [
    {title: 'Dream It', artist: 'TrackTribe',  src:'musics/Dream It - TrackTribe.mp3', img:'img/pop-rock.jpg'},
    {title: 'Statement', artist: 'NEFFEX',  src:'musics/Statement - NEFFEX.mp3', img:'img/alternative.jpg'},
    {title: 'Flying', artist: 'TrackTribe',  src:'musics/Flying - Track Tribe.mp3', img:'img/pop.jpg'}
];


let music = document.querySelector('audio');
let indexMusic = 0;

let musicDuration = document.querySelector('.end');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');

renderMusic(indexMusic);



// Events
document.querySelector('.play-button').addEventListener('click', playMusic);

document.querySelector('.pause-button').addEventListener('click', pauseMusic);

music.addEventListener('timeupdate', updateBar)

document.querySelector('.previous').addEventListener('click',() => {
    indexMusic--;
    if(indexMusic <0){
        indexMusic = 2;
    }
    renderMusic(indexMusic);
});

document.querySelector('.next').addEventListener('click',() => {
    indexMusic++;
    if(indexMusic >2){
        indexMusic = 0;
    }
    renderMusic(indexMusic);
});
//Functions

function renderMusic(index){
music.setAttribute('src', musics[index].src);
music.addEventListener('loadeddata',()=> {
    musicName.textContent = musics[index].title;
    artistName.textContent = musics[index].artist;
    image.src = musics[index].img;
    musicDuration.textContent = secondsToMinutes(Math.floor (music.duration));

    });
}

function playMusic(){
    music.play();
    document.querySelector('.pause-button').style.display = 'block';
    document.querySelector('.play-button').style.display = 'none';
}
function pauseMusic(){
    music.pause();
    document.querySelector('.pause-button').style.display = 'none';
    document.querySelector('.play-button').style.display = 'block'
}

function updateBar(){
    let bar = document.querySelector('progress');
    bar.style.width =  Math.floor ((music.currentTime / music.duration)*100) + '%';
    let elapsedTime = document.querySelector('.start');
    elapsedTime.textContent = secondsToMinutes( Math.floor(music.currentTime));
}

function secondsToMinutes(seconds){
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if(secondsField < 10) {
        secondsField = '0' + secondsField;
    }

    return minutesField + ':' +secondsField;
}

