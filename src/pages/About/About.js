import React from 'react';
import { Nav } from '../../components/Nav/Nav';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const About = () => {
    return (
        <>
            <Nav />
            <Header imgName="about-bg" title="About Me" subtitle="This is what I do."/>

            <div class="container">
                <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
                </div>
                </div>
            </div>

            <Footer />
        </>
    )
}