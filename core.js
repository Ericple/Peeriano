let leftHandIndex = 2;
let rightHandIndex = 9;
let pedal = false;
let rightindicator = document.getElementById('rightHandC');
let leftindicator = document.getElementById('leftHandC');
let whiteKey = new Array(52);
let blackKey = new Array(36);
let pedalcheck = document.getElementById('pedal');
console.log(pedalcheck)

for (let i=0;i<52;i++){
    whiteKey[i]=new Audio("./static/audio/"+i+".mp3")
}
pedalcheck.onclick=()=>{
    pedal=!pedal;
    if (pedal == true){
        pedalcheck.style.borderLeft="3px solid #1890ff";
    }else{
        pedalcheck.style.border="0px solid #1890ff";
    }
}
document.onkeydown=(event,args)=>{
    // for (let i=0;i<52;i++){
    //     whiteKey[i]=new Audio("./static/audio/"+i+".mp3")
    // }
    if (event.ctrlKey){
        if (leftHandIndex>2){
            leftHandIndex-=7;
            console.log(leftHandIndex)
            leftindicator.innerText="C"+((leftHandIndex-2)/7 +1).toString();
        }
    }
    if (event.shiftKey){
        if (leftHandIndex<rightHandIndex-7){
            leftHandIndex+=7;
            console.log(leftHandIndex)
            leftindicator.innerText="C"+((leftHandIndex-2)/7 +1).toString();
        }
    }
    if (event.key ===';'){
        if (rightHandIndex>leftHandIndex+7){
            rightHandIndex-=7;
            console.log(rightHandIndex)
            rightindicator.innerText="C"+((rightHandIndex-2)/7 +1).toString();
        }
    }
    if (event.key ==='\''){
        if (rightHandIndex<52){
            rightHandIndex+=7;
            console.log(rightHandIndex)
            rightindicator.innerText="C"+((rightHandIndex-2)/7 +1).toString();
        }
    }

    if (event.key==='A' || event.key==='a'){
        whiteKey[leftHandIndex].play();
    }
    if (event.key==='W' || event.key==='w'){
        whiteKey[leftHandIndex+1].play();
    }
    if (event.key==='E' || event.key==='e'){
        whiteKey[leftHandIndex+2].play();
    }
    if (event.key==='R' || event.key==='r'){
        whiteKey[leftHandIndex+3].play();
    }
    if (event.key==='C' || event.key==='c'){
        whiteKey[leftHandIndex+4].play();
    }
    if (event.key==='F' || event.key==='f'){
        whiteKey[leftHandIndex+5].play();
    }
    if (event.key==='V' || event.key==='v'){
        whiteKey[leftHandIndex+6].play();
    }
    if (event.key==='B' || event.key==='b'){
        whiteKey[leftHandIndex+7].play();
    }
    if (event.key==='N' || event.key==='n'){
        whiteKey[rightHandIndex].play();
    }
    if (event.key==='U' || event.key==='u'){
        whiteKey[rightHandIndex+1].play();
    }
    if (event.key==='I' || event.key==='i'){
        whiteKey[rightHandIndex+2].play();
    }
    if (event.key==='O' || event.key==='o'){
        whiteKey[rightHandIndex+3].play();
    }
    if (event.key==='P' || event.key==='p'){
        whiteKey[rightHandIndex+4].play();
    }
    if (event.key==='['){
        whiteKey[rightHandIndex+5].play();
    }
    if (event.key===']'){
        whiteKey[rightHandIndex+6].play();
    }
    if (event.key==='\\'){
        whiteKey[rightHandIndex+7].play();
    }
}
document.onkeyup=(event,args)=>{
    if (pedal == false){
        if (event.key==='A' || event.key==='a'){
            whiteKey[leftHandIndex].load();
        }
        if (event.key==='W' || event.key==='w'){
            whiteKey[leftHandIndex+1].load();
        }
        if (event.key==='E' || event.key==='e'){
            whiteKey[leftHandIndex+2].load();
        }
        if (event.key==='R' || event.key==='r'){
            whiteKey[leftHandIndex+3].load();
        }
        if (event.key==='C' || event.key==='c'){
            whiteKey[leftHandIndex+4].load();
        }
        if (event.key==='F' || event.key==='f'){
            whiteKey[leftHandIndex+5].load();
        }
        if (event.key==='V' || event.key==='v'){
            whiteKey[leftHandIndex+6].load();
        }
        if (event.key==='B' || event.key==='b'){
            whiteKey[leftHandIndex+7].load();
        }
        if (event.key==='N' || event.key==='n'){
            whiteKey[rightHandIndex].load();
        }
        if (event.key==='U' || event.key==='u'){
            whiteKey[rightHandIndex+1].load();
        }
        if (event.key==='I' || event.key==='i'){
            whiteKey[rightHandIndex+2].load();
        }
        if (event.key==='O' || event.key==='o'){
            whiteKey[rightHandIndex+3].load();
        }
        if (event.key==='P' || event.key==='p'){
            whiteKey[rightHandIndex+4].load();
        }
        if (event.key==='['){
            whiteKey[rightHandIndex+5].load();
        }
        if (event.key===']'){
            whiteKey[rightHandIndex+6].load();
        }
        if (event.key==='\\'){
            whiteKey[rightHandIndex+7].load();
        }
    }else{
        for (let i=leftHandIndex;i<rightHandIndex+7;i++){
            whiteKey[i]=new Audio("./static/audio/"+i+".mp3")
        }
    }
}