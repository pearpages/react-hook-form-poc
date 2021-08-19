import React from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  opinion: string;
  developer: string;
}

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormValues>({ mode: "onChange" });

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", { required: "This is required" })}
            id="firstName"
          />
          <div>{errors.firstName?.message}</div>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", {
              required: "This is required",
              maxLength: { value: 20, message: "Max length 20" }
            })}
            id="lastName"
          />
          <div>{errors.lastName?.message}</div>
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
          />
        </div>

        <div>
          <label htmlFor="opinion">Opinion</label>
          <textarea
            {...register("opinion", {
              required: "This is required",
              maxLength: { value: 20, message: "Max length 20" }
            })}
            id="opinion"
          />
          <div>{errors.opinion?.message}</div>
        </div>

        <div>
          <label htmlFor="gender"></label>
          <select {...register("gender")} id="gender">
            <option value="">Select...</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div>
          <label htmlFor="developer">Are you a developer?</label>
          <input
            {...register("developer")}
            id="developer"
            type="checkbox"
            value="yes"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <hr />

      <div>{watch("firstName")}</div>
      <div>{watch("lastName")}</div>
      <div>{watch("age")}</div>
      <div>{watch("gender")}</div>
      <div>{watch("developer")}</div>
    </>
  );
}
