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
    isset($data->p_name)
    && isset($data->p_description)
    && isset($data->p_quantity)
    && isset($data->p_price)
    && isset($data->p_image)
) {
    $pname = mysqli_real_escape_string($db_conn, trim($data->p_name));
    $pdescription = mysqli_real_escape_string($db_conn, trim($data->p_description));
    $pquantity= mysqli_real_escape_string($db_conn, trim($data->p_quantity));
    $pprice= mysqli_real_escape_string($db_conn, trim($data->p_price));
    $pp_image= mysqli_real_escape_string($db_conn, trim($data->p_image));

    if (preg_match ("/^[a-zA-z]*$/", $pname) ) {
    $insertProduct = mysqli_query($db_conn, "INSERT INTO `products`(`p_name`,`p_description`,`p_quantity`,`p_price`,`p_image`) VALUES('$pname','$pdescription','$pquantity','$pprice'.'$pp_image')");
        if ($insertProduct) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "product Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "product Not Inserted!"]);
        }
    }
else {
    echo json_encode(["success" => 0, "msg" => "Only alphabets and whitespace are allowed. "]);
}
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}

/opt/homebrew/var/www/storeHouse