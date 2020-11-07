import axios from 'axios';

const API_URL = 'https://afrecruitingfront-webapi-prod.azurewebsites.net/api/';

export interface Hotel {
    id: string;
    name: string;
    description: string;
    amenities: Amenities;
    images: Array<ImageInterface>;
}

export interface ImageInterface {
    hires: string;
    lowres: string;
}

export interface Amenities {
    breakfast_included: boolean;
    free_cancellation: boolean;
    free_parking: boolean;
    fitness: boolean;
    pool: boolean;
    free_wifi: boolean;
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