"use client";

import { useForm } from "react-hook-form";
import PulseButton from "@/app/components/ui/PulseButton";
import { toast } from "sonner";
import InputWrapper from "./inputwrapper";
import { minDelay } from "@/app/utils/delays";
import { MailCheck, MailWarning } from "lucide-react";

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
      <div className="mt-16 flex  flex-wrap justify-center gap-8">
        <form
          className="flex w-full max-w-lg flex-col gap-8"
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
      </div>
    </>
  );
}
