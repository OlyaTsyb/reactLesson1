export class PostsServices {
    url = "https://jsonplaceholder.typicode.com/posts";

    posts(){
        return fetch(this.url).then(value => value.json())
    }

}