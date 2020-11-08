<template>
    <div :class="$style.searchBar">
        <AutocompleteLocations v-bind:data="locationslist" :selectedLocation.sync="locationItem" />
        <b-button type="is-primary" @click="onSearch">Primary</b-button>
    </div>
</template>

<style module>
.searchBar {
    display: flex;
    justify-content: center;
}
button {
    margin-left: 10px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import AutocompleteLocations from "@/components/AutocompleteLocations.vue";

const Locations = namespace("Locations");
const Hotels = namespace("Hotels");

@Component({
    components: {
        AutocompleteLocations
    }
})
export default class SearchBar extends Vue {
    private locationItem: any;

    @Locations.State("locations")
    private locationslist!: Array<any>;

    @Locations.Action
    private getLocations!: () => Array<any>;

    async created() {
        await this.getLocations();
    }

    onSearch() {
        this.getHotels(this.locationItem.id);
    }

    @Hotels.Action
    private getHotels!: (location: string) => Array<any>;
}
</script>
