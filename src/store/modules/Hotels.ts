import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import HotelApi from '../../api/HotelApi';

@Module({ namespaced: true })
class Hotels extends VuexModule {
  public hotels: Array<any> = [];
  public hotel: any = {};

  @Mutation
  public getHotelsSuccess(getHotel: any): void {
    this.hotels = getHotel;
  }

  @Mutation
  public getHotelsFailure(): void {
    this.hotels = [];
  }

  @Mutation
  public getHotelSuccess(getHotel: any): void {
    this.hotel = getHotel;
  }

  @Mutation
  public getHotelFailure(): void {
    this.hotel = [];
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
        this.context.commit('getHotelSuccess', response.data);
        return Promise.resolve(response);
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