

 let innerCursor = document.querySelector('.inner-cursor');
 let outerCursor = document.querySelector('.outer-cursor');

 document.addEventListener('mousemove', moveCursor);
 function moveCursor(e){
  let x = e.clientX;
  let y = e.clientY;

  //console.log(x,y);
  innerCursor.style.left= `${x}px`;
  innerCursor.style.top= `${y}px`;
  outerCursor.style.left= `${x}px`;
  outerCursor.style.top= `${y}px`;
 }

 const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

 const numBalls = 200;
 const balls = [];
 const separationSection = document.querySelector('.sepration');
 
 for (let i = 0; i < numBalls; i++) {
   let ball = document.createElement("div");
   
  
   ball.classList.add("ball");
   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
   ball.style.top = `${Math.floor(Math.random() * 1000)}vh`;
   ball.style.transform = `scale(${Math.random()})`;
   ball.style.width = `${Math.random()}em`;
   ball.style.height = ball.style.width;
   
   balls.push(ball);
   separationSection.append(ball);
 }
 
 // Keyframes
 balls.forEach((el, i, ra) => {
   let to = {
     x: Math.random() * (i % 2 === 0 ? -11 : 11),
     y: Math.random() * 12
   };
 
   let anim = el.animate(
     [
       { transform: "translate(0, 0)" },
       { transform: `translate(${to.x}rem, ${to.y}rem)` }
     ],
     {
       duration: (Math.random() + 1) * 2000, // random duration
       direction: "alternate",
       fill: "both",
       iterations: Infinity,
       easing: "ease-in-out"
     }
   );
 });




 
 

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

window.onload = function() {
  setTimeout(function(){
    popup.style.display = "block"
  }, 2000)

}
close.addEventListener('click', () => {
  popup.style.display = "none";
})