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
    if (sMsg.length == 0)
    {
        document.getElementById("hPassword").value = hex_sha512(document.getElementById("txtPassword").value);
        //document.getElementById("frmLogin").submit();
        sUrl = "loginProcess.php?txtEmail=" + document.getElementById("txtEmail").value + "hPassword=" + document.getElementById("hPassword").value;
        getFromUrl(sUrl, processLoginResult);
    }
    else
    {
        alert(sMsg);
    }
}

function getFromUrl(sUrl, callbackfunction)
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
    xmlhttp.open("GET", sUrl, true);
    xmlhttp.send();
}

function processLoginResult(xmlhttp)
{
    alert(xmlhttp.responseText);
}