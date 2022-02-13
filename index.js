console.log("Welcome to spotify");
let songIndex=0;
let audioelement=new Audio('./Resources/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");

let songs=[
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"},
    {SongName:"Song 1", filePath:"./Resources/songs/1.mp3", covePath:"./Resources/covers/1.png"}
];


//audioElement.play
let audioElement=new Audio('./Resources/song1.mp3');

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
    //console.log(audioElement.currentTime);
    //console.log(audioElement.duration);
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
    //console.log(progress);
 
})