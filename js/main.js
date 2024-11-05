
let like = document.getElementById("like");
let dislike = document.getElementById("dislike");
let continer_img = document.getElementById("continer_img")
let continer = document.getElementById("continerv")
let imgs = document.querySelectorAll(".img img")
let total = document.querySelectorAll("#total img")
let totalHtml = document.getElementById("total")

console.log(imgs);



function imagSrc(srce) {
    
    continer_img.style.backgroundImage = `url(${srce})`

}


let imags = ["../imgs/ronaldo.jpg","../imgs/Lionel.jpg", "../imgs/hakimi.jpg", "../imgs/kylian-mbappe.jpg", "../imgs/naymar.jpeg", "../imgs/hakimi.jpg", "../imgs/bono.jpg"]

let count = 0;

continer_img.style.background = "url(../imgs/ronaldo.jpg)"
continer_img.style.backgroundPosition = "center";
continer_img.style.backgroundSize = "cover";


like.addEventListener('click', () => {

    count++;

    
    if (count < imags.length) {
           
       totalHtml.innerHTML += `
          <div class="image-grid">
       <img src="${imags[count-1]}" alt="Liked Image" ">
        
        </div>
       
       
       `;
        continer_img.style.background = `url(${imags[count]})`;
        continer_img.style.backgroundPosition = "center";
        continer_img.style.backgroundSize = "cover";

    
        
    }else{
        document.getElementById("continer-total").style.display="block"
        document.getElementById("continer-total").style.background="white"
        document.getElementById("continer-total").style.width="100%"


    }
 

})


dislike.addEventListener("click", (e) => {
    count++;
    if (count < imags.length) {
        continer_img.style.background = `url(${imags[count]})`;
        continer_img.style.backgroundPosition = "center";
        continer_img.style.backgroundSize = "cover";
    }
   

})


console.log(totalHtml);
