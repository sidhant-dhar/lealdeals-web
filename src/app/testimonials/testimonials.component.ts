import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
regularDistribution = 100/3 + '%';
  constructor() { }

  ngOnInit(): void {
  }
  cards = [
    {
      location: 'Legal',
      description: 'You know I’m automatically attracted to beautiful—I just start kissing them. It’s like a magnet. Just kiss. I don’t even wait. And when you’re a star, they let you do it. You can do anything. Grab them by the p**sy. You can do anything. ',
      name: 'Jai Shri',
      img: '../assets/apartment.jpg'
    },
    {
      location: 'Buy/Sell',
      description: 'If she gets to pick her judges—nothing you can do, folks. Although, the Second Amendment people. Maybe there is. I don’t know.',
      name: 'Donald Trump',
      img: '../assets/apartment.jpg'
    },
    {
      location: 'Rent/Manage',
      description: 'When Iran, when they circle our beautiful destroyers with their little boats, and they make gestures at our people that they shouldn’t be allowed to make, they will be shot out of the water.',
      name: 'Dudi',
      img: '../assets/apartment.jpg'
    }

  ];
}

