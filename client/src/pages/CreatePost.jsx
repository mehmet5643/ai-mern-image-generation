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
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('https://dalle-arbb.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  const navigate = useNavigate();
  return <section className="max-w-7xl mx-auto">
      <div>
        <h1 className='font-extrabold text-[#222128] text-[32px]'>
          Create Post
          <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Create imaginative and visually stunning images through DALL-E AI and share them with the community
          </p>
        </h1> 
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Enter your name (example: Eflatun)"
            value={form.name}
            handleChange= {handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="Enter your prompt (example: A cat wearing a hat)"
            value={form.prompt}
            handleChange= {handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
  </section>;
};

export default CreatePost;
