import { api } from "@/redux/api/apiSlice";

const pcApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPcs: builder.query({
      query: () => "/pc",
    }),
  }),
});
export const { useGetPcsQuery } = pcApi;
