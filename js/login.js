var loginResult;
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
    xmlhttp.send(sParams);
}

function processLoginResult(xmlhttp)
{
    loginResult = eval("(" + xmlhttp.responseText + ")");
    switch(loginResult.status)
    {
        case 0:
            document.getElementById("divUserId").innerHTML = "welcome " + loginResult.userId;
            document.getElementById("btnSend").disabled = true;
            break;
        default:
            alert(loginResult.msg);
            break;
    }
}