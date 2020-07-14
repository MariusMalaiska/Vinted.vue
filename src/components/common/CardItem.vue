<template>
  <div class="card" @click="$router.push({path: 'item/'+ id})">
    <div>
      <img :src="img" />
    </div>
    <div>
      <div class="card__price">{{price}}</div>
      <div class="text-muted">{{size}} / {{width}} / {{height}}</div>
      <div class="card__brand">{{brand}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "img", "price", "size", "height", "width", "brand"]
};
</script>

<style scoped lang="scss">
.card {
  display: grid;
  width: 100%;
  grid-template-rows: 7fr 2fr;
  cursor: pointer;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  &__price {
    font-weight: bold;
    font-size: 1.17rem;
    &:after {
      content: " €";
    }
  }
  .price + * {
    font-style: italic;
  }
  &__brand {
    font-weight: bold;
  }
}
</style>