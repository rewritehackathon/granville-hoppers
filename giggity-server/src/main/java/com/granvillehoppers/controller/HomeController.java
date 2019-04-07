package com.granvillehoppers.controller;

import com.granvillehoppers.model.Gig;
import com.granvillehoppers.model.Quote;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HomeController {
	private static Map<Integer,Gig> allGigs = new HashMap<>();
	static {
		Gig gig = new Gig(1, "Lyft", "Purchased");
		gig.setGiphyUrl("https://www.codot.gov/safety/seatbelts-carseats/assets/year-of-the-seat-belt/lyft.jpg/image");
		allGigs.put(1, gig);
		gig = new Gig(2, "Airbnb", "Added");
		gig.setGiphyUrl("http://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8.jpg");
		allGigs.put(2, gig);
		gig = new Gig(3, "Turo");
		gig.setGiphyUrl("https://resources.turo.com/resources/img/og-image__Hc800d192bbc42828dd5979a04eade650__.png");
		allGigs.put(3, gig);
		gig = new Gig(4, "Rover");
		gig.setGiphyUrl("https://pbs.twimg.com/profile_images/856536578725879808/D2z76ehI_400x400.jpg");
		allGigs.put(4, gig);
		gig = new Gig(5, "Postmates");
		gig.setGiphyUrl("https://postmates.com/assets/badges/pm-white-square.png");
		allGigs.put(5, gig);

	}
	@GetMapping("/")
	@CrossOrigin(origins = "http://localhost:4200")
	public String home() {
		return "Hello World";
	}
	@GetMapping("/gig/list")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Gig> list() {
		List<Gig> myGigs = new ArrayList<>();
		for(Gig gig : allGigs.values()) {
			if("Added".equals(gig.getStatus()) || "Purchased".equals(gig.getStatus())) {
				myGigs.add(gig);
			}
		}
		return myGigs;
	}
	@GetMapping("/gig/suggest")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Gig> suggest() {
		List<Gig> suggestions = new ArrayList<>();
		for(Gig gig : allGigs.values()) {
			if(!"Added".equals(gig.getStatus()) && !"Purchased".equals(gig.getStatus())) {
				suggestions.add(gig);
			}
		}
		return suggestions;
	}
	@GetMapping("/gig/quote")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Quote> quote(@RequestParam int gigId) {
		List<Quote> quotes = new ArrayList<>();
		if(allGigs.containsKey(gigId)) {
			if("Purchased".equals(allGigs.get(gigId).getStatus())) {
				quotes.add(new Quote("Coverage A - Dwelling Coverage Limit", "$217,700"));
				quotes.add(new Quote("Coverage B - Other Structure", "$21,770"));
				quotes.add(new Quote("Policy Item 3", "Covered"));
			} else {
				Quote q = new Quote("Hiscox", "98¢/night");
				q.setUrl("https://www.computing.co.uk/w-images/3ef8a302-af58-4bd6-aca3-16c170b6ff95/2/Hiscoxlogo-580x358.jpg");
				quotes.add(q);
				q = new Quote("Liberty Mutual", "83¢/night");
				q.setUrl("https://radiocms-images.us1.eldarioncloud.com/resize/750/https://storage.googleapis.com/media.mwcradio.com/mimesis/2017-01/11/LibertyMutual.jpg");
				quotes.add(q);
				q = new Quote("Munich RE", "86¢/night");
				q.setUrl("http://unfccc-clearinghouse.org/sites/default/files/styles/large/public/institution-logos/2017-09/Munich%20Re.jpg?itok=U4akua28");
				quotes.add(q);
			}
		}
		return quotes;
	}
	@GetMapping("/gig/purchase")
	@CrossOrigin(origins = "http://localhost:4200")
	public void purchase(@RequestParam int gigId) {
		if(allGigs.containsKey(gigId)) {
			Gig gig = allGigs.get(gigId);
			gig.setStatus("Purchased");
			allGigs.put(gigId, gig);
		}
	}
	@GetMapping("/gig/add")
	@CrossOrigin(origins = "http://localhost:4200")
	public void add(@RequestParam int gigId) {
		if(allGigs.containsKey(gigId)) {
			Gig gig = allGigs.get(gigId);
			gig.setStatus("Added");
			allGigs.put(gigId, gig);
		}
	}
}
