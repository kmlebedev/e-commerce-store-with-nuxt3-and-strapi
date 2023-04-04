export default defineEventHandler(async (event) => {
    const data = await useStorage().getItem('db:cart')
    return data
})