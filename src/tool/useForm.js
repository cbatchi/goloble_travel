import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(data);
  };

  return { data, handleChange, handleSubmit };
};

export default useForm;