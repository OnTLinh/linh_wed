const adressbtn=document.querySelector('#adress-form')
const adressclose=document.querySelector('#adress-close')//cont: biến không đổi
//console.log (adresssbtn)
 adressbtn.addEventListener("click",function(){
     document.querySelector('.adress-form').style.display = "flex"
 })
 adressclose.addEventListener("click",function(){
   document.querySelector('.adress-form').style.display = "none"
})
//-----------------------------------------------------Đăng nhập-----------------------------------------------
const adressbtnn=document.querySelector('#adress-form1')
const adressclosee=document.querySelector('#adress-close1')//cont: biến không đổi
//console.log (adresssbtn)
 adressbtnn.addEventListener("click",function(){
     document.querySelector('.adress-form1').style.display = "flex"
 })
 adressclose.addEventListener("click",function(){
   document.querySelector('.adress-form1').style.display = "none"
})
//-------------------------------------------------------------------------pane slider--------
const rightbtn=document.querySelector('.fa-chevron-right')// chuyển pane giới thiệu sản phẩm
const leftbtn=document.querySelector('.fa-chevron-left')
const imgNuber=document.querySelectorAll('.slider-content-left-top img')
let index=0
rightbtn.addEventListener("click",Function)
rightbtn.addEventListener("click",function(){
 index= index+1
 if(index>imgNuber.length){
     index=0
 }
  document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
leftbtn.addEventListener("click",function(){
 index=index-1
  if(index<=0){
   index=imgNuber.length-1
  }
  document.querySelector(".slider-content-left-top").style.right=index *100+"%"
})
//------------------------------------slider 1-----------------------------------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')

//  console.log ()
imgNuberLi.forEach(function(image,index){
  image.addEventListener("click",function(){
    removeactive()
    document.querySelector(".slider-content-left-top").style.right=index *100+"%"
    image.classList.add("active1")
  })
})
function removeactive(){
  let imgactive = document.querySelector('.active1')
  imgactive.classList.remove("active1")
}