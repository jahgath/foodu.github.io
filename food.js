window.onload = function(){
var change = document.getElementById("image");
var A = ["images/img1.jpg","images/img2.jpg","images/img3.jpg"];
let i =0;
setInterval(function(){
  change.src = A[i%3];
  i++;},
  1000);

var   B = ["hungry?","Order Online","Free Delivery"];
var text = document.getElementById("quotes");
j=0;
setInterval(function(){
  quotes.innerHTML = B[j%3];
  j++;
},
1000);

};
