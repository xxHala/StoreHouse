<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../db_connection.php';

$all_categories = mysqli_query($db_conn, "SELECT * FROM `categories` ORDER BY `id` ASC ");

if (mysqli_num_rows($all_categories) > 0) {
    $all_categories = mysqli_fetch_all($all_products, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "categories" => $all_categories]);
} else {
    echo json_encode(["success" => 0]);
}
