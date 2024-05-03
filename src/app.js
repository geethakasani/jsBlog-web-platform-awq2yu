class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    var description_card = document.createElement("p");
    description_card.setAttribute("id", "blog-description");
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.detail;
  }
}
// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

function helperAddPost() {
  const popup = document.getElementById('popupContact');
  popup.style.display = 'flex';
};

function helperPost(){
  const title = document.getElementById('title').value;
  const description = document.getElementById('detail').value;

  const blog = new Blog(title, description);
 document.getElementById('card-text').innerHTML = '';
  blog.addTitle();
  blog.addDescription();

  document.getElementById('popupContact').style.display = 'none';
};

