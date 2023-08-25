import React from "react";

import "./main.css"

import Img from "./img_newsletter.png";

export default () => {
    return (
        <section className="main">
            <aside>
                <h2><span>inscreva-se agora</span></h2>
                <h2>na Newslatter</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos fugit consequuntur sed, tenetur dicta odit labore, praesentium asperiores similique vitae delectus iste fuga, cumque optio facilis odio quibusdam explicabo.</p>
            </aside>

            <article>
                <img src={ Img } alt="purple-woman" />
            </article>
        </section>
    )
} 