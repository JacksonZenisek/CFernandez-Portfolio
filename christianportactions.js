function gotoprojectspage(){
    window.location.href = "cfrenandezprojects.html";
}

function gotoprojectspage(){
    window.location.href = "cfrenandezprojects.html";
}

function gotoeducpage(){
    window.location.href = "cfernandezeducation.html";
}

function gotohomepage(){
    window.location.href = "index.html";
}

function displaymobilemenu(){
    document.getElementById("dropdownmenubuttonalt").style.width = "500px";
    document.getElementById("mobileedubuttoncontaineralt").style.width = "350px";
    document.getElementById("mobileedubuttoncontaineralt").style.height = "100px";
    document.getElementById("mobileeducertbuttonalt").style.fontSize= "35px";

    document.getElementById("mobileprojectsbuttoncontaineralt").style.width = "350px";
    document.getElementById("mobileprojectsbuttoncontaineralt").style.height = "100px";
    document.getElementById("mobileprojbuttonalt").style.fontSize= "35px";

    document.getElementById("mobilegithubbuttoncontaineralt").style.width = "200px";
    document.getElementById("mobilegithubbuttoncontaineralt").style.height = "200px";
    document.getElementById("disciconmobilealt").style.height= "150px";
    document.getElementById("disciconmobilealt").style.width= "150px";

    document.getElementById("mobilelinkedinbuttoncontaineralt").style.width = "300px";
    document.getElementById("mobilelinkedinbuttoncontaineralt").style.height = "150px";
    document.getElementById("linkedimobileconalt").style.height= "150px";
    document.getElementById("linkedimobileconalt").style.width= "150px";

    document.getElementById("mobilehomebuttoncontaineralt").style.width = "350px";
    document.getElementById("mobilehomebuttoncontaineralt").style.height = "100px";
    document.getElementById("mobilehomebuttonalt").style.fontSize= "35px";
}

function displayclosebutton(){
    let a = document.getElementById("mobilemenuenterbuttonalt");
    let b = document.getElementById("mobilemenuexitbuttonalt");

    if (a.style.display === "none"){
        a.style.display = "block";
        b.style.display = "none";
    }else{
        a.style.display = "block";
        b.style.display = "none";
    }
}

function closemobilemenu(){
    document.getElementById("dropdownmenubuttonalt").style.width = "0px";
    document.getElementById("mobileedubuttoncontaineralt").style.width = "0px";
    document.getElementById("mobileedubuttoncontaineralt").style.height = "0px";
    document.getElementById("mobileeducertbuttonalt").style.fontSize= "0px";

    document.getElementById("mobileprojectsbuttoncontaineralt").style.width = "0px";
    document.getElementById("mobileprojectsbuttoncontaineralt").style.height = "0px";
    document.getElementById("mobileprojbuttonalt").style.fontSize= "0px";

    document.getElementById("mobilegithubbuttoncontaineralt").style.width = "0px";
    document.getElementById("mobilegithubbuttoncontaineralt").style.height = "0px";
    document.getElementById("disciconmobilealt").style.height= "0px";
    document.getElementById("disciconmobilealt").style.width= "0px";

    document.getElementById("mobilelinkedinbuttoncontaineralt").style.width = "0px";
    document.getElementById("mobilelinkedinbuttoncontaineralt").style.height = "0px";
    document.getElementById("linkedimobileconalt").style.height= "0px";
    document.getElementById("linkedimobileconalt").style.width= "0px";

    document.getElementById("mobilehomebuttoncontaineralt").style.width = "0px";
    document.getElementById("mobilehomebuttoncontaineralt").style.height = "0px";
    document.getElementById("mobilehomebuttonalt").style.fontSize= "0px";
}

function displayopenbutton(){
    let a = document.getElementById("mobilemenuenterbuttonalt");
    let b = document.getElementById("mobilemenuexitbuttonalt");

    if (b.style.display === "none"){
        b.style.display = "block";
        a.style.display = "none";
    }else{
        b.style.display = "block";
        a.style.display = "none";
    }
}
