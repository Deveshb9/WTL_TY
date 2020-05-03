<?php
$servername="localhost";
$username="root";
$password="";
$conn = mysqli_connect($servername,$username,$password);

//Check Connection
if(!$conn)
	{
	die("Connection Failed" . mysqli_connect_error());
	}
	
$sql="CREATE DATABASE meradb";

if(mysqli_query($conn,$sql)){
	echo "Database Created";
}
else
{
echo "Error Creating database: " . mysqli_error($conn);
}

mysqli_close($conn)
?>