import { createApi } from "unsplash-js";

const unsplashApi = createApi({
    accessKey: process.env.ACCESS_KEY,
    fetch
})

export default unsplashApi