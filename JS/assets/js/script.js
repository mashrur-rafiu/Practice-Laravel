var i;
for(i=10;i<100;i=i+10){
    if(i==30){
        continue;
    }
    if(i==70){
        break;
    }
    document.write(i+"<button>Submit</button><br>");
}