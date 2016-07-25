function validate()
{
    var sMsg="";
    if (document.getElementById("txtEmail").value.length > 0)
    {
        if (document.getElementById("txtPassword").value.length > 0)
        {

        }
        else
        {
            sMsg = "Please complete the field 'password'";
        }
    }
    else
    {
        sMsg = "Please complete the field 'email'";
    }
    return (sMsg);
}

function send()
{
    var sMsg = validate();
    var sUrl;
    var sParams;
    if (sMsg.length == 0)
    {
        document.getElementById("hPassword").value = hex_sha512(document.getElementById("txtPassword").value);
        //document.getElementById("frmLogin").submit();
        sUrl = "loginProcess.php";
        sParams = "txtEmail=" + document.getElementById("txtEmail").value + "&hPassword=" + document.getElementById("hPassword").value;
        getFromUrl(sUrl, sParams, processLoginResult);
    }
    else
    {
        alert(sMsg);
    }
}

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
    //xmlhttp.setRequestHeader("Content-length", sParams.length);
    //xmlhttp.setRequestHeader("Connection", "close");
    xmlhttp.send(sParams);
}

function processLoginResult(xmlhttp)
{
    alert(xmlhttp.responseText);
}