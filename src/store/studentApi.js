
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// RTKQ
const studentApi = createApi({
    reducerPath: 'studentApi',  // API 标识
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
    }), // 
    endpoints: (build) => ({
        getStudents: build.query({
            query: () => 'students',
            transformResponse: (baseQueryReturnValue) => {
                console.log(baseQueryReturnValue);
                return baseQueryReturnValue.data;
            }
        }),
    }),
});

export const { useGetStudentsQuery } = studentApi;

export default studentApi;