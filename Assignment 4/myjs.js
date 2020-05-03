
function changeImage()
{
    //alert("hii");
    if(document.getElementById("imp").src == "file:///C:/Users/Devesh_Bhogre/Desktop/Programs/WTL/Assignment_4/pick.png")
    {
        document.getElementById("imp").src = "pick1.gif";
    }
    else
    {
        document.getElementById("imp").src = "pick.png";
    }
}