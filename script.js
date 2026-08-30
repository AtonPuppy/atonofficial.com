const slides=[...document.querySelectorAll('.slide')];
const num=document.getElementById('num');
const bar=document.getElementById('bar');
const duration=6500;
let index=0;

function showSlide(next){
  slides[index].classList.remove('active');
  index=next%slides.length;
  slides[index].classList.add('active');
  num.textContent=String(index+1).padStart(2,'0');
  bar.style.transition='none';
  bar.style.width='0%';
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      bar.style.transition=`width ${duration}ms linear`;
      bar.style.width='100%';
    });
  });
}

showSlide(0);
setInterval(()=>showSlide(index+1),duration);
