package com.example.demo;
import javax.persistence.OneToOne;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.*;


import lombok.Data;

@Data
@Entity
public class RefundSlip {
	private @Id @GeneratedValue Long id;
	@NotNull
	private String name;
	@OneToOne
	private CancelRoom cancelbill;
	@NotNull
	@Pattern(regexp = "B\\d{4}")
	private String bankaccountnum;
	private String bank;



	private RefundSlip() {}

	public RefundSlip(String name,CancelRoom cancelbill,String bankaccountnum,String bank) {
		this.name = name;
		this.cancelbill = cancelbill;
		this.bankaccountnum = bankaccountnum;
		this.bank = bank;

	}
}
