<template>
  <nav class="header__following">
    <div class="container">
      <ul>
        <li>
          <catalog-dropdown title="Moterški" :items="categories.women" />
        </li>
        <li>
          <catalog-dropdown title="Vyriški" :items="categories.man" />
        </li>
        <li>
          <catalog-dropdown title="Apie mus" :items="categories.about" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import CatalogDropdown from "@/components/partials/CatalogDropdown";
import { mapGetters } from "vuex";

export default {
  name: "navbarfollowing",
  components: { CatalogDropdown },
  // created() {
  //   console.log(this.categories);
  // },
  // computed: {
  //   categories() {
  //     return this.$store.getters.getCategories;
  //   }
  // }
  computed: {
    ...mapGetters({
      categories: "shop/getCategories"
    })
  }
};
</script>

<style lang="scss" scoped>
.header__following {
  position: fixed;
  display: flex;
  align-items: center;
  top: 54px;
  width: 100%;
  height: 45px;
  background-color: #fff;
  border-bottom: 2px solid #ececec;
  z-index: 1;

  ul {
    display: flex;
    list-style: none;
    align-items: right;
    // justify-content: space-between;
    padding: unset;
    margin: unset;
  }
}
</style>
