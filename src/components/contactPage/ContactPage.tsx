import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import { MainTitle } from "../styledComponents/texts";
import "./ContactPageStyles.css";
import { useForm } from "react-hook-form";

type DataType = {
  firstName: string;
  email: string;
  subject: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {};
  return (
    <div>
      <TitleAndImg
        title="Contact"
        link="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
      />
      <div id="flex">
        <div id="width">
          <form id="gap" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <MainTitle>Get in Touch</MainTitle>
            </div>
            <div>
              <textarea placeholder="Enter Message" />
              <label>
                um...yea, you have to write something to send this form.
              </label>
            </div>
            <div className="flex-input">
              <div>
                <input
                  type="text"
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Message cannot be empty",
                    },
                  })}
                  style={
                    errors.firstName?.message
                      ? { outline: "2px solid #FF7979" }
                      : { outline: "none" }
                  }
                />
                <label>come on, you have a name, don't you?</label>
              </div>
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: { value: true, message: "Email cannot be empty" },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Looks like this is not an email",
                    },
                  })}
                  style={
                    errors.email?.message
                      ? { outline: "2px solid #FF7979" }
                      : { outline: "none" }
                  }
                />
                <label>no email, no message</label>
              </div>
            </div>
            <div>
              <input
                type="text"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Message cannot be empty",
                  },
                })}
                style={
                  errors.subject?.message
                    ? { outline: "2px solid #FF7979", width: "100%" }
                    : { outline: "none" }
                }
              />
              <p>come on, you have a subject, don't you?</p>
            </div>
            <button type="submit" className="submitButton">
              Send
            </button>
          </form>
        </div>
        <div>
          <ul>
            <li>
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </li>
            <li>
              <h3>+1 253 565 2365</h3>
              <p>Rosemead, CA 91770</p>
            </li>
            <li>
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
