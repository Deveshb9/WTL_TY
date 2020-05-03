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
$sql = "select * from student";
if ($res = mysqli_query($conn, $sql)) { 
    if (mysqli_num_rows($res) > 0) { 
        echo "<table>"; 
		echo "<table border='1'>";
        echo "<tr>"; 
        echo "<th>Rollno</th>"; 
        echo "<th>Name</th>"; 
        echo "<th>Address</th>"; 
        echo "</tr>"; 
        while ($row = mysqli_fetch_array($res)) { 
            echo "<tr>"; 
            echo "<td>".$row['Rollno']."</td>"; 
            echo "<td>".$row['Name']."</td>"; 
            echo "<td>".$row['Address']."</td>"; 
            echo "</tr>"; 
        } 
        echo "</table>"; 
        mysqli_free_result($res); 
    } 
    else { 
        echo "No matching records are found."; 
    } 
} 
mysqli_close($conn);
?>