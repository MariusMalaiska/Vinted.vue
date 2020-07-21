<template>
  <div class="search">
    <div class="container">
      <search-header />
      <card-item
        v-for="{ id, img, price, size, height, width, brand } in items"
        :key="id"
        :img="img"
        :id="id"
        :price="price"
        :size="size"
        :height="height"
        :width="width"
        :brand="brand"
      />
    </div>
    <shop-items />
  </div>
</template>




<script>
import SearchHeader from "@/components/shop/SearchHeader.vue";
// import ShopItems from "@/components/shop/ShopItems.vue";
import CardItem from "@/components/common/CardItem.vue";
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("shop/fetchItems");
  },
  name: "Search",
  components: {
    SearchHeader,
    CardItem
  },
  computed: {
    // ...mapGetters({
    //   items: "shop/getHomeItems"
    // }),
    ...mapGetters({
      items: "shop/getSelectedItems"
    })
  }
};
</script>

<style lang="scss" scoped>
.search {
  overflow: auto;
  background-color: $darkGray;
}
</style>
