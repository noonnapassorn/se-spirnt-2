@test "B5705535 รันได้ถูก ใส่ข้อมูลถูก" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"name":"M","bankaccountnum":"B1234","bankname":"RE123a"}' \
	http://localhost:8080/api/refundSlips)

	echo $json | grep "name"

}

@test "B5705535 กรณีที่ผิด ไม่ได้ใส่name" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"bankname":"RE123a"}' \
	http://localhost:8080/api/refundSlips)

	echo $json | grep "may not be null"

}

@test "B5705535 กรณีที่ผิด ไม่ได้ใส่bankname" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"name":"M"}' \
	http://localhost:8080/api/refundSlips)

	echo $json | grep "may not be null"

}

@test "B5705535 กรณีที่ผิด ไม่ได้ใส่bankname,name" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{}' \
	http://localhost:8080/api/refundSlips)

	echo $json | grep "may not be null"

}

@test "B5705535 กรณีที่ผิด ใส่ข้อมูลเกิน" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"name":"M","bankaccountnum":"B123499999","bankname":"RE123a"}' \
	http://localhost:8080/api/refundSlips)

	echo $json | grep "constraint violations"

}