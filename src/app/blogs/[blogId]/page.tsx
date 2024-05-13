import BlogDetails from '@/components/ui/BlogDetails';
import { TBlog } from '@/types';

type TProps = {
	params: {
		blogId: string;
	};
};

export const generateStaticParams = async () => {
	const res = await fetch('http://localhost:5000/blogs');
	const blogs = await res.json();
	return blogs.slice(0.3).map((blog: TBlog) => ({
		blogId: blog.id
	}));
};

const BlogDetailsPage = async ({ params }: TProps) => {
	// Fetch blog details
	const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
		cache: 'no-store'
	});
	const blog = await res.json();

	return <BlogDetails blog={blog} />;
};

export default BlogDetailsPage;
