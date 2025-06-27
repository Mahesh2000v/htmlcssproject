<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>create-append-remove</h1>
    <p id="vasi">helloo studentssss</p>
    <p class="list">Bike Rider</p>
    <p class="list">ktm125</p>
    <p class="list">ktm200</p>
    <p class="list">ktm250</p>
    <p class="list">ktm390</p>
    <p class="list">ktm1390</p>
    <script src="append.js"></script>
</body>
</html>
let aish=document.createElement("p");
// aish.textContent="iam naveen";
aish.innerHTML="memory 1 tera byte";
aish.style.color="red";
aish.style.fontSize="30px";
document.getElementById("vasi").appendChild(aish);
setTimeout(()=>{
    let mahii = document.getElementsByClassName("list")[4];
    if(mahii){
    mahii.remove();
    }
},
2000);
let newHeading =document.createElement("h2");
newHeading.innerHTML = "this is a new heading added by java script";
newHeading.style.color="yellow";
newHeading.style.fontSize="30px";
document.body.appendChild(newHeading)

setTimeout(()=>{
    let newtext = document.createElement("p");
    newtext.textContent = "this text is added after 3 seconds";
    newtext.style.color="green"
    newText.style.fontSize="30px";
    document.body.appendChild(newText);
},3000
);

 let newtext1 = document.createElement("p");
newtext1.textContent = "this an text is append in top of tags";
newtext1.style.color="pink";
newText1.style.fontSize="30px";
 document.getElementById("vasi").appendChild(newText)


