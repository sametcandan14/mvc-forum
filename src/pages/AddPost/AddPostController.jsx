import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";

const AddPostController = () => {
  const model = new AddPostModel();

  const [form, setForm] = useState(model.state);

  const onInputChange = (label, value) => {};
  return <AddPostView onInputChange={onInputChange} />;
};

export default AddPostController;
