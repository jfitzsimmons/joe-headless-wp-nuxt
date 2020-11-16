const siteURL = "http://news.local/"

export const state = () => ({
  posts: [],
  tags: [],
  categories: [],
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }, payload) {
    
    if (state.posts.length) return
    console.dir(payload);
    const page = payload ? payload.page : 1;
    const category = payload ? `&categories=${payload.category}` : '';
    console.log(`category: ${category}`);

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?per_page=20&_embed=1&page=${page}${category}`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))
      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  },
  async getCategories({ state, commit }) {
    if (state.categories.length) return
    try {
      let categories = await fetch(
        `${siteURL}/wp-json/wp/v2/categories?page=1&per_page=20`
      ).then(res => res.json())

      categories = categories.map(({ id, name, slug }) => ({
        id,
        name,
        slug
      }))

      commit("updateCategories", categories)
    } catch (err) {
      console.log(err)
    }
  }
}
