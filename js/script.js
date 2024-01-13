let container = document.querySelector(".container");
let flag = true;
document.querySelector(".switch-button").addEventListener("click", function(){
    container.classList.toggle("darkMode");

    
    if(flag==true){
        document.querySelector("#button").style.cssText = "background-color : white; border : 0px solid gray";
        document.querySelector(".switch-button").style.cssText= "background-color: black; transform: translateX(50px);  transition: ease; transition: .4s;";
       
        document.querySelector(".heading").innerText = "Sleep well and have beautiful dreams.😴😪🥱💤🛌🏼";
        document.querySelector(".heading").style.fontSize = "50px";
        document.querySelector(".heading").style.color = "";
        flag = false;
    }
    else{
        document.querySelector("#button").style.cssText = "background-color : white; border : 5px solid gray";
        document.querySelector(".switch-button").style.cssText= "background-color: #8CC3F2; transform: translateX(0px);  transition: ease; transition: .4s;";
       
        document.querySelector(".heading").innerText = " 🌅🐓 Don't wait for opportunities, create them 😊. ...";
        document.querySelector(".heading").style.cssText = "color:red ; font-size:50px";
        

        flag = true;


    }
     
});



