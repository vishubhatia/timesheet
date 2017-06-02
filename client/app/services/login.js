import apisauce from '../lib/apisauce';
import appConfig from '../config/AppConfig';
const RESOURCE = '/Employees/login';

export const create = (baseUrl = appConfig.baseUrl) => {
  const api = apisauce(baseUrl);
  const loginUser = () => {
    return api.get(RESOURCE);
  }
}
