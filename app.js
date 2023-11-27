




var doAction = ()=>{

    var colorlist  = ["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","green" ,"yellow"];
   



    var randomNumberGenerate = Math.random()*colorlist.length

      

    randomNumberGenerate = Math.floor(randomNumberGenerate);

    var  showcolor = colorlist[randomNumberGenerate]; 
    console.log(showcolor);

    document.querySelector("body").style.backgroundColor = showcolor;
    document.querySelector(".colordetails").innerHTML = showcolor;

}