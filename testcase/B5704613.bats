#!/bin/usr
@test "B5704613 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billid":"RC01e","name":"Rat","dateIn":"2018-02-10","dateOut":"2018-10-01"}'\
    http://localhost:8080/api/bills)

    echo $json |grep "href"
}

@test "B5704613 กรณีข้อมูลเป็ฯnul" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billid":"RC12s","name":null,"dateIn":null,"dateOut":"2017-02-04"}'\
    http://localhost:8080/api/bills)

    echo $json |grep ".ConstraintViolationException"
}

@test "B5704613 กรณีข้อมูลbillidผิด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billid":"aa00r","name":"marut","dateIn":"2017-02-08","dateOut":"2017-02-09"}'\
    http://localhost:8080/api/bills)

    echo $json |grep "ConstraintViolationException"
}

@test "B5704613 กรณีnameกรอกผิดประเภท" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billid":"RC01e21","name":"aa","dateIn":"2017-02-04","dateOut":"2017-02-07"}'\
    http://localhost:8080/api/bills)

    echo $json |grep ".ConstraintViolationException"
}

@test "B5704613 กรณีข้อมูลยาวเกินกำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"billid":"RC01e","name":"marutmarutmarutmarutmarutmarutmarutmarutmarutmarutmaru","dateIn":"2017-02-08","dateOut":"2017-03-09"}'\
    http://localhost:8080/api/bills)

    echo $json |grep "ConstraintViolationExceptio"
}

