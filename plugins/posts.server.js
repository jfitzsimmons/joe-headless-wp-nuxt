export default async ({ store }, payload) => {
  await store.dispatch('getPosts', payload)
}
