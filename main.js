
let a = [100,50,49,50,30,40,70,80,60,70];
let b =0;

function name(){
    for(i=0; i<a.length; i++){
        b+=a[i];
    }
return b;
 
}
let c =name(a,b);

document.write(c/a.length);