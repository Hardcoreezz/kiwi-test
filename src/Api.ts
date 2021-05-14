import axios, {AxiosResponse} from 'axios'
import {ISearch} from './components/SearchForm/SearchForm'

interface ILocationResponse {
  locations: any[];
  meta: any;
}

class Api {
  async getLocations(term: string) {
    return (await axios.get(`https://api.skypicker.com/locations?term=${term}&location_types=airport`) as AxiosResponse<ILocationResponse>).data.locations;
  }
  async getFlights(queryParams: ISearch) {
    return (await axios.get(`https://api.skypicker.com/flights?v=3&partner=skypicker&locale=en&flyFrom=${queryParams.from.id}&to=${queryParams.to.id}&dateFrom=${queryParams.dateFrom}${queryParams.dateTo ? `&dateTo=${queryParams.dateTo}` : ''}`) as AxiosResponse).data;
  }
}

export default new Api();
