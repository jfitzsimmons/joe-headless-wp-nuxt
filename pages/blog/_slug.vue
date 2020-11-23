<template>
  <main class="post individual">
    <div v-if="!post">Loading...</div>
    <div v-else>
      <h1>{{ post.title }}</h1>
      <small class="date">{{ post.date | dateformat }}</small>
      <section v-html="post.content"></section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find((el) => el.slug === this.slug);
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>

<style lang="scss" scoped>
main.post {
  margin: 10em auto;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>