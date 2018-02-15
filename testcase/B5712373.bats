#!/bin/usr
@test "B5712373 กรณีข้อมูลถูกต้อง" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"name":"Pannarai","telnum":"0934438772","service":"d123"}'\
    http://localhost:8080/api/laundryReceipts)

    echo $json |grep "href"
    }

    @test "B5712373 กรณีความยาวเกินกำหนด" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"name":"PannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannar","telnum":"0934438772","service":"d123"}'\
    http://localhost:8080/api/laundryReceipts)

    echo $json |grep "ConstraintViolationException"
    }


    @test "B5712373 กรณีserviceเป็นnull" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"name":"PannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannaraiPannar","telnum":"0934438772","service":null}'\
    http://localhost:8080/api/laundryReceipts)

    echo $json |grep "ConstraintViolationException"
    }

    @test "B5712373 กรณีใส่เบอร์โทรไม่ครบ" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"name":"Pannarai","telnum":"09344387","service":"QQ"}'\
    http://localhost:8080/api/laundryReceipts)

    echo $json |grep "LaundryReceipt"
    }

    @test "B5712373 กรณีใส่เบอร์โทรไม่ขึ้นต้นด้วยศูนย์" {
    json=$(curl -X POST -H "Content-Type:application/json"\
    -d'{"name":"Pannarai","telnum":"9344387321","service":"QQ"}'\
    http://localhost:8080/api/laundryReceipts)

    echo $json |grep "ConstraintViolationException"
    }