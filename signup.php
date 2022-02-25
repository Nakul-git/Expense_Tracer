<?php
$server = "localhost";
$username = "root";

$con = mysqli_connect($server, $username);

$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['pass'];

$sql = ("INSERT INTO `expense`.`users` VALUES ('$firstname','$lastname', '$email', '$password', current_timestamp());");
mysqli_query($con,$sql);

if($sql){
    header("Location:loginpage.html");
}else{
    header("location:signup.html");
}
?>