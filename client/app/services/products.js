import apisauce from '../lib/apisauce';
import appConfig from '../config/AppConfig';
const RESOURCE = 'products';

export const create = (baseUrl = appConfig.baseUrl) => {
  const api = apisauce(baseUrl);
  const getProducts = () => {
    return api.get(RESOURCE);
  }
}
