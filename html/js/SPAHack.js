$(document).ready(function(){
    var location_name = location.href.split("/")[3];
    
    // Defaut load
    if(location_name == "index.html" || location_name == ""){
        $("#content").load("../pages/home.html");
    }
    
    // Navbar Links
    $("a.nav-link").unbind("click").click(function(){            
        var sectionUrl = $(this).attr("data-url");
        console.log(sectionUrl);
        $("#content").load(sectionUrl, function(){
            console.log("Loaded " + sectionUrl);
        })
    });
});