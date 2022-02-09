
function removeTransition(m) {
    if (m.propertyName !== 'box-shadow') return;
    m.target.classList.remove('playing');
  }
function playSound(m) {
    const audio = document.querySelector(`audio[data-key="${m.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${m.keyCode}"]`);
    if (!audio) return;

    key.addEventListener("click",(playSound))
    m.target.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', (playSound));
  window.addEventListener('keyup',(removeTransition))

  // function removeTransiton(p) {
  //   if (p.propertyName!=='transform') {
  //     p.target.classList.remove('playing')
  //   }
  // }
  // function playsound(p) {
  //   const keys=document.querySelectorAll(`div[data-key="${p.keysCode}"]`)
  //   const audio=document.querySelectorAll(`audio[data-key="${p.keysCode}"]`)
  //   if (!audio) return
  //   keys.addEventListener("click",playsound(p))
  //   p.target.classList.add('playing')
  //   audio.currentTime=0;
  //   audio.play()
  
  // }
  // const key=Array.from(document.querySelectorAll('.key'));
  // key.forEach(keys => keys.addEventListener('transitionend',removeTransiton))
  // window.addEventListener('keydown',(playsound))