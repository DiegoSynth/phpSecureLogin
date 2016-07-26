function getFromUrl(sUrl, sParams, callbackfunction)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            if (callbackfunction)
            {
                callbackfunction(xmlhttp);
            }
        }
    };
    xmlhttp.open("POST", sUrl, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(sParams);
}

function getSessionData()
{
    getFromUrl("getSessionData.php", "", validateSession);
}

function validateSession(xmlhttp)
{
    alert(xmlhttp.responseText);
    var userLogged = eval("(" + xmlhttp.responseText + ")");
    if(userLogged.userId == -1)
    {
        document.location.href = "error.html";
    }
    else
    {
        document.getElementById("divUserId").innerHTML = userLogged.email;
    }
}