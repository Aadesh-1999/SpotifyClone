console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('./Resources/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songInfo=document.getElementsByClassName("songInfo")[0].getElementsByTagName("h3")[0];

let songs=[
    {SongName:"Airanichya Deva Tula...", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 2", filePath:"./Resources/songs/2.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 3", filePath:"./Resources/songs/3.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 4", filePath:"./Resources/songs/4.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 5", filePath:"./Resources/songs/5.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 6", filePath:"./Resources/songs/6.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 7", filePath:"./Resources/songs/7.wav", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 8", filePath:"./Resources/songs/8.wav", covePath:"./Resources/covers/1.png"}
];

let songsPlayBtns=document.getElementsByClassName("songPlayBtn");
console.log(songsPlayBtns);

Array.from(songsPlayBtns).forEach((songPlayBtn,index) => {
    songPlayBtn.addEventListener('click',()=>{
        audioElement.pause();
        masterPlay.className="fa-solid fa-3x fa-circle-play";
        gif.style.opacity=0;
        audioElement=new Audio(songs[index].filePath);
        audioElement.play();
        masterPlay.className="fa-solid fa-3x fa-circle-pause";
        gif.style.opacity=1;
        songInfo.innerText=songs[index].SongName;
    })
});

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.className="fa-solid fa-3x fa-circle-pause";
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.className="fa-solid fa-3x fa-circle-play";
        gif.style.opacity=0;
    }
})
let progress=0;
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeUpdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})