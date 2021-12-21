<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
	isset($data->id)
	&& isset($data->user_name)
	&& isset($data->user_email)
	&& is_numeric($data->id)
	&& !empty(trim($data->user_name))
	&& !empty(trim($data->user_email))
) {
	$pname = mysqli_real_escape_string($db_conn, trim($data->p_name));
	$pdescription = mysqli_real_escape_string($db_conn, trim($data->p_description));
	$pquantity= mysqli_real_escape_string($db_conn, trim($data->p_quantity));
	$pprice= mysqli_real_escape_string($db_conn, trim($data->p_price));
	$pp_image= mysqli_real_escape_string($db_conn, trim($data->p_image));

	if (preg_match ("/^[a-zA-z]*$/", $pname) ) {
		$updateProduct = mysqli_query($db_conn, "INSERT INTO `products` SET `p_name`='$pname', `p_description`='$pdescription' , `p_quantity`='$pquantity', `p_price`='$pprice', `p_image`='$pp_image'  WHERE `id`='$data->id' ");
		if ($updateProduct) {
			echo json_encode(["success" => 1, "msg" => "Product Updated."]);
		} else {
			echo json_encode(["success" => 0, "msg" => "Product Not Updated!"]);
		}
	} else {
		echo json_encode(["success" => 0, "msg" => "Invalid Name !"]);
	}
} else {
	echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
