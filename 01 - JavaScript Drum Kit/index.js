
document.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const note = document.querySelector(`.key[data-key="${e.code}"]`)
    if (!audio) return;
    audio.currentTime = 0 ;
    audio.play()
    note.classList.toggle("playing")
});

function removeTransition(e){
    if ( e.propertyName !== 'transform') return;
    this.classList.remove("playing")
} 

const keys = document.querySelectorAll(".keys")
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

console.clear()