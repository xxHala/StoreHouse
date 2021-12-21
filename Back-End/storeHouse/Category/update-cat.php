<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
	isset($data->catId)
	&& isset($data->name)
) {
	$pname = mysqli_real_escape_string($db_conn, trim($data->name));
	if (preg_match ("/^[a-zA-z]*$/", $pname))
    {
		$updateCat= mysqli_query($db_conn, "INSERT INTO `categories` SET `name`='$pname'  WHERE `id`='$data->id'");
		if ($updateCat) {
			echo json_encode(["success" => 1, "msg" => "categories Updated."]);
		} else {
			echo json_encode(["success" => 0, "msg" => "categories Not Updated!"]);
		}
	} else {
		echo json_encode(["success" => 0, "msg" => "Invalid Name !"]);
	}
}
