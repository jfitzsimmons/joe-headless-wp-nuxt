<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/"> <app-icon></app-icon>BlogName </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        :class="[category.id === selectedTag ? activeClass : '']"
      >
        <nuxt-link :to="`category/${category.slug}`">{{
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
  /*
  created() {
    this.$store.dispatch("getPosts");
  },
  */
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
