import LatestBlogs from '@/components/LatestBlogs';

const HomePage = async () => {
	const res = await fetch('http://localhost:5000/blogs', {
		next: {
			revalidate: 30
		}
	});
	const blogs = await res.json();

	return (
		<>
			<LatestBlogs blogs={blogs} />
		</>
	);
};

export default HomePage;
