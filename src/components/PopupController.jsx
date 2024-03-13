import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import axios from "axios";

const PopupController = ({ userName, setShowPopup }) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3050/posts?user=${userName}`)
      .then((res) => setData(res.data));
  }, []);
  return <PopupView setShowPopup={setShowPopup} data={data} />;
};

export default PopupController;
