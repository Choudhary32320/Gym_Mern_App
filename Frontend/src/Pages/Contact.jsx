import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // ✅ Validation Schema
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("required"),
    email: Yup.string().email("Invalid email").required("required"),
  });

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 overflow-hidden bg-neutral-950">
      <h1
        className="absolute top-5 text-[4rem] md:text-[10rem] font-extrabold text-transparent 
          [text-stroke:2px_rgb(34,211,238)] [-webkit-text-stroke:2px_rgb(34,211,238)]
          tracking-widest opacity-10 select-none pointer-events-none"
      >
        EVOLVE
      </h1>

      <h2
        className="relative text-[2.3rem] md:text-[4rem] font-extrabold text-green-400 tracking-wide 
        text-center mb-14 z-20"
        data-aos="zoom-in"
      >
        Join <span className="text-green-500">Evolve</span>, and Elevate Your
        Fitness Journey
      </h2>

      <div className="relative w-full max-w-md z-20">
        <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-3xl animate-pulse"></div>

        <div className="relative">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6 border-4 border-green-600 p-5 rounded-lg">
                {/* First Name */}
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-green-400 text-sm mt-1"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-green-400 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-green-400 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-green-400 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 text-green-400 font-bold rounded-lg"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
