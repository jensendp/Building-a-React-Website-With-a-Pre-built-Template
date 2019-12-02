import React, {useState, useEffect} from 'react';
import { Header } from '../../components/Header/Header';
import { Nav } from '../../components/Nav/Nav';
import { Footer } from '../../components/Footer/Footer';
import { PostPreviewList } from '../../components/PostPreviewList/PostPreviewList';

export const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([{id: 1, title: 'Man must explore, and this is exploration at its greatest', subtitle: 'Problems look mighty small from 150 miles up', author: 'Start Bootstrap', publication_date: 'September 24, 2019'},
        {id: 2, title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.', subtitle: 'A fancy subtitle.', author: 'Start Bootstrap', publication_date: 'September 18, 2019'}])
    }, []);

    return (
        <>
        <Nav />
        <Header imgName="home-bg" title="Clean Blog" subtitle="A Blog Theme by Start Bootstrap"/>

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <PostPreviewList posts={posts} />
                </div>
            </div>
        </div>

        <hr />

        <Footer />
        </>
    )
}