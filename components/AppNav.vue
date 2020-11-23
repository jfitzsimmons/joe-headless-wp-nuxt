<template>
  <div class="nav">
    <div class="plaid nav__home">
      <NuxtLink to="/"> <app-icon></app-icon>Blog</NuxtLink>
    </div>
    <ul>
      <li class="plaid nav__link">
        <NuxtLink class="plaid__link" to="/about">About</NuxtLink>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="`plaid nav__link ${[
          category.id === selectedTag ? activeClass : '',
        ]}`"
      >
        <nuxt-link class="plaid__link" :to="`/category/${category.slug}`">{{
          category.name
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon,
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  background: #ecf8fe;
  top: 0;
  display: flex;
  flex-wrap: wrap;
}

.nav__home {
  /*
position: absolute;
top: 0;
*/
  max-height: 10vw;
  font-size: 2rem;
  max-width: 24vw;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: -2vw;
}

div {
  align-items: center;
  display: flex;
  width: 100%;
}

ul {
  padding: 0.5rem;
  display: inline-flex;
  justify-content: flex-end;
  align-self: start;
  flex: 1;
  background: #ecf8fe;
}

.nav__link {
  margin-left: 2vw;
  font-size: 1em;
}
</style>
