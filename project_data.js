var project1 = {
    
    name: "Simple \"About Me\" Page",
    rendered : "https://zjones4.github.io/IT202/project1/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
    
}
var project2 = {
    
    name: "Bootstrap Template Manipulation",
    rendered : "https://zjones4.github.io/IT202/project2/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"     
}
var project3 = {
    name: "Data App with User Filter",
    rendered : "https://zjones4.github.io/IT202/project3/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
}
var project4 = {
    
    name: "Side Scrolling Game",
    rendered : "https://zjones4.github.io/IT202/project4/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
    
}
var project5 = {
    
    name: "Weather Web App",
    rendered : "https://zjones4.github.io/IT202/project5/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
    
}

var project6 = {
  
    name: "Portfolio Home Page",
    rendered : "https://zjones4.github.io/IT202/project6/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project6"
     
    
    

}


var project7 = {
    
    name: "Air Horn",
    rendered : "https://zjones4.github.io/IT202/project7/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
    
}

var project8 ={
    
    name: "React Tic-Tac-Toe",
    rendered: "https://zjones4.github.io/IT202/project8/index.html",
    repo: "https://github.com/zjones4/IT202/tree/master/project8"
    
}

var project9 ={
    
    name: "Push Notifications",
    rendered: "https://zjones4.github.io/IT202/project9/index.html",
    repo: "https://github.com/zjones4/IT202/tree/master/project9"
    
}
var project10 ={
    
    name: "Android Merchant Page",
    rendered: "https://zjones4.github.io/IT202/project10/index.html",
    repo: "https://github.com/zjones4/IT202/tree/master/project10"
    
}
var final ={
    
    name: "Ultimate Music Web Application",
    rendered: "https://zjones4.github.io/IT202/final/index.html",
    repo: "https://github.com/zjones4/IT202/tree/master/final"
    
}
var projects = [project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, final];


projects.forEach(function(item, index, array) {
  console.log(item, index);
  
  var clone = $("#template").clone();
  
  clone.find("h4.card-title").text(item.name);
  clone.find("#Web").html("<a href=" + item.rendered + " >Project Website</a>");
  clone.find("#Repo").html("<a href=" + item.repo + " >Project Repository</a>");
   
  clone.removeClass("hidden");
  $("#target").append(clone);
  
});
