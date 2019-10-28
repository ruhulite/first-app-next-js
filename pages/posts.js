import Router from 'next/router';
import Header from '../component/header';

const Posts = () => (
    <div>
        <Header />
        <h3>{Router.query.title}</h3>
        <p>Posts page.</p>
    </div>
);

export default Posts;