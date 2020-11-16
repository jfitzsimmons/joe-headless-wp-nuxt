const siteURL = "https://public-api.wordpress.com/rest/v1.1/sites/jfitzsimmons3959175.wordpress.com";

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
  async getPosts({ state, commit, dispatch }) {
    
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/posts?number=20&pretty=true`,
      ).then(res => res.json())

      posts = posts.posts
        .filter(el => el.status === "publish")
        .map(({ ID, slug, title, excerpt, date, tags, content }) => ({
          ID,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

       // console.dir(posts);

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
    allTags = allTags.join();
    //console.log(`allTags: ${allTags}`);

    try {
      let tags = await fetch(
        `${siteURL}/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.tags.map(({ id, name }) => ({
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
        `${siteURL}/categories?number=20&pretty=true`
      ).then(res => res.json())

      categories = categories.categories.map(({ id, name, slug }) => ({
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
