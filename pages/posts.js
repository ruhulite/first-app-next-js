import Router from 'next/router';
import Layout from '../component/layout';

const Posts = () => (
    <Layout>
		<main>
            <h3>{Router.query.title}</h3>
            <p>Posts page.</p>
		</main>
	</Layout>
);

export default Posts;