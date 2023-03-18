import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { Loader, FormField } from "../components";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [genaratingImg, setGeneratingImg] = useState(false);

  const navigate = useNavigate();
  return <section className="max-w-7xl mx-auto"></section>;
};

export default CreatePost;
