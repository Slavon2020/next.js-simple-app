import Router from 'next/router';
import {MainLayout} from "../../components/MainLayout";
import {MyPost} from "../../interfaces/post";

interface AboutPageProps {
    title: string
}

export default function About ({ title } : AboutPageProps) {
    const handleGoHomeClick = () => {
        Router.push('/');
    }
    const handlePostsClick = () => {
        Router.push('/posts');
    }

    return <MainLayout title='About page'>
        <h1>{title}</h1>
        <button onClick={handleGoHomeClick}>Go back to home</button>
        <button onClick={handlePostsClick}>Go to posts</button>
    </MainLayout>
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title
    }
}