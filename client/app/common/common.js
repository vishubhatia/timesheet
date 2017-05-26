import angular from 'angular';
import Navbar from './navbar/navbar';
import productThumbnail from './productThumbnail/productThumbnail';
import productListItem from './productListItem/productListItem';
import panel from './panel/panel';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  User,
  productThumbnail,
  productListItem,
  panel
])
  
.name;

export default commonModule;
