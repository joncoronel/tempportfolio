"use client";

import { useForm } from "react-hook-form";
import PulseButton from "@/app/components/ui/PulseButton";
import { toast } from "sonner";
import InputWrapper from "./inputwrapper";
import { minDelay } from "@/app/utils/delays";
import {
  MailCheck,
  MailWarning,
  Linkedin,
  Mail,
  Github,
  Twitter,
} from "lucide-react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    delayError: 200,
  });

  const onSubmit = async (data) => {
    try {
      const sendEmailPromise = fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const response = await minDelay(sendEmailPromise, 1000);
      const status = response.status;

      if (status === 200) {
        reset();

        toast("Message sent successfully", {
          icon: <MailCheck className="text-success-800" />,
          classNames: {
            toast: "!gap-4 !bg-success-100 !border-success-300",
            title: "!text-success-800",
            message: "!text-success-800",
          },
        });
      } else {
        toast("Error sending message", {
          icon: <MailWarning className="text-danger-800" />,
          classNames: {
            toast: "!gap-4 !bg-danger-100 !border-danger-300",
            title: "!text-danger-800",
            message: "!text-danger-800",
          },
        });
      }
    } catch (error) {
      toast("Error sending message", {
        icon: <MailWarning className="text-danger-800" />,
        classNames: {
          toast: "!gap-4 !bg-danger-100 !border-danger-300",
          title: "!text-danger-800",
          message: "!text-danger-800",
        },
      });
    }
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl font-extrabold  shadow-secondary-300/60 text-shadow-heading">
        Get In Touch
      </h1>
      <div className="relative mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
        <form
          className="flex w-full max-w-md flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWrapper
            errors={errors}
            name={"name"}
            placeholder={"Your Name"}
            type={"Input"}
            validationRules={{
              maxLength: {
                value: 30,
                message: "Max character length is 30",
              },
            }}
            register={register}
          />

          <InputWrapper
            errors={errors}
            name={"email"}
            placeholder={"Your Email"}
            type={"Input"}
            validationRules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            }}
            register={register}
          />

          <InputWrapper
            errors={errors}
            name={"message"}
            placeholder={"Your Message"}
            type={"Textarea"}
            validationRules={{
              required: "Message is required",
              maxLength: {
                value: 1000,
                message: "Max character length is 1000",
              },
            }}
            register={register}
          />

          <PulseButton
            loading={isSubmitting}
            submitButton
            variant={"secondary"}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </PulseButton>
        </form>
        {/* divider line */}
        <div className="relative h-0.5 w-[90%] max-w-md bg-primary-500 lg:h-auto lg:w-0.5 lg:self-stretch"></div>

        <div className="flex flex-col items-center justify-center gap-8">
          <h3 className="text-lg text-secondary-500">
            You can also find me here
          </h3>
          <div className="flex gap-4">
            <PulseButton
              variant={"secondary"}
              icon={<Linkedin size={"1.1rem"} />}
              href="
                https://www.linkedin.com/in/abhishek-kumar-1a6b2a1b6/"
              target="_blank"
              rel="noopener noreferrer"
            ></PulseButton>

            <PulseButton
              variant={"secondary"}
              icon={<Mail size={"1.1rem"} />}
              href="mailto: joncorone@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            ></PulseButton>

            <PulseButton
              variant={"secondary"}
              icon={<Github size={"1.1rem"} />}
              href="https://www.github.com/joncoronel"
              target="_blank"
              rel="noopener noreferrer"
            ></PulseButton>
            <PulseButton
              variant={"secondary"}
              icon={<Twitter size={"1.1rem"} />}
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            ></PulseButton>
          </div>
        </div>
      </div>
    </>
  );
}
