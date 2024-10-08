
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// RTKQ
const studentApi = createApi({
    reducerPath: 'studentApi',  // API 标识
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
    }), // 
    endpoints(build) {
        return {
            getStudents: build.query({
                query() {
                    return 'students';
                }
            }),
            transformResponce(baseQueryReturnValue) {
                return baseQueryReturnValue.data;
            }
        };
    },
});


export const { useGetStudentsQuery } = studentApi;

export default studentApi;