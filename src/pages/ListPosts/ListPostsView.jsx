import PopupController from "../../components/PopupController";

const ListPostsView = ({ data, showPopup, setShowPopup }) => {
  return (
    <div className="container">
      {!data && <p className="load">Yükleniyor...</p>}
      {data?.map((post) => (
        <div className="post" key={post.id}>
          <div className="info">
            <h3>{post.title}</h3>
            <p onClick={() => setShowPopup(true)}>{post.user}</p>
          </div>
          <p className="text">{post.text}</p>
        </div>
      ))}
      {showPopup && <PopupController username={post.user} />}
    </div>
  );
};

export default ListPostsView;
