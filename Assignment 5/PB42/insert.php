<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "college";

$conn = mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
	die("Connection failed: " . mysqli_connect_error());
}
$sql = "Insert into student values('5','Parimal','Mumbai')";
if(mysqli_query($conn,$sql)){
	echo "Record inserted successfully";
	}
	else{
		echo "Error Creating database: " . mysqli_error($conn);
	}
mysqli_close($conn);
?>