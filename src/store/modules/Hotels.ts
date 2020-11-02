import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import HotelApi from '../../api/HotelApi';

@Module({ namespaced: true })
class Hotels extends VuexModule {
  public hotels: Array<any> = [];

  @Mutation
  public getHotelsSuccess(getHotel: any): void {
    console.log('hotelsucess');
    this.hotels = getHotel;
  }

  @Mutation
  public getHotelsFailure(): void {
    this.hotels = [];
  }

  @Action
  getHotels(): void {
    console.log('action');
    HotelApi.getHotels('058aee29-cf03-497b-beeb-d14db6c6acbd').then(
      hotels => {
        this.context.commit('getHotelsSuccess', hotels);
        return Promise.resolve(hotels);
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

}

export default Hotels;