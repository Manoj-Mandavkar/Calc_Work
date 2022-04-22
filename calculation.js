function calc(){
    var a= Number(document.getElementById("num").value);
    if(a>0 && a<1501){
        var b=Math.round(a/2);
        document.getElementById("res").innerHTML=b;
        document.getElementById("res2").innerHTML="";
    }
    else if(a>=1501 && a<=3000){
        var b=Math.round(a/4);
        var c=b*3;
        document.getElementById("res").innerHTML=b; 
        document.getElementById("res2").innerHTML=c;
    }
    else{
        alert("length its too short or too Long");
    }
    
}

function reset1(){
    document.getElementById("res").innerHTML="";
    document.getElementById("res2").innerHTML="";  
    
}