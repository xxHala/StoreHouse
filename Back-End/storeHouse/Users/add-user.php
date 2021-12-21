<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->user_name)
    && isset($data->user_email)
    && isset($data->user_pass)
    && isset($data->user_pass2)
    && !empty(trim($data->user_name))
    && !empty(trim($data->user_email))
) {
    $username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
    $userpass= mysqli_real_escape_string($db_conn, trim($data->user_pass));
    $userpass2= mysqli_real_escape_string($db_conn, trim($data->user_pass2));

    if($userpass==$userpass2) {

    if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
        $insertUser = mysqli_query($db_conn, "INSERT INTO `users`(`user_name`,`user_email`,`user_pass`,`user_pass2`) VALUES('$username','$useremail','$userpass','$userpass2')");
        if ($insertUser) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
        }
    } else {
        echo json_encode(["success" => 0, "msg" => "Invalid Email Address!"]);
    }
}
else {
    echo json_encode(["success" => 0, "msg" => "Password do not match! "]);
}
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}

