import axios from 'axios';

const API_URL = 'https://afrecruitingfront-webapi-prod.azurewebsites.net/api/';

export interface Hotel {
    id: string;
    name: string;
    description: string;
}

class HotelApi {
    getHotels(locationId: string) {
        return axios.get(API_URL + 'Hotel', {
            params: { location: locationId },
            headers: {
                'X-DevTours-Developer': 'JaneDoe'
            }
        });
    }
    getHotel(id: string) {
        return axios.get(API_URL + 'Hotel/' + id, {
            headers: {
                'X-DevTours-Developer': 'JaneDoe'
            }
        });
    }
}

export default new HotelApi();