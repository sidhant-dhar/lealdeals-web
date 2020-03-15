import { Component, HostListener, Inject} from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { DOCUMENT } from "@angular/common";
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lealdeals';
  regularDistribution = 100/3 + "%";
  constructor(private scrollDispatcher: ScrollDispatcher, @Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('window:scroll', [])

  onWindowScroll() {
    if (document.body.scrollTop > 200 ||     
    document.documentElement.scrollTop > 200) {
      document.getElementById('headerId').classList.add('active');
        }
    else {
      document.getElementById('headerId').classList.remove('active');
    }
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
}

cards = [
  {
    title: 'Legal',
    description: 'Get expert legal help for inheritance, tax compliance and various other legal problems. Our team of legal experts wil help you in resolving all your complexities effortlessly. ',
    subtitle: 'A one-stop solution for all your legal needs',
    img: '../assets/apartment.jpg'
  },
  {
    title: 'Buy/Sell',
    description: 'Whether as an investment or to buy a retirement home, the Indian real estate market is always in demand. However, it may get confusing and time consuming to scout for properties, discuss with brokers etc. LealDeals does the heavy lifting for you, providing you with curated lists based on your preferences,location and budget',
    subtitle: 'Expert assisstance for  ',
    img: '../assets/apartment.jpg'
  },
  {
    title: 'Rent/Manage',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    subtitle: 'Explore',
    img: '../assets/apartment.jpg'
  },
  {
    title: 'Rent utilties',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Explore',
    img: '../assets/apartment.jpg'
  },
  {
    title: 'Wills',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Explore',
    img: '../assets/apartment.jpg'
  },
  {
    title: 'Old Parent Care',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Explore',
    img: '../assets/apartment.jpg'
  },

];

ngOnInit() {
  AOS.init();
}


}
