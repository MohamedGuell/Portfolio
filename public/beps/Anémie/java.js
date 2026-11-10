let video = document.getElementById('myVideo');
video.addEventListener('mouseover', function() {
    video.play();
});

video.addEventListener('mouseout', ()=>{
video.pause();

});

let marche = document.getElementById('marche');
marche.addEventListener('mouseover', function() {
    marche.play();
});

marche.addEventListener('mouseout', ()=>{
 marche.pause();

});