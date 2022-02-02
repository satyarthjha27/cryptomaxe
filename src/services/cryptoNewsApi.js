import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createApiNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url,headers:createApiNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: ' cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;


