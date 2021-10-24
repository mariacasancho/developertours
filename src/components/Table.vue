<template>
    <b-table
        :data="tableData"
        :narrowed="true"
        :mobile-cards="false"
        @click="onRowClick"
    >
        <b-table-column field="id">
            <template v-slot="props">{{ props.row.id }}</template>
        </b-table-column>
        <b-table-column field="name">
            <template v-slot="props">{{ props.row.name }}</template>
        </b-table-column>
        <b-table-column field="description">
            <template v-slot="props">{{ props.row.description }}</template>
        </b-table-column>
        <b-table-column field="images">
            <template v-slot="props">
                <img :src="props.row.images[0].hires" />
            </template>
        </b-table-column>
    </b-table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Hotel } from "../api/HotelApi";

@Component
export default class Table extends Vue {
    @Prop() private data!: Hotel[];

    get tableData() {
        return this.data;
    }

    onRowClick(data: any) {
        this.$router.push({ name: "Hotel", params: { id: data.id } });
    }
}
</script>