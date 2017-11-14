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
    
    name: "Air Horn",
    rendered : "https://zjones4.github.io/IT202/project7/index.html" ,
    repo: "https://github.com/zjones4/IT202/tree/master/project1"
    
}


var projects = [project1, project2, project3, project4, project5, project6];


projects.forEach(function(item, index, array) {
  console.log(item, index);
  
  var clone = $("#template").clone();
  
  clone.find("h4.card-title").text(item.name);
  clone.find("#Web").html("<a href=" + item.rendered + " >Project Website</a>");
  clone.find("#Repo").html("<a href=" + item.repo + " >Project Repository</a>");
   
  clone.removeClass("hidden");
  $("#target").append(clone);
  
});