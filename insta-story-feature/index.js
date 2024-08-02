let stories = [
    {
        dp:"https://i.pinimg.com/474x/9e/fd/4b/9efd4bf49eef5973c866c9487c7f9d75.jpg",
        title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/474x/f6/c1/4a/f6c14a9b16cf50af59300165b27c7cfa.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/474x/07/e0/4b/07e04bc38be4fb4a148e6d9b9f20df3f.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/564x/e7/bb/5d/e7bb5daf317cc55a81a75bd1b599a47f.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/474x/0a/1e/a1/0a1ea18568a6c6c6d97895dd98144fe4.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/564x/7a/c5/d7/7ac5d7bc0a206ee8482e40f8218fbe27.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/474x/6a/bf/fa/6abffa88471fd953971acf213678f01b.jpg",
         title:"jessica"
    },
    {
        dp:"https://i.pinimg.com/564x/a6/8a/9b/a68a9b8286a8338ab22340207e02b745.jpg",
         title:"jessica"
    },
        
]

let story = "";
stories.forEach(function (elem,index) {
    story += ` <div class="story">;
            <img src="${elem.dp}" alt="">
        </div>`

 document.querySelector("#stories").innerHTML = story;    
    
})