<template>
    <b-field label="Find a location" label-position="on-border">
        <b-autocomplete
            v-model="selectedLocation"
            :data="this.filteredData"
            placeholder="e.g. Paris"
            icon="magnify"
            field="name"
            clearable
            @select="selected"
            @typing="onTyping"
        >
            <template slot="empty">No results found</template>
        </b-autocomplete>
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Location } from "@/api/LocationApi";

@Component
export default class Autocomplete extends Vue {
    @Prop() private data!: Location[];
    @Prop() public selectedLocation = "";
    private filteredData = this.data;

    selected(value: Location) {
        this.$emit("update:selectedLocation", value);
        return;
    }

    onTyping(valueTyped: string) {
        this.filteredData = this.data.filter(
            location =>
                location.name.toLowerCase().indexOf(valueTyped.toLowerCase()) >=
                0
        );
    }
}
</script>