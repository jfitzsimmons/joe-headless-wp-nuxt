<template>
  <div class="content">
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.ID">
        <div class="post__featured-image">
          <img
            :src="post.featured_image"
            :alt="post.attachments[Object.keys(post.attachments)[0]].alt"
          />
        </div>
        <div class="post__content">
          <div class="plaid post__category">
            <nuxt-link
              class="plaid__link"
              :to="`/category/${Object.keys(post.categories)[0].toLowerCase()}`"
              >{{ Object.keys(post.categories)[0] }}</nuxt-link
            >
            <span></span>
          </div>
          <h3>
            <a :href="`/blog/${post.slug}`">{{ post.title }}</a>
          </h3>
          <small>{{ post.date | dateformat }}</small>
          <div v-html="post.excerpt"></div>
          <a :href="`/blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div>
      </div>

      <!--
      <aside>
        <h2 class="tags-title">Tags</h2>
        <div class="tags-list">
          <ul>
            <li
              @click="updateTag(tag)"
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '']"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
      </aside>-->
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
      selectedTag: null,
      activeClass: "active",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    const payload = {
      page: 1,
      category: "",
    };
    this.$store.dispatch("getPosts", payload);
    console.dir(this.$store.state.posts);
  },
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-areas:
    "a a a a a a"
    "b b b c c c"
    "d d d d d d"
    "e e f f g g";
  grid-gap: 1rem;
}

.post:nth-of-type(4n + 1) {
  grid-area: a;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .post__featured-image {
    width: 64vw;
    min-width: 300px;
    flex: 2;
  }

  .post__content {
    margin-left: -3vw;
    width: 25vw;
    background: #fff;
    flex: 1;
    min-width: 220px;
  }
}

.post:nth-of-type(4n + 2) {
  grid-area: b;
  display: flex;
  align-items: center;
  flex-direction: column;

  .post__featured-image {
    width: 44vw;
  }

  .post__content {
    margin-top: -3vw;
    width: 42vw;
    background: #fff;
  }
}

.post:nth-of-type(4n + 3) {
  grid-area: c;
  display: flex;
  align-items: center;
  flex-direction: column;

  .post__featured-image {
    width: 44vw;
  }

  .post__content {
    margin-top: -3vw;
    width: 42vw;
    background: #fff;
  }
}

.post:nth-of-type(4n + 4) {
  grid-area: d;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .post__featured-image {
    width: 64vw;
    min-width: 300px;
    flex: 2;
  }

  .post__content {
    margin-left: -3vw;
    width: 25vw;
    background: #fff;
    flex: 1;
    min-width: 220px;
  }
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: #181848;
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
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 1.3rem;
  }
}

.post__content {
  border: 0.5em dashed #ecf8fe;
  padding: 1em;
}

.post__category {
  float: right;
  margin-right: -4vw;
  margin-top: -4vw;
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
