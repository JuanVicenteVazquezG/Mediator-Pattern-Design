import Seller from './seller.js';
import Buyer from './buyer.js';
import Auction from './auction.js';



const juan = new Buyer('Juan');
const peter = new Buyer('Peter');
const karen = new Buyer('Karen');

const firstSeller = new Seller('Sellers S.A.');

const auction = new Auction();

auction.register(juan);
auction.register(peter);
auction.register(karen);

firstSeller.offer('Mustang 1966', 8000);
juan.offer(3500, juan);
peter.offer(4000, peter);
karen.offer(10000, karen);
firstSeller.sold(karen.name);


