'use strict'

let songIndex= 1;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let songItem = document.querySelectorAll('.songItem');
let masterPlayId = document.querySelector('#masterPlayId');

let songs = [
    {songName: "Let me love you", filePath:"./songs/1.mp3", coverPath:"./covers/1.jpg"},
    {songName: "cielo-huma-huma", filePath:"./songs/2.mp3", coverPath:"./covers/2.jpg"},
    {songName: "Third song", filePath:"./songs/3.mp3", coverPath:"./covers/3.jpg"},
    {songName: "Forth SOng", filePath:"./songs/4.mp3", coverPath:"./covers/4.jpg"},
    {songName: "fifth song", filePath:"./songs/5.mp3", coverPath:"./covers/5.jpg"},
    {songName: "sixth song", filePath:"./songs/6.mp3", coverPath:"./covers/6.jpg"},
    {songName: "seventh song", filePath:"./songs/7.mp3", coverPath:"./covers/7.jpg"},
    {songName: "Eighth Song", filePath:"./songs/8.mp3", coverPath:"./covers/8.jpg"},
    {songName: "Ninth Song", filePath:"./songs/9.mp3", coverPath:"./covers/9.jpg"},
    {songName: "Tenth Song", filePath:"./songs/10.mp3", coverPath:"./covers/10.jpg"},
];

masterPlay.addEventListener('click', function(){
    
    if(audioElement.paused )
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');
        
        document.getElementById('gif').style.opacity =1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');
        document.getElementById('gif').style.opacity =0;
    }
    
})

audioElement.addEventListener('timeupdate', ()=>{
   
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   
    myProgressBar.value= progress;
});


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});




songItem.forEach(function(ele,i){
     ele.getElementsByTagName('img')[0].src= songs[i].coverPath;
     ele.getElementsByClassName('songName')[0].textContent =  songs[i].songName;

})


const songPlay = document.querySelectorAll('.songPlay');

const makeAllPlays = function(){
    songPlay.forEach(function(element){
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
        
}



songPlay.forEach(function(element){

    element.addEventListener('click',function(e){ 

     

      if(songIndex == e.target.id && !audioElement.paused)
      {
        audioElement.pause();  
        makeAllPlays();   
      }
       else{
        makeAllPlays();
         element.classList.remove('fa-play-circle');
         element.classList.add('fa-pause-circle');
         songIndex = parseInt(e.target.id);
         masterPlayId.textContent = songs[songIndex-1].songName;
         audioElement.src=`./songs/${songIndex}.mp3`;
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         }
        })
      
    })



document.getElementById('next').addEventListener('click',function(){
    if(songIndex >= songs.length ){
        songIndex=1;
    }
    else{
        songIndex= songIndex+1;
    }
    audioElement.src=`./songs/${songIndex}.mp3`;
    masterPlayId.textContent = songs[songIndex-1].songName;
    
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle')
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',function(){
    if(songIndex <= 1 ){
        songIndex= parseInt(songs.length);
    }
    else{
        songIndex= songIndex-1;
    }
    audioElement.src=`./songs/${songIndex}.mp3`;
    masterPlayId.textContent = songs[songIndex-1].songName;
    makeAllPlays();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle')
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})




// songPlay.forEach(function(element){
    
//     element.addEventListener('click',function(e){

//         songIndex = parseInt(e.target.id); 
//         console.log(songIndex)
//         if(audioElement.paused ){
        
//         makeAllPlays();
        
        
        
//         audioElement.src=`./songs/${songIndex}.mp3`;
       
//         audioElement.play();
//         element.classList.remove('fa-play-circle');
//         element.classList.add('fa-pause-circle');
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         document.getElementById('gif').style.opacity =1;
//         }
//         else{
        
//         audioElement.pause();
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');  
//         document.getElementById('gif').style.opacity =0;    
//         }
      
//     })
// })

// document.getElementById('previous').addEventListener('click',function(){
 
//     if(songIndex>0){
//         songIndex= songIndex-1;
//         console.log(songIndex);
//         audioElement.src=`./songs/${songIndex}.mp3`;
//         audioElement.play();


//     }
// })


// if(audioElement.src== cursrc){
//     audioElement.pause();
//     cursrc= null;           
//  }