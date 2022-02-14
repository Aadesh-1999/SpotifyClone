console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('./Resources/songs/1.mp3');
audioElement.currentTime=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
myProgressBar.value=0;
let gif=document.getElementById("gif");
let songInfo=document.getElementsByClassName("songInfo")[0].getElementsByTagName("h3")[0];
let progress=0;
let searchSong=document.getElementById("searchSong");

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

//MarkAllPlay
function MarkAllPlay(){
    Array.from(songsPlayBtns).forEach((songPlayBtn,index)=>{
        songPlayBtn.classList.remove("fa-circle-pause");
        songPlayBtn.classList.add("fa-circle-play");
    })
}

//AllPlayPause
Array.from(songsPlayBtns).forEach((songPlayBtn,index)=>{
    songPlayBtn.addEventListener('click',(e)=>{
    songInfo.innerHTML=songs[index].SongName;
    if(Array.from(e.target.classList).includes("fa-circle-play"))
    {   
        if(audioElement.paused || audioElement.currentTime<=0)
        {
            console.log(audioElement.src.substring(audioElement.src.length-songs[index].filePath.length+1));
            console.log(songs[index].filePath.substring(1));
            if(audioElement.src.substring(audioElement.src.length-songs[index].filePath.length+1)!=songs[index].filePath.substring(1))
            {audioElement.src=songs[index].filePath;}
            masterPlay.click();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
        }
        else{
            MarkAllPlay();
            audioElement.src=songs[index].filePath;
            audioElement.currentTime=0;
            masterPlay.click();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
        }
    }
    else{
        masterPlay.click();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
    }
   })
})


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

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeUpdate");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    if(audioElement.ended)
    {   audioElement.pause();
        MarkAllPlay();
        masterPlay.className="fa-solid fa-3x fa-circle-play";
        gif.style.opacity=0;
        audioElement.currentTime=0;
    }
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

//searchBar Logic
// searchSong=