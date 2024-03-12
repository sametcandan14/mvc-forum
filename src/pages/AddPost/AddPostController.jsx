import React, { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPostController = () => {
  const model = new AddPostModel();

  const navigate = useNavigate();

  const [form, setForm] = useState(model.state);

  const onInputChange = (label, value) => {
    const copyState = { ...form };

    copyState[label] = value;

    setForm(copyState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Lütfen bütün alnları doldurun");
      return;
    }

    axios.post("http://localhost:3050/posts", form).then(() => navigate("/"));
  };
  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
