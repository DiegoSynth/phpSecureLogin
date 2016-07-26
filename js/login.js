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

function processLoginResult(xmlhttp)
{
    var loginResult = eval("(" + xmlhttp.responseText + ")");
    switch(loginResult.status)
    {
        case 0:
            document.getElementById("divUserId").innerHTML = "welcome " + loginResult.userId + " | entering now in the system...";
            document.getElementById("btnSend").disabled = true;
            window.setTimeout(enter, 2000);
            break;
        default:
            alert(loginResult.msg);
            break;
    }
}

function enter()
{
    document.getElementById("frmLogin").submit();
}