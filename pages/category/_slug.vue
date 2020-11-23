<template>
  <div>
    <div v-if="!category">Loading...</div>

    <app-masthead
      v-else
      :pic="category.description"
      :name="category.name"
    ></app-masthead>

    <div class="posts">
      <main>
        <div class="post" v-for="post in posts" :key="post.ID">
          <h3>
            <a :href="`/blog/${post.slug}`">{{ post.title }}</a>
          </h3>
          <small>{{ post.date | dateformat }}</small>
          <div v-html="post.excerpt"></div>
          <a :href="`/blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead,
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    category() {
      return this.categories.find((el) => el.slug === this.slug);
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    const payload = {
      page: 1,
      category: this.slug,
    };
    this.$store.dispatch("getPosts", payload);
  },
};
</script>

<style lang="scss">
.posts {
  margin: 10em auto;
  max-width: 90vw;
}

main {
  grid-area: 1 / 1 / 2 / 2;
}

aside {
  grid-area: 1 / 2 / 2 / 3;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
}

a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}

.post {
  border-bottom: 0.4em dashed #ddc1ca;
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>
