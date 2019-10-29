import Link from 'next/link';
import '../assets/css/style.scss';
//import Header from '../component/header';
//import Footer from '../component/footer';
import Layout from '../component/layout';

const PostLinks = props => (
	<li>
		<Link href={`/posts?title=${props.title}`}>
			<a>{ props.title }</a>
		</Link>
	</li>
);

const Index = () => (		
	<Layout>
		<main>
			<h2>Hello buddy! Next JS</h2>
			<ul>
				<PostLinks title="Hello Next.js" />
				<PostLinks title="Learn Next.js is awesome" />
				<PostLinks title="Deploy apps with Zeit" />
			</ul>
		</main>
	</Layout>	
);

export default Index;