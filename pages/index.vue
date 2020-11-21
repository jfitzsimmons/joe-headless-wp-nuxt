<template>
  <div class="content">
    <!--<app-masthead></app-masthead>-->
    <div class="posts">
      <div class="post" v-for="post in sortedPosts" :key="post.ID">
        <div class="post__featured-image">
          <img
            :src="post.featured_image"
            :alt="post.attachments[Object.keys(post.attachments)[0]].alt"
          />
        </div>
        <div class="post__content">
          <div class="plaid post__category">
            <span>{{ Object.keys(post.categories)[0] }}</span>
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
    tags() {
      return this.$store.state.tags;
    },
    categories() {
      return this.$store.state.categories;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter((el) => el.tags.includes(this.selectedTag));
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

<style lang="scss">
.posts {
  display: grid;
  grid-template-areas:
    "a a a a"
    "b b c c"
    "d d d d";
  grid-gap: 1rem;
}

.post:nth-of-type(4n + 1) {
  grid-area: a;
  display: flex;
  align-items: center;

  .post__featured-image {
    width: 64vw;
  }

  .post__content {
    margin-left: -3vw;
    width: 25vw;
    background: #fff;
  }

  .post__category {
    float: right;
    margin-right: -2vw;
    margin-top: -2vw;
  }
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
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

.tags-title {
  background-color: #000;
  color: #fff;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 1.2rem;
  padding: 15px;
  margin: 0 35px;
  position: relative;
  top: -25px;
}

.tags-list {
  background: #f5f5f5;
  padding: 70px 25px 25px;
  margin-top: -65px;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  font-family: "Open Sans", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 15px;
  margin: 0 0 10px 10px;
  display: inline-block;
  font-size: 0.7rem !important;
  border: 1px solid #000;
  transition: all 0.3s;
  outline: none;
  font-weight: normal;
  cursor: pointer;
  background: #fff;
  a {
    color: #000;
  }
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
