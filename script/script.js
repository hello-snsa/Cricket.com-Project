// localStorage.setItem('data','[40,15,25,20]')
localStorage.setItem('localper[0]',40)
localStorage.setItem('localper[1]',15)
localStorage.setItem('localper[2]',25)
localStorage.setItem('localper[3]',20)


// var data=localStorage.getItem('data');
// var mydata=JSON.parse(data);

var per1 =JSON.parse( localStorage.getItem('localper[0]'));//mydata[0];
var per2 = JSON.parse( localStorage.getItem('localper[1]'));//mydata[1];
var per3 =JSON.parse( localStorage.getItem('localper[2]'));// mydata[2];
var per4 =JSON.parse( localStorage.getItem('localper[3]'));//mydata[3];
let pCount= JSON.parse(localStorage.getItem('pCount'));

// var voteCount = 0;
function initialData(){
  document.getElementById("pollColor1").innerHTML = `<style>#pollColor1{width:${per1}%}</style>`;
  let pollcolor2 = document.getElementById("pollColor2");
  pollcolor2.innerHTML = `<style>#pollColor2{width:${per2}%}</style>`;
  let pollcolor3 = document.getElementById("pollColor3");
  pollcolor3.innerHTML = `<style>#pollColor3{width:${per3}%}</style>`;
  let pollcolor4 = document.getElementById("pollColor4");
  pollcolor4.innerHTML = `<style>#pollColor4{width:${per4}%}</style>`;
  }
// 


function changePoll1() {
  per1 += 0.25;
  per2 -= 0.25;
  per3 -= 0.25;
  per4 -= 0.25;
  changeColor();
  
}
function changePoll2() {
  per1 -= 0.25;
  per2 += 0.25;
  per3 -= 0.25;
  per4 -= 0.25;

  changeColor();
}
function changePoll3() {
  per1 -= 0.25;
  per2 -= 0.25;
  per3 += 0.25;
  per4 -= 0.25;

  changeColor();
}
function changePoll4() {
  per1 -= 0.25;
  per2 -= 0.25;
  per3 -= 0.25;
  per4 += 0.25;

  changeColor();
}
function changeColor() {

let vote= localStorage.getItem('vote');
if(vote==null)
{
    vote=0;
}

  if (vote == 0) {
    let pollcolor1 = document.getElementById("pollColor1");
    pollcolor1.innerHTML = `<style>#pollColor1{width:${per1}%}</style>`;
    let pollcolor2 = document.getElementById("pollColor2");
    pollcolor2.innerHTML = `<style>#pollColor2{width:${per2}%}</style>`;
    let pollcolor3 = document.getElementById("pollColor3");
    pollcolor3.innerHTML = `<style>#pollColor3{width:${per3}%}</style>`;
    let pollcolor4 = document.getElementById("pollColor4");
    pollcolor4.innerHTML = `<style>#pollColor4{width:${per4}%}</style>`;

   
        localStorage.setItem('localper[0]',per1);   
        localStorage.setItem('localper[1]',per2);   
        localStorage.setItem('localper[2]',per3);   
        localStorage.setItem('localper[3]',per4);   
        pCount++;
        localStorage.setItem('pCount',pCount);

    changePercentages();
 
    localStorage.setItem('vote',1);     
    
  }
  if(vote>0)
  {
    alert("you have already votes.");
  }
}

function changePercentages() {
  let poll1Per =     document.getElementById("poll1Per");
  let poll2Per =     document.getElementById("poll2Per");
  let poll3Per =     document.getElementById("poll3Per");
  let poll4Per =     document.getElementById("poll4Per");
  let pollCount = document.getElementById("pollCount"); 

let localper1=  localStorage.getItem('localper[0]');
let localper2=  localStorage.getItem('localper[1]');
let localper3=  localStorage.getItem('localper[2]');
let localper4=  localStorage.getItem('localper[3]');

  poll1Per.innerText = localper1;
  poll2Per.innerText=localper2;
  poll3Per.innerText=localper3;
  poll4Per.innerText=localper4;
  pollCount.innerText=pCount+" votes";
  initialData();

}
// score card

function login() {
  window.location.href = "/login/login.html";
}

let i=1;
function next(){
 const data=['images/big1.PNG','images/big2.PNG','images/big3.PNG','images/big4.PNG','images/big5.PNG',]
  const arr = ['images/image1.PNG','images/image2.PNG','images/image3.PNG','images/image4.PNG','images/image5.PNG'];
  if(i>4){
i=0;
}
  let image = document.getElementById("matches")
  let poster = document.getElementById("table_image")
image.setAttribute('src',arr[i]);
poster.setAttribute("src",data[i]);

i++;

}
next();

let k =1;
function previous(){

  const sata=['images/big1.PNG','images/big2.PNG','images/big3.PNG','images/big4.PNG','images/big5.PNG',]
  const array = ['images/image1.PNG','images/image2.PNG','images/image3.PNG','images/image4.PNG','images/image5.PNG'];
if(k<1){
k=4
}
let image = document.getElementById("matches")
  let poster = document.getElementById("table_image")
image.setAttribute('src',array[k]);
poster.setAttribute("src",sata[k]);

k--;

}
previous();
