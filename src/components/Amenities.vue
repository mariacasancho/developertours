<template>
    <div class="amenities">
        <b-checkbox
            v-model="this.data.breakfast_included"
            native-value="this.data.breakfast_included"
            disabled="true"
        >Breakfast Included</b-checkbox>
        <b-checkbox
            v-model="this.data.free_cancellation"
            native-value="this.data.free_cancellation"
            disabled="true"
        >Free Cancellation</b-checkbox>
        <b-checkbox
            v-model="this.data.free_parking"
            native-value="this.data.free_parking"
            disabled="true"
        >free parking</b-checkbox>
        <b-checkbox
            v-model="this.data.fitness"
            native-value="this.data.fitness"
            disabled="true"
        >fitness</b-checkbox>
        <b-checkbox v-model="this.data.pool" native-value="this.data.pool" disabled="true">pool</b-checkbox>
        <b-checkbox
            v-model="this.data.free_wifi"
            native-value="this.data.free_wifi"
            disabled="true"
        >free wifi</b-checkbox>
    </div>
</template>

<style>
.amenities .b-checkbox.checkbox[disabled] {
    opacity: 1;
    cursor: auto;
}
.amenities .b-checkbox.checkbox[disabled] .control-label {
    color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Amenities } from "../api/HotelApi";

@Component
export default class AmenitiesComponent extends Vue {
    @Prop() private data!: Amenities;
}
</script>