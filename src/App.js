import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className ="mtitle">WIT Week2 Project by YouTak</div>
        <div className="content-box">
          <div className="box1" id ="firstbox">
            <div className="inner_box1">
            <div className="row"> 
              <span className="bt">User</span>
              <span className="btext"></span>
            </div>
            <div className="row">
              <span className="bt">Title</span>
              <span className="btext"></span>
            </div>
            <div className="row rbody">
              <span className="bt">Body</span>
              <span className="btext"></span>
            </div>
            </div>
          </div>
          <div className="box2" id="secondbox">
          <div className="inner_box1">
            <div className="row"> 
              <span className="bt">User</span>
              <span className="btext"></span>
            </div>
            <div className="row">
              <span className="bt">Title</span>
              <span className="btext"></span>
            </div>
            <div className="row rbody">
              <span className="bt">Body</span>
              <span className="btext"></span>
            </div>
            <div className="remail">
              <div className="add_bar">ㄴ</div>
              <div className = "remail_box" id ="commentbox">
                <div className="remail_r">
                  <span className="com_name">name</span>
                  <span className="bemail">email</span>
                </div>
                  <div className= "remail_r bcomment">comment body</div>
                </div>
            </div>

            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((data) => {
    let boxlist = document.getElementById('firstbox');
    let rowlist = boxlist.firstChild.firstChild;

    for(let i=0; i<1; i++){
    rowlist = boxlist.firstChild.firstChild;
    rowlist.lastChild.textContent = data[i].id;
    rowlist.nextSibling.lastChild.textContent = data[i].title;
    rowlist.nextSibling.nextSibling.lastChild.textContent = data[i].body;
    boxlist = boxlist.nextSibling;
    rowlist = boxlist.firstChild.firstChild;
    rowlist.lastChild.textContent = data[i].id;
    rowlist.nextSibling.lastChild.textContent = data[i].title;
    rowlist.nextSibling.nextSibling.lastChild.textContent = data[i].body;
  }

  });

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((data) => {
    let commentlist = document.getElementById('commentbox');

    for(let i=0; i<1; i++){
      commentlist.firstChild.firstChild.textContent=data[i].name;
      commentlist.firstChild.lastChild.textContent=data[i].email;
      commentlist.lastChild.textContent=data[i].body;
    }
  });

export default App;
