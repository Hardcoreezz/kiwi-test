import axios, {AxiosResponse} from 'axios'

interface ILocationResponse {
  locations: any[];
  meta: any;
}

class Api {
  async getLocations(term: string) {
    return (await axios.get(`https://api.skypicker.com/locations?term=${term}&location_types=airport`) as AxiosResponse<ILocationResponse>).data.locations;
  }
}

export default new Api();
