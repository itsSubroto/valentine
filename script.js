const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

yesBtn.addEventListener("click", () => {
  alert("Thank you!!! I will def be your valentine");
});

noBtn.addEventListener("mouseover", () => {
  let top = Math.floor(Math.random() *90);
    let left = Math.floor(Math.random() * 90);
    
    console.log(top);
    console.log(left);

    noBtn.style.position = 'absolute'
    noBtn.style.top=`${top}%`
    noBtn.style.left=`${left}%`

});
