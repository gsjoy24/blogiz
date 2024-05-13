import { TBlog } from '@/types';
import LatestBlogCard from './ui/LatestBlogCard';
import BlogCard from './ui/BlogCard';

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
	return (
		<div>
			<h1 className='text-3xl font-semibold my-5 text-center'>
				Latest blogs from <span className='text-cyan-400'>Blogiz</span>
			</h1>
			<p className='text-gray-400 w-2/5 text-center mx-auto'>
				<i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
			</p>
			<div className='grid grid-cols-2 p-5 gap-10'>
				{blogs.slice(0, 2).map((blog) => (
					<LatestBlogCard key={blog.id} blog={blog} />
				))}
			</div>
			<div className='grid grid-cols-3 p-5 gap-10'>
				{blogs.slice(2, 5).map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
};

export default LatestBlogs;
