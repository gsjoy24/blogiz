import { TBlog } from '@/types';
import Image from 'next/image';
import { AiFillLike } from 'react-icons/ai';
import { FaCalendar } from 'react-icons/fa';

const BlogDetails = ({ blog }: { blog: TBlog }) => {
	return (
		<div className='card w-2/3 bg-base-100 shadow-xl mx-auto my-5'>
			<p className='flex items-center justify-center mx-auto text-accent bg-cyan-100 w-44 px-2 py-1 rounded-full'>
				<FaCalendar className='mr-2' />
				{blog.publish_date}
			</p>
			<h2 className='text-center text-4xl my-5'>{blog.title}</h2>
			<div className='avatar items-center justify-center bg-slate-100 mb-5 py-5 rounded-lg text-2xl'>
				<div className='w-8 mr-1 rounded-full'>
					<Image
						src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
						width={100}
						height={100}
						alt='author image'
					/>
				</div>
				<span>{blog.author_name}</span>
			</div>
			<figure>
				<Image src={blog.blog_image} width={600} height={100} alt='blog image' className='rounded-xl w-full' />
			</figure>
			<div className='card-body'>
				<p className='text-gray-500 text-2xl text-justify'>{blog.description}</p>
				<div className='flex justify-between items-center mt-5'>
					<div className='flex items-center text-2xl'>
						<AiFillLike className='text-accent' />
						<span className='mr-1'>{blog.total_likes}</span>
						Likes
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetails;
