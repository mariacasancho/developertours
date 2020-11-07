<template>
    <div>
        <h1 class="title">{{this.hotelDetail.name}}</h1>
        <h2 class="subtitle">{{this.hotelDetail.location.name}}</h2>
        <b-carousel :indicator-inside="false">
            <b-carousel-item v-for="(item, i) in 5" :key="i">
                <span class="image">
                    <img :src="getImgUrl(i)" />
                </span>
            </b-carousel-item>
            <template slot="indicators" slot-scope="props">
                <span class="al image">
                    <img :src="getImgUrl(props.i)" :title="props.i" />
                </span>
            </template>
        </b-carousel>
        <Amenities v-bind:data="this.hotelDetail.amenities" />
        <div>{{this.hotelDetail.description}}</div>
        <Rooms v-bind:data="this.hotelDetail.rooms" />
    </div>
</template>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Amenities from "@/components/Amenities.vue";
import Rooms from "@/components/Rooms.vue";

const Hotels = namespace("Hotels");

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import { Hotel } from "../api/HotelApi";

Vue.use(Buefy);

@Component({
    components: {
        Amenities,
        Rooms
    }
})
export default class HotelView extends Vue {
    @Prop() private id = this.$route.params.id;

    @Hotels.State("hotel")
    private hotelDetail!: Hotel;

    @Hotels.Action
    private getHotel!: (id: string) => Array<any>;

    created() {
        this.getHotel(this.id);
        console.log("created", this.hotelDetail, this.hotelDetail.name);
    }

    getImgUrl(id: number) {
        console.log(this.hotelDetail.images[id], id);
        return this.hotelDetail.images[id].hires;
    }
}
</script>
