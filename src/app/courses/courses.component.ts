import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'AngularJS',
      duration: 30,
      type: 'paid',
      price: 2000.00,
      rating: 3.5,
      image: 'data:image/png;base64,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',
      description: 'AngularJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 2,
      title: 'ReactJS',
      duration: 10,
      type: 'free',
      price: 0.00,
      rating: 3.5,
      image: 'https://shethink.in/wp-content/uploads/2021/07/react.js-img.png',
      description: 'ReactJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 3,
      title: 'VueJS',
      duration: 25,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
      description: 'VueJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 4,
      title: 'NodeJS',
      duration: 30,
      type: 'paid',
      price: 300.00,
      rating: 3.5,
      image: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=700&fm=webp',
      description: 'NodeJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 5,
      title: 'ExpressJS',
      duration: 20,
      type: 'free',
      price: 0.00,
      rating: 3.5,
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png',
      description: 'ExpressJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 6,
      title: 'MongoDB',
      duration: 10,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
      description: 'MongoDB is a JavaScript framework for building user interfaces.'
    },
    {
      id: 7,
      title: 'MySQL',
      duration: 5,
      type: 'free',
      price: 100.00,
      rating: 3.5,
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg',
      description: 'MySQL is a JavaScript framework for building user interfaces.'
    },
    {
      id: 8,
      title: 'PostgreSQL',
      duration: 8,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://digitalis.io/wp-content/uploads/2020/12/PostgreSQL600x340.jpg',
      description: 'PostgreSQL is a JavaScript framework for building user interfaces.'
    }
  ]
}
