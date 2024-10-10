
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// RTKQ
const studentApi = createApi({
    reducerPath: 'studentApi',  // API 标识
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:1337/api/',
    }), 
    //  指定 API 标签类型
    tagTypes: ['student'],
    endpoints: (build) => ({
        getStudents: build.query({
            query: () => 'students',
            transformResponse: (baseQueryReturnValue) => {
                console.log(baseQueryReturnValue);
                return baseQueryReturnValue.data;
            },
            providesTags: ['student'],
        }),
        // 通过ID 查询
        getStudentById: build.query({
            query: (id) => `students/${id}`,
            transformResponse: (baseQueryReturnValue) => {
                return baseQueryReturnValue.data;
            },
            // 缓存时间
            keepUnusedDataFor: 0,
        }),
        deleteStudent: build.mutation({
            query: (id) => ({
                url: `students/${id}`,
                method: 'delete',
            }),
        }),
        addStudent: build.mutation({
            query: (stu) => ({
                url: `students`,
                method: 'post',
                body: {
                    data: stu,
                }
            }),
            invalidatesTags: ['student'],   // 使标签失效
        }),
        updateStudent: build.mutation({
            query: (stu) => ({
                url: `students/${stu.id}`,
                method: 'put',
                body: {
                    data: stu,
                }
            }),
            invalidatesTags: ['student'],   // 使标签失效
        })
    }),
});

export const { 
    useGetStudentsQuery,
    useGetStudentByIdQuery,
    useDeleteStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation,
} = studentApi;

export default studentApi;