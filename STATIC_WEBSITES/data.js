data={
services:[
    {
        name:"Application services",
        image:"images/application.png",
        features:["Latest Technology","Micro service Architecture","Cloud Native","Test Driven Development"]
    },
    {
        name:"Testing services",
        image:"images/Testing.png",
        features:["End to End Testing","Performance Anaylsis","Quality Assurance","Powerful Tools"]
    },
    {
        name:"infrastructure services",
        image:"images/infrastructure.png",
        features: ["Cloud Services", "Low Cost","Premium Hardware","High Performance"]
    },
]
}


let code=""

for(let service of data.services){
code+="<div class='service-box'>"
code+="<h3>"+service.name+"</h3>"
code+="<img src='"+service.image+"'>"
code+="<div class='features'><ul>"
for(let feature of service.features){
    code+="<li onclick=\"alertonlielement('" + feature + "')\">" +feature+"</li>"
}
code+="</ul></div></div>"
}


function alertonlielement(input){
    alert(input);
}

function hideslide(input)
{
    if(input=="up")
    {
    document.getElementById("slide-show").style.display="none";
    document.getElementById("Up-icon").style.display="none";
    document.getElementById("down-icon").style.display="block";
    
    }
     else
    {
    document.getElementById("slide-show").style.display="block";
    document.getElementById("down-icon").style.display="none";
    document.getElementById("Up-icon").style.display="block";
    }

} 


document.getElementById("services-wrapper").innerHTML=code