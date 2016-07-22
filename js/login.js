function validate()
{
    var sMsg="";
    if (document.getElementById("txtUsername").value.length > 0)
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
        sMsg = "Please complete the field 'username'";
    }
    return (sMsg);
}

function send()
{
    var sMsg = validate();
    if (sMsg.length == 0)
    {
        document.getElementById("frmLogin").submit();
    }
    else
    {
        alert(sMsg);
    }
}
