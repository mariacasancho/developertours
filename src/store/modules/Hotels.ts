import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import HotelApi, { Hotel } from '../../api/HotelApi';

@Module({ namespaced: true })
class Hotels extends VuexModule {
  public hotels: Array<Hotel> = [];
  public hotel: Hotel = {
    id: '',
    name: '',
    description: '',
    images: [],
    amenities: {
      breakfast_included: false,
      free_cancellation: false,
      free_parking: false,
      fitness: false,
      pool: false,
      free_wifi: false,
    }
  };

  @Mutation
  public getHotelsSuccess(getHotel: Array<Hotel>): void {
    this.hotels = getHotel;
  }

  @Mutation
  public getHotelsFailure(): void {
    this.hotels = [];
  }

  @Mutation
  public getHotelSuccess(getHotel: Hotel): void {
    this.hotel = getHotel;
  }

  @Mutation
  public getHotelFailure(): void {
    this.hotel = {
      id: '',
      name: '',
      description: '',
      images: [],
      amenities: {
        breakfast_included: false,
        free_cancellation: false,
        free_parking: false,
        fitness: false,
        pool: false,
        free_wifi: false,
      }
    };
  }

  @Action
  getHotels(location: string): void {
    HotelApi.getHotels(location).then(
      response => {
        this.context.commit('getHotelsSuccess', response.data);
        return Promise.resolve(response);
      },
      error => {
        this.context.commit('getHotelsFailure');
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return Promise.reject(message);
      }
    );
  }


  @Action
  getHotel(id: string): void {
    HotelApi.getHotel(id).then(
      response => {
        // const hoteldata: Hotel = {
        //   amenities: {
        //     breakfast_included: response.data.amenities.breakfast_included,
        //     freeCancellation: response.data.amenities.free_cancellation,
        //     freeParking: response.data.amenities.free_parking,
        //     fitness: response.data.amenities.fitness,
        //     pool: response.data.amenities.pool,
        //     freeWifi: response.data.amenities.free_wifi
        //   },
        //   id: response.data.id,
        //   name: response.data.name,
        //   description: response.data.description,
        //   images: response.data.images
        // };

        // console.log('gethotel', hoteldata);
        this.context.commit('getHotelSuccess', response.data);
        return Promise.resolve(response.data);
      },
      error => {
        this.context.commit('getHotelFailure');
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return Promise.reject(message);
      }
    );
  }

}

export default Hotels;