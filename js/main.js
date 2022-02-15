/* Made in collaboration by the whole group */

import Carousel from "./carousel.js";

let board = document.querySelector('#board');

let carousel = new Carousel(board);

async function getPosts() {
    const url = "http://wordpress.oscho.dk//wp-json/wp/v2/posts?_embed&categories=19";
    let response = await fetch(url);
    let posts = await response.json();
    console.log(posts);
    appendCards(posts);
}

getPosts();

function appendCards(posts) {
    for (const post of posts) {
        let template = /*html*/`
            <article>
                <h2>${post.title.rendered}</h2>
                <img src="${getFeaturedImageUrl(post)}">
            </article>
        `;
        carousel.push(template, post.id);
    }
    carousel.handle();
}
// Get image URL

function getFeaturedImageUrl(post) {
    let imageUrl = "";
    if (post._embedded['wp:featuredmedia']) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    return imageUrl;
}


window.like = function like(id) {
    console.log("Like, post id: " + id);
    
    // add to favorites 🎉
}

window.dislike = function dislike(id) {
    console.log("Dislike, post id: " + id);
    
}


