#!/bin/usr
@test "B5705153 รันได้ถูก ใส่ข้อมูลถูก" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"changeid":"CH1234","billid":"RE123a"}' \
	http://localhost:8080/api/changeRooms)

	echo $json | grep "billid"

}

@test "B5705153 ไม่ใส่ค่าbillid" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"changeid":"CH1234"}' \
	http://localhost:8080/api/changeRooms)

	echo $json | grep "may not be null"

}

@test "B5705153 มันกำหนดค่าไอดีตัวอักษรไม่ครบ" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"changeid":"C1234","billid":"RE123a"}' \
	http://localhost:8080/api/changeRooms)

	echo $json | grep "ChangeRoom"

}

@test "B5705153 ใส่ตัวเลขที่ครบ" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"changeid":"CH234"}' \
	http://localhost:8080/api/changeRooms)

	echo $json | grep "may not be null"

}

@test "B5705153 ใส่ตัวเลขเกิน" {
    json=$(curl -X POST -H "Content-Type: application/json" \
	-d '{"changeid":"CH01234"}' \
	http://localhost:8080/api/changeRooms)

	echo $json | grep "may not be null"

}


