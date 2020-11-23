<template>
  <div>
    <app-nav />
    <nuxt />
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav,
  },
};
</script>

<style>
html {
  font-family: "Avenir", "Open Sans", sans-serif;
  font-size: calc(10px + (16 - 10) * ((100vw - 430px) / (1280 - 430)));
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: calc(10px + (16 - 10) * ((100vw - 430px) / (1280 - 430)));
  background: #ecf8fe;
}

h1,
h2,
h3 {
  font-family: "Alata", serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}

.plaid {
  list-style: none;
  padding: 1.5em 0.5em;
  border: 0.4em dashed #ecf8fe;
}

.plaid:hover,
.nuxt-link-exact-active {
  filter: saturate(250%);
}

.plaid a {
  padding: 0.5em;
  font-weight: 500;
  text-shadow: #ffc 0px 0 8px;
}
.plaid__link {
  background: hsla(200, 90%, 96%, 0.85);
  border: 5px dashed #ddc1ca;
  color: #181848;
}
/*
.plaid__link:hover {
  background: hsla(240, 50%, 19%, 0.5);
  border: 5px dashed #181848;
  color: #fff;
}
*/
.plaid:nth-of-type(4n + 1) {
  background-image: repeating-linear-gradient(
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
}
.plaid:nth-of-type(4n + 2) {
  background-image: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 56%,
      hsla(0, 85%, 70%, 0.5) 33%,
      hsla(0, 85%, 70%, 0.5) 70%
    ),
    repeating-linear-gradient(
      to left,
      transparent,
      transparent 46%,
      hsla(0, 85%, 70%, 0.5) 44%,
      hsla(0, 85%, 70%, 0.5) 85%
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 15%,
      hsla(60, 80%, 85%, 0.5) 5%,
      hsla(60, 80%, 85%, 0.5) 22%
    ),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 8%,
      hsla(60, 80%, 85%, 0.5) 7%,
      hsla(60, 80%, 85%, 0.5) 19%
    ),
    repeating-linear-gradient(
      to top,
      hsla(0, 0%, 85%, 0.5) 10%,
      hsla(0, 0%, 85%, 0.5) 40%,
      transparent 25%,
      transparent 60%
    ),
    repeating-linear-gradient(
      to left,
      hsla(0, 0%, 85%, 0.5) 10%,
      hsla(0, 0%, 85%, 0.5) 40%,
      transparent 25%,
      transparent 60%
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 25%,
      hsla(200, 88%, 70%, 0.5) 15%,
      hsla(200, 88%, 70%, 0.5) 40%
    ),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 20%,
      hsla(200, 88%, 70%, 0.5) 20%,
      hsla(200, 88%, 70%, 0.5) 40%
    );
}
.plaid:nth-of-type(4n + 3) {
  background-image: repeating-linear-gradient(
      to top,
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
      to top,
      transparent,
      transparent 15%,
      hsla(200, 88%, 70%, 0.5) 5%,
      hsla(200, 88%, 70%, 0.5) 22%
    ),
    repeating-linear-gradient(
      to right,
      transparent,
      transparent 8%,
      hsla(200, 88%, 70%, 0.5) 7%,
      hsla(200, 88%, 70%, 0.5) 19%
    ),
    repeating-linear-gradient(
      to top,
      hsla(0, 85%, 70%, 0.5) 10%,
      hsla(0, 85%, 70%, 0.5) 40%,
      transparent 25%,
      transparent 60%
    ),
    repeating-linear-gradient(
      to right,
      hsla(0, 85%, 70%, 0.5) 10%,
      hsla(0, 85%, 70%, 0.5) 40%,
      transparent 25%,
      transparent 60%
    ),
    repeating-linear-gradient(
      to bottom,
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
}
.plaid:nth-of-type(4n + 4) {
  background-image: repeating-linear-gradient(
      to top,
      transparent,
      transparent 56%,
      hsla(0, 85%, 70%, 0.5) 33%,
      hsla(0, 85%, 70%, 0.5) 70%
    ),
    repeating-linear-gradient(
      to left,
      transparent,
      transparent 46%,
      hsla(0, 85%, 70%, 0.5) 44%,
      hsla(0, 85%, 70%, 0.5) 85%
    ),
    repeating-linear-gradient(
      to top,
      transparent,
      transparent 15%,
      hsla(60, 80%, 85%, 0.5) 5%,
      hsla(60, 80%, 85%, 0.5) 22%
    ),
    repeating-linear-gradient(
      to left,
      transparent,
      transparent 8%,
      hsla(60, 80%, 85%, 0.5) 7%,
      hsla(60, 80%, 85%, 0.5) 19%
    ),
    repeating-linear-gradient(
      to bottom,
      hsla(200, 88%, 70%, 0.5) 10%,
      hsla(200, 88%, 70%, 0.5) 40%,
      transparent 25%,
      transparent 60%
    ),
    repeating-linear-gradient(
      to right,
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
      to right,
      transparent,
      transparent 20%,
      hsla(0, 0%, 85%, 0.5) 20%,
      hsla(0, 0%, 85%, 0.5) 40%
    );
}
</style>
