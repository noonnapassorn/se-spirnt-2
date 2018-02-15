package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
	private final RoomRepository roomrepository;
	private final RoomnumberRepository roomnumberRepository;
	private final BallroomRepository ballroomRepository;
	private final ReservationReceiptRepository reservationReceiptRepository;
	private final FoodRepository foodRepository;
	private final BeverageRepository beverageRepository;
	private final CancelRoomRepository cancelRoomRepository;
	

    @Autowired
    public DatabaseLoader(RoomRepository roomrepository,RoomnumberRepository roomnumberRepository,BallroomRepository repository,ReservationReceiptRepository reservationReceiptRepository,FoodRepository foodRepository,BeverageRepository beverageRepository,CancelRoomRepository cancelRoomRepository) {
		this.roomrepository = roomrepository;
		this.roomnumberRepository = roomnumberRepository;
    	this.ballroomRepository = repository;
		this.reservationReceiptRepository = reservationReceiptRepository;
		this.foodRepository =  foodRepository;
		this.beverageRepository = beverageRepository;
		this.cancelRoomRepository = cancelRoomRepository;
    }

	@Override
	public void run(String... strings) throws Exception {
		this.ballroomRepository.save(new Ballroom("MarooterBallroomI","Marooter Grand Ballroom I","400-500 คน"));
		this.ballroomRepository.save(new Ballroom("MarooterBallroomII","Marooter Grand Ballroom II","500 คน"));
		this.ballroomRepository.save(new Ballroom("MarooterBallroomIII","Marooter Grand Ballroom III","200-250 คน"));

		this.roomrepository.save(new Room("Deluxe", 1300.00));
		this.roomrepository.save(new Room("Super Deluxe", 1600.00));
		this.roomrepository.save(new Room("Gremier Deluxe", 2000.00));
		this.roomrepository.save(new Room("Premier Grand Deluxe", 2350.00));

		this.roomnumberRepository.save(new Roomnumber("A01"));
		this.roomnumberRepository.save(new Roomnumber("A02"));
		this.roomnumberRepository.save(new Roomnumber("A03"));
		this.roomnumberRepository.save(new Roomnumber("A04"));
		this.roomnumberRepository.save(new Roomnumber("A05"));

		this.roomnumberRepository.save(new Roomnumber("S01"));
		this.roomnumberRepository.save(new Roomnumber("S02"));
		this.roomnumberRepository.save(new Roomnumber("S03"));
		this.roomnumberRepository.save(new Roomnumber("S04"));
		this.roomnumberRepository.save(new Roomnumber("S05"));

		this.roomnumberRepository.save(new Roomnumber("G01"));
		this.roomnumberRepository.save(new Roomnumber("G02"));
		this.roomnumberRepository.save(new Roomnumber("G03"));
		this.roomnumberRepository.save(new Roomnumber("G04"));
		this.roomnumberRepository.save(new Roomnumber("G05"));

		this.roomnumberRepository.save(new Roomnumber("P01"));
		this.roomnumberRepository.save(new Roomnumber("P02"));
		this.roomnumberRepository.save(new Roomnumber("P03"));
		this.roomnumberRepository.save(new Roomnumber("P04"));
		this.roomnumberRepository.save(new Roomnumber("P05"));

		


		this.foodRepository.save(new Food("F01","set1",299.0,"ซี่โครงหมูอ่อนตุ๋นยาจีน/แฮกึ๋นทอด + พลัมซอส/ปลาดุกทอดกรอบผัดเผ็ดพริกไทยอ่อน/ข้าวหอมมะลิ/ขนมไทย หรือ ผลไม้รวม/ชา หรือ กาแฟ"));
		this.foodRepository.save(new Food("F02","set2",399.0,"ซุปใสไข่ตุ๋น/ยำมะเขือเผาเห็ดหอม/เนื้อปลาทอดกระเทียมพริกไทย/ข้าวหอมมะลิ/ขนมไทย หรือ ผลไม้รวม"));
		this.foodRepository.save(new Food("F03","set3",499.0,"เป็ดตุ๋นฟักเขียวมะนาวดอง/ห่อหมกปลาช่อนใบโหระพา/ลูกชิ้นกุ้งผัดผักโสภณ/ข้าวหอมมะลิ/ขนมไทย หรือ ผลไม้รวม"));
		this.foodRepository.save(new Food("F04","set4",699.0,"ต้มโคล้งไก่บ้าน/ยำถั่วพูไข่ต้ม/เนื้อสันในผัดน้ำมันหอย/ข้าวหอมมะลิ/ขนมไทย หรือ ผลไม้รวม"));

		this.beverageRepository.save(new Beverage("BR01","Ice Tea",40.0));
		this.beverageRepository.save(new Beverage("BR02","Ice Coffe",40.0));
		this.beverageRepository.save(new Beverage("BR03","Green Tea",40.0));
		this.beverageRepository.save(new Beverage("BR04","Lemon Tea",40.0));



	}
}
