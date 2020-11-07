import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import LocationApi, { Location } from '@/api/LocationApi';

@Module({ namespaced: true })
class Locations extends VuexModule {
  public locations: Array<Location> = [];

  @Mutation
  public getLocationsSuccess(getLocation: any): void {
    this.locations = getLocation;
  }

  @Mutation
  public getLocationsFailure(): void {
    this.locations = [];
  }

  @Action
  getLocations(): void {
    LocationApi.getLocations().then(
      response => {
        this.context.commit('getLocationsSuccess', response.data);
        return Promise.resolve(response);
      },
      error => {
        this.context.commit('getLocationsFailure');
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
        return Promise.reject(message);
      }
    );
  }

}

export default Locations;