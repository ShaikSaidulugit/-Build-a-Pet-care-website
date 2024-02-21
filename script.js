let toggle=document.querySelector(".toggle")
let menu=document.querySelector(".menu")

toggle.onclick= function(){
    menu.classList.toggle("active")
}

// =================slider==============

var slideimage = document.querySelector(".slideimage")
var images = ['a.jpg' ,'b.jpg' ,'c.jpg' ,'d.jpg']
var i=0

function prev(){
    if( i<=0 ) i=images.length
    i--
    return setImg()
}

function next(){
 if(i>=images.length-1) i=-1
 i++
 return setImg()   
}

function setImg(){
    return slideimage.setAttribute('src','images/'+images[i])
}

// ==============accordion==================

let question=document.querySelector(".question")
let answer=document.querySelector(".answer")

question.onclick= function(){
    answer.classList.toggle("active")
}

let question1=document.querySelector(".question1")
let answer1=document.querySelector(".answer1")

question1.onclick= function(){
    answer1.classList.toggle("active")
}

let question2=document.querySelector(".question2")
let answer2=document.querySelector(".answer2")

question2.onclick= function(){
    answer2.classList.toggle("active")
}

let question3=document.querySelector(".question3")
let answer3=document.querySelector(".answer3")

question3.onclick= function(){
    answer3.classList.toggle("active")
}