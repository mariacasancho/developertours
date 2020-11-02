<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="getLoca()">get locations</button>
        <div v-if="locationslist">{{locationslist}}</div>
        <button @click="getHotelList('058aee29-cf03-497b-beeb-d14db6c6acbd')">get Hotels</button>
        <div v-if="hotelslist">{{hotelslist}}</div>
        <button @click="getHotel('1f626c96-34a4-4c38-bf9a-e22c74337680')">get Hotel</button>
        <div v-if="hotelslist">{{hotelDetail}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Locations = namespace("Locations");
const Hotels = namespace("Hotels");

@Component
export default class About extends Vue {
    @Locations.State("locations")
    private locationslist!: Array<any>;

    @Locations.Action
    private getLocations!: () => Array<any>;

    getLoca() {
        console.log("getloca");
        this.getLocations();
    }

    @Hotels.State("hotels")
    private hotelslist!: Array<any>;

    @Hotels.Action
    private getHotels!: (location: string) => Array<any>;

    getHotelList(location: string) {
        console.log("gethotel");
        this.getHotels(location);
    }

    @Hotels.State("hotel")
    private hotelDetail!: any;

    @Hotels.Action
    private getHotel!: (id: string) => Array<any>;

    getHo(id: string) {
        console.log("gethotel");
        this.getHotel(id);
    }
}
</script>
