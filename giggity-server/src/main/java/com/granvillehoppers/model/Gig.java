package com.granvillehoppers.model;

public class Gig {
	int id;
	String name;
	String giphyUrl;
	String status;

	public Gig(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public Gig(int id, String name, String status) {
		this.id = id;
		this.name = name;
		this.status = status;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGiphyUrl() {
		return giphyUrl;
	}

	public void setGiphyUrl(String giphyUrl) {
		this.giphyUrl = giphyUrl;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
