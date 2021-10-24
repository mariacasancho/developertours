<template>
    <div class="rooms">
        <h3 class="title is-5">Rooms</h3>
        <ul id="rooms">
            <li v-for="item in data" :key="item.id" class="room">
                <h6 class="title is-6">{{ item.name }}</h6>
                <b-image
                    class="room-image"
                    :src="item.images[0].hires"
                    ratio="601by235"
                    :rounded="true"
                ></b-image>
                {{ item.description }}
                <div>
                    <b-checkbox
                        v-model="item.amenities.terrace"
                        native-value="item.amenities.terrace"
                        disabled="true"
                        >terrace</b-checkbox
                    >
                    <b-checkbox
                        v-model="item.amenities.balcony"
                        native-value="item.amenities.balcony"
                        disabled="true"
                        >balcony</b-checkbox
                    >
                    <b-checkbox
                        v-model="item.amenities.seaside_view"
                        native-value="item.amenities.seaside_view"
                        disabled="true"
                        >seaside view</b-checkbox
                    >
                    <b-checkbox
                        v-model="item.amenities.garden_view"
                        native-value="item.amenities.garden_view"
                        disabled="true"
                        >garden view</b-checkbox
                    >
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
.room-image {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    height: 80%;
    width: 80%;
}
.rooms {
    margin: 10px;
}
.rooms .b-checkbox.checkbox[disabled] {
    opacity: 1;
    cursor: auto;
}
.rooms .b-checkbox.checkbox[disabled] .control-label {
    color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class RoomsComponent extends Vue {
    @Prop() private data!: any;
}
</script>