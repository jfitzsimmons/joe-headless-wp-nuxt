<template>
  <section class="masthead" :style="style">
    <h1>{{ this.name }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: "Headless WordPress on the JAMstack",
    };
  },
  props: ["pic", "name"],
  computed: {
    style() {
      return `background: radial-gradient(ellipse at center, rgba(25, 25, 82, 0.8) 0%, rgba(178, 222, 243, 0.6) 66%, rgba(238, 249, 254, 0.4) 100%), url("${this.pic}") no-repeat center center scroll`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
section.masthead {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7vw;
  margin: 10rem auto;
  background-size: cover !important;
  color: #333;
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 30px, 65px);
    background: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 56%,
        hsla(60, 80%, 85%, 0.5) 33%,
        hsla(60, 80%, 85%, 0.5) 70%
      ),
      repeating-linear-gradient(
        to right,
        transparent,
        transparent 46%,
        hsla(60, 80%, 85%, 0.5) 44%,
        hsla(60, 80%, 85%, 0.5) 85%
      ),
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 15%,
        hsla(0, 85%, 70%, 0.5) 5%,
        hsla(0, 85%, 70%, 0.5) 22%
      ),
      repeating-linear-gradient(
        to left,
        transparent,
        transparent 8%,
        hsla(0, 85%, 70%, 0.5) 7%,
        hsla(0, 85%, 70%, 0.5) 19%
      ),
      repeating-linear-gradient(
        to bottom,
        hsla(200, 88%, 70%, 0.5) 10%,
        hsla(200, 88%, 70%, 0.5) 40%,
        transparent 25%,
        transparent 60%
      ),
      repeating-linear-gradient(
        to left,
        hsla(200, 88%, 70%, 0.5) 10%,
        hsla(200, 88%, 70%, 0.5) 40%,
        transparent 25%,
        transparent 60%
      ),
      repeating-linear-gradient(
        to top,
        transparent,
        transparent 25%,
        hsla(0, 0%, 85%, 0.5) 15%,
        hsla(0, 0%, 85%, 0.5) 40%
      ),
      repeating-linear-gradient(
        to left,
        transparent,
        transparent 20%,
        hsla(0, 0%, 85%, 0.5) 20%,
        hsla(0, 0%, 85%, 0.5) 40%
      );
    padding: 16vw;
  }
}
</style>