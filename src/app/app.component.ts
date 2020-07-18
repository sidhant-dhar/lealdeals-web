import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { ScrollDispatcher } from "@angular/cdk/scrolling";
import { DOCUMENT } from "@angular/common";
import * as AOS from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "lealdeals";
  regularDistribution = 100 / 3 + "%";
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.getElementById("headerId").classList.add("active");
    } else {
      document.getElementById("headerId").classList.remove("active");
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  cards = [
    {
      title: "Buy Real Estate",
      description:
        "Whether as an investment or to buy a retirement home, the Indian real estate market is always in demand. However, it may get confusing and time consuming to scout for properties, discuss with brokers etc.",
      subtitle:
        "LealDeals does the heavy lifting for you, providing you with curated lists based on your preferences,location and budget and assigning you a personal representative to ensure a hassle free experience. ",
      img: "assets/buyCard.png",
      imgCarousel: "assets/carouselBuy.jpg",
    },

    {
      title: "Sell Real Estate",
      description:
        "Many NRIs living out of India have assets in India, but wish to offload and monetize them. However, selling inherited or self-acquired property is a complex procedure due to the byzantine laws and endless red tape of Indian bureaucracy.",
      subtitle:
        "Lealdeals helps provide End to End solutions, from evaluating market prices to handling transfer of funds. With rich expertise in asset management, working with Lealdeals ensures that you are able to unlock the maximum value for your Properties. ",
      buttonText: "Explore",
      img: "assets/apartment.jpg",
      imgCarousel: "assets/carouselSell.jpg",
    },

    {
      title: "Old Parent Care",
      description:
        "As NRIs who are living outside India but who still have parents in India, we often worry about the well being of our parents and wish to support them in some way. However, it is important that the efforts be directed in a focused and efficent manner so that an improvement in the quality of life of the parents is observed.",
      subtitle:
        "Lealdeals serves as a point of contact between you and your parents, helping in utility bill payments, Long term/Short term rehabilitation and connecting them with necessary lifestyle assisstance providers.",
      buttonText: "Explore",
      img: "assets/oldparentHeading.jpg",
      imgCarousel: "assets/carouselOldage.jpg",
    },

    {
      title: "Legal Assistance",
      description:
        "There are multitudes of services that LealDeals provides. We offer Land transfer, Ownership transfer, Property Partition, Succession Certificates / WILL / POA, Repatriation of Indian Property / Funds, Illegal Transfer / Sale / Occupation related issues, Land / Property disputes, NRI Family Disputes, Landlord Tenant disputes etc.  ",
      subtitle:
        "Our team of legal experts wil help you in resolving all your complexities effortlessly. With deep expertise in Indian law coupled with rich experiemce that Lealdeals brings to the table, you can rest assured that your legal troubles will be resolved efficiently and judiciously.",
      img: "assets/legalCard.jpg",
      imgCarousel: "assets/carouselLegal.jpg",
    },

    {
      title: "Property Management",
      description:
        "As a NRI, it is very tough to maintain a property in India, be it commercial real estate or an ancestral home. It is well known that assets can lose upto 20% of their value YoY due to neglect. Instead of depreciating in value, assets can be used to generate income by giving them out on rent.",
      subtitle:
        "Lealdeals' complete Property Management suite helps you in monetizing your assets and helps in maintenance of your properties so that they appreciate in value.",
      img: "assets/propertyManagementCard.jpg",
      imgCarousel: "assets/carouselManagement.jpg",
    },

    {
      title: "Tax Compliance",
      description:
        " Is My Income Earned Abroad Taxable? Am I Required to File My Income Tax Return in India? When is the Last Date to File Income Tax Return in India? Do NRIs Have to Pay Advance Tax? These are some of the questions ever NRI faces come tax season.",
      subtitle:
        "NRIs often get confused due to the complicated tax compliance structures of India. With years of expertise in filing returns of NRIs, Lealdeals offers services at reasonable prices that help save you time, effort and money simultaneously.  ",
      buttonText: "Explore",
      img: "assets/taxCard.jpg",
      imgCarousel: "assets/carouselTax.jpg",
    },
  ];

  public ngOnInit() {
    AOS.init();
  }
}
