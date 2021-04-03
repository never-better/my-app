import './Post.css';

function Post({postData}) {


  return(
  <div className="App">
    <header className="App-header">
      <div className ="mtitle">WIT Week2 by YouTak</div>
      <div className="content-box" id ="con_box_first">
        <div className="box1">
          <div className="inner_box1">
            <div className="row"> 
              <span className="bt">User</span>
              <span className="btext">{postData.id}</span>
            </div>
            <div className="row">
              <span className="bt">Title</span>
              <span className="btext">{postData.title}</span>
            </div>
            <div className="row rbody">
              <span className="bt">Body</span>
              <span className="btext">{postData.body}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);
}
export default Post
