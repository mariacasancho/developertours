import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import LocationApi from '../../api/LocationApi';

@Module({ namespaced: true })
class Locations extends VuexModule {
    public locations: Array<any> = [];

    @Mutation
    public getLocationsSuccess(getLocation: any): void {
        console.log('locasucess');
        this.locations = getLocation;
    }

    @Mutation
    public getLocationsFailure(): void {
        this.locations = [];
    }

    @Action
    getLocations(): void {
        console.log('action');
        LocationApi.getLocations().then(
            locations => {
                this.context.commit('getLocationsSuccess', locations);
                return Promise.resolve(locations);
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