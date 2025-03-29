var posts=["2025/03/29/hello-world/","2025/03/29/你的文章标题/","2025/03/29/你的文章标题-1/","2023/11/15/技术文章示例/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };