<template>
    <b-table
        :data="tableData"
        :columns="columns"
        :narrowed="true"
        :mobile-cards="false"
        @click="onRowClick"
    >
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

    onRowClick(data: any) {
        console.log("click", data);
        this.$router.push({ name: "Hotel", params: { id: data.id } });
    }
}
</script>