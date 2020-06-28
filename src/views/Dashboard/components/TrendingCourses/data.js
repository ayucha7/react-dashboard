import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Apache Spark',
    imageUrl: '/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'React Developer Course',
    imageUrl: '/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Big Data Crash Course',
    imageUrl: '/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Machine Learning',
    imageUrl: '/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'DevOps Basics',
    imageUrl: '/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];
