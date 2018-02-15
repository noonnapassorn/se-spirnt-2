#!/bin/usr
@test "B5709601 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"user":"H12345","pass":"12345"}'\
    http://localhost:8080/api/accountWIFIBills)

    echo $json |grep "href"
    }

    @test "B5709601 user ไม่มีตัวอักษรขึ้นต้น" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"user":"12345","pass":"12345"}'\
    http://localhost:8080/api/accountWIFIBills)

    echo $json |grep "ConstraintViolationException"
    }

    @test "B5709601 ความยาวเกินกำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"user":"1234532132132","pass":"12345"}'\
    http://localhost:8080/api/accountWIFIBills)

    echo $json |grep "ConstraintViolationException"
    }

    @test "B5709601 ข้อมูลไม่ครบ" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"user":"123","pass":"123"}'\
    http://localhost:8080/api/accountWIFIBills)

    echo $json |grep "ConstraintViolationException"
    }

    @test "B5709601 กรณีpassเป็นnull" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"user":"H12345","pass":null}'\
    http://localhost:8080/api/accountWIFIBills)

    echo $json |grep "Validation failed"
    }



