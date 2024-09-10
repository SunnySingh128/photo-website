

let id=document.querySelector("input");
let count=0;
let promise=async ()=>{
    console.log("getting data .........")
    let response=await fetch(`https://api.unsplash.com/search/photos?page=1&query=india&client_id=ZiVa2ewSMubmSb6mDza20vOTcjPUnaci25V7QwXc-PE`);
    let data=await response.json();
    let firstimage=data.results[0];
    let firstimage1=data.results[1];
    let firstimage2=data.results[2];
    let firstimage3=data.results[3];
    let firstimage4=data.results[4];
    let firstimage5=data.results[5];
    let firstimage6=data.results[6];
    let firstimage7=data.results[7];
    let firstimage8=data.results[8];
    let firstimage9=data.results[9];
    let img=document.querySelector(".one").src=firstimage.urls.regular;
    let img1=document.querySelector(".two").src=firstimage1.urls.regular;
    let img2=document.querySelector(".three").src=firstimage2.urls.regular;
    let img3=document.querySelector(".four").src=firstimage3.urls.regular;
    let img4=document.querySelector(".five").src=firstimage4.urls.regular;
    let img5=document.querySelector(".six").src=firstimage5.urls.regular;
    let img6=document.querySelector(".seven").src=firstimage6.urls.regular;
    let img7=document.querySelector(".eight").src=firstimage7.urls.regular;
    let img8=document.querySelector(".nine").src=firstimage8.urls.regular;
    let img9=document.querySelector(".ten").src=firstimage9.urls.regular;
    }
    promise();
    if(count==0){
id.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
     promise();
    }
})
let promise=async ()=>{
    console.log("getting data .........")
    let response=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${id.value}&client_id=ZiVa2ewSMubmSb6mDza20vOTcjPUnaci25V7QwXc-PE`);
    let data=await response.json();
    let firstimage=data.results[0];
    let firstimage1=data.results[1];
    let firstimage2=data.results[2];
    let firstimage3=data.results[3];
    let firstimage4=data.results[4];
    let firstimage5=data.results[5];
    let firstimage6=data.results[6];
    let firstimage7=data.results[7];
    let firstimage8=data.results[8];
    let firstimage9=data.results[9];
    let img=document.querySelector(".one").src=firstimage.urls.regular;
    let img1=document.querySelector(".two").src=firstimage1.urls.regular;
    let img2=document.querySelector(".three").src=firstimage2.urls.regular;
    let img3=document.querySelector(".four").src=firstimage3.urls.regular;
    let img4=document.querySelector(".five").src=firstimage4.urls.regular;
    let img5=document.querySelector(".six").src=firstimage5.urls.regular;
    let img6=document.querySelector(".seven").src=firstimage6.urls.regular;
    let img7=document.querySelector(".eight").src=firstimage7.urls.regular;
    let img8=document.querySelector(".nine").src=firstimage8.urls.regular;
    let img9=document.querySelector(".ten").src=firstimage9.urls.regular;
    id.value='';
    }
    }
