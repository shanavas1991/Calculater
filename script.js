
var oldvalue
var newvalue
var operation=false
var temp
var n=0
var num=0
var offon=false
function onoff(){
    n=0
num++
if(num==1){
   offon=true
    document.getElementById("screen").value=""

}
    else{
        num=0
        offon=false
        document.getElementById("screen").value=""
    } 
    
}

function clearButton(){
   
    n=0
    document.getElementById("screen").value=""
}
function buttonclick(val){
    
    if(offon){
    
if(operation){
    
    document.getElementById("screen").value=val

    
    operation=false 

}else{
    document.getElementById("screen").value=document.getElementById("screen").value+val 

}}}  function dot(val){
    if(offon){
    n++
    if(1==n){
    if(operation){
   
    document.getElementById("screen").value=val
operation=false}
else{
    
        document.getElementById("screen").value=document.getElementById("screen").value+val   
    }}}
}
function equalclick(){
    if(offon){
    n=0
    if(temp==1){
    newvalue=document.getElementById("screen").value
   var sum=parseFloat(oldvalue)+parseFloat(newvalue)
   document.getElementById("screen").value=sum
}
   else if(temp==2){
    newvalue=document.getElementById("screen").value
   var sum=parseFloat(oldvalue)-parseFloat(newvalue)
   document.getElementById("screen").value=sum}
   else if(temp==3){
    newvalue=document.getElementById("screen").value
   var sum=parseFloat(oldvalue)*parseFloat(newvalue)
   document.getElementById("screen").value=sum}
   else if(temp==4){
    newvalue=document.getElementById("screen").value
   var sum=parseFloat(oldvalue)/parseFloat(newvalue)
   document.getElementById("screen").value=sum}}

}function addtclick(){
    if(offon){
    n=0
    temp=1
    operation=true
 oldvalue=document.getElementById("screen").value}
}function subsclick(){
    if(offon){
    n=0
    temp=2
    operation=true
 oldvalue=document.getElementById("screen").value
    }
}function multclick(){
    if(offon){
    n=0
    temp=3
    operation=true
 oldvalue=document.getElementById("screen").value}
}function divdclick(){
    if(offon){
    n=0
    temp=4
    operation=true
 oldvalue=document.getElementById("screen").value
}}

