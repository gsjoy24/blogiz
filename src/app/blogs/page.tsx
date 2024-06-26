'use client';
import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import { TBlog } from '@/types';

const BlogsPage = () => {
	const { data: blogs } = useGetBlogsQuery('');

	return (
		<div>
			<h1 className='text-3xl font-semibold my-5 text-center'>
				All blogs from <span className='text-cyan-400'>Blogiz</span>
			</h1>
			<p className='text-gray-400 w-2/5 text-center mx-auto'>
				<i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
			</p>
			<div className='grid grid-cols-3 p-5 gap-10'>
				{blogs?.map((blog: TBlog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default BlogsPage;
