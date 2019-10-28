import Link from 'next/link';
import Header from '../component/header';

const PostLinks = props => (
	<li>
		<Link href={`/posts?title=${props.title}`}>
			<a>{ props.title }</a>
		</Link>
	</li>
);

const Index = () => (
	<div>	
		<Header />	
		<main>
			<h2>Hello buddy!</h2>
			<ul>
				<PostLinks title="Hello Next.js" />
				<PostLinks title="Learn Next.js is awesome" />
				<PostLinks title="Deploy apps with Zeit" />
			</ul>
		</main>
	</div>
);

export default Index;