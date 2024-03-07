"use client";

import { useForm } from "react-hook-form";
import PulseButton from "@/app/components/ui/PulseButton";
import styles from "./form.module.css";

export default function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));
  // watch input value by passing the name of it
  return (
    <>
      <h1 className="flex justify-center text-4xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        Get In Touch
      </h1>
      <div className="mt-16 flex  flex-wrap justify-center gap-8">
        <form
          className="flex w-full max-w-lg flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* register your input into the hook by invoking the "register" function */}

          <input
            className={` flex rounded-md bg-primary-500 p-2 ${styles.input}`}
            placeholder={"Your Name"}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              maxLength: {
                value: 30,
                message: "Max character length is 30",
              },
            })}
          />
          {errors.name && (
            <span className=" text-danger">{errors.name.message}</span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className={` flex rounded-md bg-primary-500 p-2 ${styles.input}`}
            placeholder={"Your Email"}
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email",
              },
            })}
          />

          <textarea
            className={` flex rounded-md bg-primary-500 p-2 ${styles.input}`}
            placeholder={"Your Message"}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 1000,
                message: "Max character length is 1000",
              },
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <PulseButton submitButton variant={"secondary"}>
            Submit
          </PulseButton>
        </form>
      </div>
    </>
  );
}
