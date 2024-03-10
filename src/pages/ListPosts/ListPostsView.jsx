const ListPostsView = ({ data }) => {
  return (
    <div className="container">
      {data?.map(() => (
        <div>Selam</div>
      ))}
    </div>
  );
};

export default ListPostsView;
