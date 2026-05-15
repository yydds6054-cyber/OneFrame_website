"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SOCIALS } from "@/lib/socials";

type Errors = Partial<Record<"name" | "email" | "needs" | "message", string>>;
const NEEDS = ["Website", "Video", "Poster", "Brand system", "Not sure yet"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    needs: [] as string[],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      e.email = "That email doesn't look right.";
    if (values.needs.length === 0)
      e.needs = "Pick at least one — or choose “Not sure yet.”";
    if (!values.message.trim())
      e.message = "Tell us a little about the project.";
    return e;
  };

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setServerError(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
        "https://formspree.io/f/REPLACE_ME";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          needs: values.needs.join(", "),
          message: values.message,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          errors?: { message?: string }[];
        };
        setServerError(
          data.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const setField = <K extends keyof typeof values>(
    key: K,
    next: (typeof values)[K]
  ) => {
    setValues((v) => ({ ...v, [key]: next }));
    if (errors[key as keyof Errors])
      setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const toggleNeed = (tag: string) =>
    setField(
      "needs",
      values.needs.includes(tag)
        ? values.needs.filter((n) => n !== tag)
        : [...values.needs, tag]
    );

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      {/* Big background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 select-none text-center font-display text-[22vw] leading-none tracking-tighter text-ink-900/[0.04]"
      >
        OneFrame
      </div>
      {/* Animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] bg-bloom-pink/50 blur-[80px] animate-blob-slow"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-violet font-semibold">
              ✦ Let&apos;s build something
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-[1] tracking-tight text-ink-900">
              Have a project
              <br />
              in <span className="text-bloom italic">mind?</span>
            </h2>
            <p className="mt-6 text-ink-700 max-w-md leading-relaxed">
              Tell us about it. We reply to every inquiry within one business
              day, usually with a calendar link and a few good questions.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-600 font-semibold">
                  Email
                </div>
                <a
                  href="mailto:oneframecanada@gmail.com"
                  className="mt-1 block text-xl font-semibold text-ink-900 hover:text-accent-violet transition-colors"
                >
                  oneframecanada@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-600 font-semibold">
                  Studio
                </div>
                <div className="mt-1 text-xl font-semibold text-ink-900">
                  Remote-first · GMT+8
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-ink-900/15 bg-white/60 px-4 py-2 text-xs font-semibold text-ink-700 hover:border-accent-violet hover:text-accent-violet hover:shadow-soft transition"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={onSubmit}
            noValidate
            className="glass relative rounded-3xl p-8 md:p-10 shadow-soft-lg"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-bloom-mint text-2xl text-ink-900">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-ink-900">Message sent</h3>
                <p className="mt-2 text-ink-700">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5">
                  <Field
                    label="Your name"
                    name="name"
                    placeholder="Jane Doe"
                    value={values.name}
                    onChange={(v) => setField("name", v)}
                    error={errors.name}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={values.email}
                    onChange={(v) => setField("email", v)}
                    error={errors.email}
                  />

                  <div>
                    <label className="text-xs uppercase tracking-widest text-ink-700 font-semibold">
                      What do you need?
                    </label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {NEEDS.map((tag) => {
                        const active = values.needs.includes(tag);
                        return (
                          <label
                            key={tag}
                            className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold transition select-none ${
                              active
                                ? "border-accent-violet bg-accent-violet text-white shadow-soft"
                                : "border-ink-900/15 bg-white/70 text-ink-700 hover:border-accent-violet hover:text-accent-violet"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="needs"
                              value={tag}
                              checked={active}
                              onChange={() => toggleNeed(tag)}
                              className="sr-only"
                            />
                            {tag}
                          </label>
                        );
                      })}
                    </div>
                    <ErrorMsg msg={errors.needs} />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-ink-700 font-semibold">
                      Project brief
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(e) => setField("message", e.target.value)}
                      placeholder="A few sentences about goals, timeline, and budget."
                      aria-invalid={!!errors.message}
                      className={`mt-3 w-full resize-none rounded-2xl border bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 transition ${
                        errors.message
                          ? "border-accent-coral focus:border-accent-coral focus:ring-accent-coral/30"
                          : "border-ink-900/10 focus:border-accent-violet focus:ring-accent-violet/30"
                      }`}
                    />
                    <ErrorMsg msg={errors.message} />
                  </div>
                </div>

                {serverError && (
                  <p
                    role="alert"
                    className="mt-6 rounded-2xl border border-accent-coral/40 bg-bloom-pink/40 px-4 py-3 text-sm text-ink-900"
                  >
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink-900 py-4 text-sm font-semibold text-white hover:bg-accent-violet transition-colors disabled:cursor-wait disabled:opacity-60 shadow-soft hover:shadow-soft-lg"
                >
                  {submitting ? (
                    <>
                      <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send the brief
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-ink-700 font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`mt-3 w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 transition ${
          error
            ? "border-accent-coral focus:border-accent-coral focus:ring-accent-coral/30"
            : "border-ink-900/10 focus:border-accent-violet focus:ring-accent-violet/30"
        }`}
      />
      <ErrorMsg msg={error} />
    </div>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p
      role="alert"
      className="mt-2 flex items-center gap-1.5 text-xs font-medium text-accent-coral animate-fade-up"
    >
      <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-accent-coral" />
      {msg}
    </p>
  );
}
