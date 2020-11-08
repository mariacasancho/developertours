<template>
    <div class="home">
        <SearchBar />
        <Table v-bind:data="hotelslist" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Table from "@/components/Table.vue";
import SearchBar from "@/components/SearchBar.vue";
import { Hotel } from "../api/HotelApi";

const Hotels = namespace("Hotels");

@Component({
    components: {
        SearchBar,
        Table
    }
})
export default class Home extends Vue {
    @Hotels.State("hotels")
    private hotelslist!: Array<Hotel>;
}
</script>
