import { Component, OnInit } from "@angular/core";

@Component({
  selector: "testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"],
})
export class TestimonialsComponent implements OnInit {
  regularDistribution = 100 / 3 + "%";
  constructor() {}

  ngOnInit(): void {}
  cards = [
    {
      location: "Ontario,Canada",
      description:
        "I have nothing but praise for Lealdeals, and especially Sanjay. He was on my case since Day 1, and managed to make me understand how to get the best value for money for my Indian property. The entire process was seamless and I have nothing but the highest of praises for him and his team.",
      name: "Sh. Naushad Alam",
      img: "assets/naushadTestimonial.jpg",
    },
    {
      location: "Washington DC,USA",
      description:
        "For the past one and a half year, Lealdeals has been managing my house in New Delhi. It is my retirement home and I was worried that it would become dilapidated over time but Lealdeals have been a lifesaver in this regard. Initially I was hesistant but after doing my research, Lealdeals seem to be the most professional and complete service out there.",
      name: "Shashidhar VR",
      img: "assets/shashiTestimonials.jpg",
    },
    {
      location: "Pennsylvania,USA",
      description:
        "As a someone who has immigrated recently and is not able to get my parents back here to the US, Lealdeals has been a lifesaver. Their Parent Care packages allow me to pay for electricity and water bills for my parents remotely, and I can rest assured that help is just one phone call away incase of an emergency.",
      name: "Dr. Vitasta Bambezai",
      img: "assets/shashiTestimonials.jpg",
    },
  ];
}
