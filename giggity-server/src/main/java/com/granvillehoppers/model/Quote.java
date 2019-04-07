package com.granvillehoppers.model;

public class Quote {
	String companyName;
	String price;
	String url;

	public Quote(String companyName, String price) {
		this.companyName = companyName;
		this.price = price;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
