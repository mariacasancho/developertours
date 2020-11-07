import axios from 'axios';

const API_URL = 'https://afrecruitingfront-webapi-prod.azurewebsites.net/api/';

export interface Location {
    id: string;
    name: string;
}

class LocationApi {
    getLocations() {
        return axios.get(API_URL + 'Location', {
            headers: {
                'X-DevTours-Developer': 'JaneDoe'
            }
        });
    }
}

export default new LocationApi();