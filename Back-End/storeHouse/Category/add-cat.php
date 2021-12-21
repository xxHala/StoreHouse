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
    isset($data->name)
) {
    $name = mysqli_real_escape_string($db_conn, trim($data->name));

    if (preg_match ("/^[a-zA-z]*$/", $pname) ) {
    $insertCat= mysqli_query($db_conn, "INSERT INTO `categories `(`name`) VALUES('$name')");
        if ($insertCat) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "Category Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "Category Not Inserted!"]);
        }
    }
else {
    echo json_encode(["success" => 0, "msg" => "Only alphabets and whitespace are allowed. "]);
}
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}

