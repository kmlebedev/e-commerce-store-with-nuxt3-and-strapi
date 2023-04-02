import { stringify } from 'qs';

export default async function (items: number[]) {
    const config = useRuntimeConfig();
    const {data: products} = await useFetch(() => `/api/products?` + stringify({
        filters: {
            id: {
                $in: items.length > 0 ? items : [-1]
            },
        },
        populate: "Image",
    }, {
        encodeValuesOnly: true,
    }), {
        baseURL: config.API_URL,
        headers: {"Authorization": "bearer " + config.API_TOKEN},
    })
    return products.value
}