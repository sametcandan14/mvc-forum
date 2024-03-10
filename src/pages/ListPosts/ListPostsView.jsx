const ListPostsView = ({ data }) => {
  return (
    <div className="container">
      {!data && <p className="load">Yükleniyor...</p>}
      {data?.map((post) => (
        <div className="post" key={post.id}>
          <div className="info">
            <h3>{post.title}</h3>
            <p>{post.user}</p>
          </div>
          <p className="text">{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPostsView;
