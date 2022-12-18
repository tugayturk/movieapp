import Navbar from "./Navbar";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./Contact.scss";
import { Submit } from "../models/submitModel";
const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitInfo, setSubmitInfo] = useState<Submit>();
  console.log(submitInfo);
  return (
    <div className="contact">
      <Navbar />
      {isSubmitted ? (
        <div className="submit">
          <p className="submit__info">
            {`Dear ${submitInfo?.name}, We took your submit. You will be contacted 
            via this ${submitInfo?.email}. `}
            </p>
          <main className="submit__comment">
            <b>Comment:</b>
            {submitInfo?.comment}
          </main>
          <button className="resetButton" onClick={() => setIsSubmitted(false)}>
            New Submit
          </button>
        </div>
      ) : (
        <div className="contact__container">
          <div className="contact__container__info">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              non massa ac enim vulputate convallis ac vel augue. Nulla iaculis
              tristique dui sit amet ultrices. Duis elementum vitae metus vel
              luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In malesuada nibh ac diam viverra, a pulvinar eros tempor.
              Curabitur suscipit urna eget est placerat interdum. In sit amet
              leo at metus accumsan gravida sed et risus.Aliquam gravida mi non
              erat auctor gravida. Mauris aliquet dignissim leo id varius. Sed
              ultrices posuere pulvinar. Donec finibus in tellus vel viverra.
              Aliquam tempor lobortis eros finibus eleifend. Donec id turpis
              ultrices dui varius eleifend. Aliquam erat volutpat. Aenean
              aliquam accumsan feugiat. Sed egestas tristique quam. Aliquam quis
              dictum enim, eget iaculis leo.Curabitur viverra metus sit amet
              tellus auctor, at commodo nunc tincidunt. Nam sit amet volutpat
              dui. Fusce id elit a massa suscipit faucibus sed at arcu. Sed
              euismod pharetra turpis, ac aliquet nisi sollicitudin sit amet.
              Pellentesque venenatis hendrerit nisl a iaculis. Pellentesque
              rutrum volutpat purus eget vulputate. Vestibulum blandit
              sollicitudin diam et scelerisque. Suspendisse potenti. Mauris
              vulputate condimentum sapien, vel aliquam magna pulvinar a.
              Suspendisse quis vulputate eros. Morbi sit amet justo eget quam
              posuere congue nec eget enim. Cras a erat sem. Suspendisse non
              velit lacinia arcu convallis lacinia vel ac ipsum. Sed luctus,
              metus ac faucibus pharetra, enim lectus cursus metus, id
              ullamcorper quam augue nec leo. Ut a convallis tellus.
            </p>
          </div>

          <div className="contact__container__form">
            <Formik
              initialValues={{
                name: "",
                email: "",
                agree: false,
                findUs: "",
                comment: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Filled a proper name"),
                email: Yup.string().email().required("Text a valid e-mail"),
                agree: Yup.boolean().required("You must accept the conditions"),
                findUs: Yup.string()
                  .required("Select an option")
                  .oneOf(["SocialMedia", "Advertisement", "friend"]),
                comment: Yup.string().required("You must text a comment"),
              })}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setIsSubmitted(true);
                setSubmitInfo(values);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="form" onSubmit={handleSubmit}>
                  <label className="form__label" htmlFor="agree">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="form__input"
                  />
                <p className="errorText">{errors.name && touched.name && errors.name}</p>
                  <label className="form__label" htmlFor="agree">
                    Email
                  </label>
                  <input
                    className="form__input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                 <p className="errorText">{errors.email && touched.email && errors.email}</p>
                  <label className="form__label" htmlFor="agree">
                    Comment
                  </label>
                  <input
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    className="form__input"
                  />
                  <p className="errorText">{errors.comment && touched.comment && errors.comment}</p>

                  <label className="form__label" htmlFor="findUs">
                    How did you find us?
                  </label>
                  <select
                    name="findUs"
                    onChange={handleChange}
                    value={values.findUs}
                    className="form__input"
                  >
                    <option value="" label="Pick an Option" />
                    <option value="SocialMedia" label="Social Media" />
                    <option value="Advertisement" label="Advertisement" />
                    <option value="friend" label="A Friend" />
                  </select>
                  <p className="errorText">{errors.findUs && touched.findUs && errors.findUs}</p>

                  <label className="form__label" htmlFor="agree">
                    Accept the rules
                  </label>

                  <input type="checkbox" name="agree" onChange={handleChange} />
                  <button
                    className="form__submitButton"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
