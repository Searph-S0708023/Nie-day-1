 function vote(){
    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var nation=document.getElementById("nation").value;
    var ans=document.getElementById("ans");
    if(age>=18&&nation=="India"){
        ans.innerHTML= "Hello "+name+" you are eligible to vote";
        
    }else{
        ans.innerHTML=name +" you are not eligible"
    }
}
