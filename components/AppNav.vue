<template>
  <div class="nav">
    <ul>
      <li class="plaid nav__home">
        <NuxtLink exact to="/"> <app-icon></app-icon>BlogName </NuxtLink>
      </li>
      <li class="plaid">
        <div class="blur"></div>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="`plaid blur ${[
          category.id === selectedTag ? activeClass : '',
        ]}`"
      >
        <nuxt-link :to="`/category/${category.slug}`">{{
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
  a {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

.nav__home {
  position: absolute;
  left: -1em;
  padding: 2em;
  top: -1em;
  background-color: #fff;
  font-size: 2em;
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding: 1em;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: right;
  border-bottom: 1em solid #181848;
}
</style>
