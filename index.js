var tablinks = document.getElementsByClassName("tab_links");
var tabcontents = document.getElementsByClassName("tab_contents");

function opentab(tabname){
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
    
}

//responsive code

