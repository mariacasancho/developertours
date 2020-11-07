<template>
    <b-table :data="tableData" :columns="columns" :narrowed="true" :mobile-cards="false">
        <template slot="header"></template>
    </b-table>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Table extends Vue {
    @Prop() private data!: any[];

    private columns = [
        {
            field: "id"
        },
        {
            field: "name"
        },
        {
            field: "description"
        }
    ];

    get tableData() {
        return this.data;
    }
}
</script>