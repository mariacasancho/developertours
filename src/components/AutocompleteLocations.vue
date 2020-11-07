<template>
    <b-field label="Find a location" label-position="on-border">
        <b-autocomplete
            v-model="selectedLocation"
            :data="this.data"
            placeholder="e.g. Paris"
            icon="magnify"
            field="name"
            clearable
            @select="selected"
        >
            <template slot="empty">No results found</template>
        </b-autocomplete>
    </b-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Table extends Vue {
    @Prop() private data!: any[];
    @Prop() public selectedLocation = "";

    selected(value: any) {
        console.log("Selected", value.name);
        this.$emit("update:selectedLocation", value);
        return;
    }
}
</script>