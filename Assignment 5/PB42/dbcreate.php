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
$sql = "Create Database Mydb";
if(mysqli_query($conn,$sql)){
	echo "Database created successfully";
	}
	else{
		echo "Error Creating database: " . mysqli_error($conn);
	}
mysqli_close($conn);
?>