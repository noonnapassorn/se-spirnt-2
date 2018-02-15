#!/bin/usr
@test "B5720668 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billId":"OR01w","name":"marut","date":"2017-02-01","price":"100.0"}'\
    http://localhost:8080/api/billOrders)

    echo $json |grep "href"
}

@test "B5720668 กรณีข้อมูลเป็ฯnul" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billId":null,"name":null,"date":"2017-02-01"}'\
    http://localhost:8080/api/billOrders)

    echo $json |grep "ConstraintViolationException"
}

@test "B5720668 กรณีข้อมูลbillidผิด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billId":"aa00r","name":"marut","date":"2017-02-01"}'\
    http://localhost:8080/api/billOrders)

    echo $json |grep "ConstraintViolationException"
}

@test "B5720668 กรณีbillidมีเลขเกินกำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billId":"OR00001e","name":"marut","date":"2017-02-01"}'\
    http://localhost:8080/api/billOrders)

    echo $json |grep ".ConstraintViolationException"
}

@test "B5720668 กรณีข้อมูลยาวเกินกำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billId":"OR01e","name":"marutmarutmarutmarutmarutmarutmarutmarutmarutmarutmaru","date":"2017-02-01"}'\
    http://localhost:8080/api/billOrders)

    echo $json |grep "ConstraintViolationExceptio"
}

