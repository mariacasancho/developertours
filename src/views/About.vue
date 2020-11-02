<template>
    <div class="about">
        <h1>This is an about page</h1>
        <button @click="getLoca()">get locations</button>
        <div v-if="locationslist">{{locationslist}}</div>
        <button @click="getHotel()">get Hotels</button>
        <div v-if="hotelslist">{{hotelslist}}</div>
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
    private getHotels!: () => Array<any>;

    getHotel() {
        console.log("gethotel");
        this.getHotels();
    }
}
</script>
