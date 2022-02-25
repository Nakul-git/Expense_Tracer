<?php
$server = "localhost";
$username = "root";

$con = mysqli_connect($server, $username);

$email = $_POST['email'];
$pass = $_POST['password'];

$sql =("SELECT * FROM `expense`.`users` WHERE email = '$email' AND pass_word = '$pass';");
$op=mysqli_query($con,$sql);
$nfr = mysqli_num_rows($op);
if($op){
    if($nfr){
    header("location:index.html");
    }
else{
    header("location:signup.html");
}
}
?>