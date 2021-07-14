// localStorage.setItem('data','[40,15,25,20]')
let firstTime = localStorage.getItem('vote');
if(firstTime==null){
localStorage.setItem('localper[0]',40)
localStorage.setItem('localper[1]',15)
localStorage.setItem('localper[2]',25)
localStorage.setItem('localper[3]',20)
}

// var data=localStorage.getItem('data');
// var mydata=JSON.parse(data);

var per1 =JSON.parse( localStorage.getItem('localper[0]'));//mydata[0];
var per2 = JSON.parse( localStorage.getItem('localper[1]'));//mydata[1];
var per3 =JSON.parse( localStorage.getItem('localper[2]'));// mydata[2];
var per4 =JSON.parse( localStorage.getItem('localper[3]'));//mydata[3];
let pCount= JSON.parse(localStorage.getItem('pCount'));
if(pCount==null)
{
    localStorage.setItem('pCount',612);
}

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
pCount=612;
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
  if(pCount == null)
  {
    pCount=612;
      

  }
  
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

//score card


let i = 1;
function next() {
  const data = ['images/big1.png', 'images/big2.png', 'images/big3.png', 'images/big4.png', 'images/big5.png',]
  const arr = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (i > 4) {
    i = 0;
  }
  let image = document.getElementById("matches")
  let poster = document.getElementById("table_image")
  image.setAttribute('src', arr[i]);
  poster.setAttribute("src", data[i]);

  i++;
}
next();

let a = 4
function changergt() {
  const sum = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (a > 4) {
    a = 0;
  }
  let slide = document.getElementById("right")
  slide.setAttribute('src', sum[a])
  a++;
}


let b = 3
function changelft() {
  const lft = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (b > 4) {
    b = 0;
  }
  let slide = document.getElementById("left")
  slide.setAttribute('src', lft[b])
  b++;
}

let c = 0
function previousrgt() {
  const prev = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (c < 0) {
    c = 4;
  }
  let slide = document.getElementById("right")
  slide.setAttribute('src', prev[c])
  c--;
}
let d = 2
function previouslft() {
  const prev = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (d < 0) {
    d = 4;
  }
  let slide = document.getElementById("left")
  slide.setAttribute('src', prev[d])
  d--;
}

let k = 1;
function previous() {

  const sata = ['images/big1.png', 'images/big2.png', 'images/big3.png', 'images/big4.png', 'images/big5.png',]
  const array = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png'];
  if (k < 0) {
    k = 4
  }
  let image = document.getElementById("matches")
  let poster = document.getElementById("table_image")
  image.setAttribute('src', array[k]);
  poster.setAttribute("src", sata[k]);

  k--;

}
previous();