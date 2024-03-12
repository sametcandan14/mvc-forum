import React, { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";
import axios from "axios";

const ListPostsController = () => {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);

  console.log("selam");

  useEffect(() => {
    axios.get("http://localhost:3050/posts").then((res) => setData(res.data));
  }, []);
  return (
    <ListPostsView
      data={data}
      setShowPopup={setShowPopup}
      showPopup={showPopup}
    />
  );
};

export default ListPostsController;
