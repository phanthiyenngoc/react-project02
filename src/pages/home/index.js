/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import Blog from "../../components/pages/home/Blog";
import Features from "../../components/pages/home/Features";
import Feedback from "../../components/pages/home/Feedback";

import Hero from "../../components/pages/home/Hero";
import Popular from "../../components/pages/home/Popular";
import { useForm } from "react-hook-form";
function HomePageIndex() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_Name: "thao",
      last_Name: "",
      email: "",
    },
  });

  const handleSubmitData = function (data, event) {
    event.preventDefault();
    // console.log(data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>first_Name</label>
        <input {...register("first_Name")} />
        <br />
        {/* include validation with required or other standard HTML validation rules */}

        <label>last_Name</label>
        <input
          {...register("last_Name", {
            required: "Please enter your last name.12312",
            minLength: {
              value: 6,
              message: "Min length is 6333",
            },
          })}
        />
        <p
          css={css`
            color: red;
          `}
        >
          {errors.last_Name && <span>{errors.last_Name.message}</span>}
          {errors.last_Name && <span>{errors.last_Name.minLength}</span>}
        </p>
        <br />

        <label>EMail</label>
        <input {...register("email", { required: "bắt buộc nhập email" })} />
        <p
          css={css`
            color: red;
          `}
        >
          {errors.email && <span>{errors.email.message}</span>}
        </p>
        <br />
        {/* errors will return when field validation fails  */}
        {console.log("eer-r", errors)}

        <input type="submit" />
      </form>
      <Hero />
      <Popular />
      <Feedback />
      <Features />
      <Blog />
    </div>
  );
}

export default HomePageIndex;
