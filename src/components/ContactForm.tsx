import { FC } from "react";
import { useContactForm } from "../hooks/useContactForm";
import { ContactFormSchema } from "../validation/contactSchema";
import { Path } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const ContactForm: FC = () => {
  const { form, onSubmit, status } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const fields: {
    label: string;
    name: Path<ContactFormSchema>;
    type: string;
    required: string;
    pattern?: { value: RegExp; message: string };
  }[] = [
    {
      label: "Your Name",
      name: "name",
      type: "text",
      required: "Name is required",
    },
    {
      label: "Your Email",
      name: "email",
      type: "email",
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email",
      },
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      required: "Subject is required",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-14 rounded-2xl border border-zinc-800/80 bg-[#111317] shadow-[0_18px_60px_rgba(0,0,0,0.7)] transition-all">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Get In Touch
      </h2>

      {status === "success" && (
        <div className="text-green-400 text-center font-medium mb-6">
          ✅ Your message has been sent!
        </div>
      )}
      {status === "error" && (
        <div className="text-red-400 text-center font-medium mb-6">
          ❌ Oops! Something went wrong. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column: Inputs */}
        <div className="space-y-6">
          {fields.map(({ label, name, type, required, pattern }) => (
            <div key={name} className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-zinc-300">
                {label}
              </label>
              <input
                {...register(name, { required, pattern })}
                type={type}
                placeholder={label}
                className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-[#101217] text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                aria-invalid={!!errors[name]}
              />
              {errors[name] && (
                <p role="alert" className="text-sm text-red-500 mt-1">
                  {(errors[name]?.message as string) ?? ""}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Message + Button */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-zinc-300">
              Your Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Type your message..."
              rows={9}
              className="w-full px-4 py-3 rounded-xl border border-zinc-700 bg-[#101217] text-white placeholder:text-zinc-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p role="alert" className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || status === "sending"}
              className={`w-full sm:w-auto px-6 py-3 text-md cursor-pointer text-center font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting || status === "sending"
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-green-700 hover:bg-green-800 text-[#E0E0E0] shadow-md"
              }`}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting || status === "sending"
                ? "Sending…"
                : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
