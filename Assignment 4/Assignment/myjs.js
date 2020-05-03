
function changeImage()
{
    //alert("hii");
    if(document.getElementById("imp").src == "file:///D:/Assignment/pick.png")
    {
        document.getElementById("imp").src = "pick1.gif";
    }
    else
    {
        document.getElementById("imp").src = "pick.png";
    }
}
function coinFlip()
{ 
	(Math.floor(Math.random() * 2) == 0) ? alert('it is Head') : alert('it is Tail') 
}

function setBodyAttr(attr, value)
{
 if (document.body) eval('document.body.'+attr+'="'+value+'"');
  else
      notSupported();
 }
 
 