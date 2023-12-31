import TitleAndImg from "../pageTitleAndBgImage/TitleAndImg";
import { Container } from "../styledComponents/containers";
import { MainTitle } from "../styledComponents/texts";
import "./ContactPageStyles.css";
import { useForm } from "react-hook-form";
import homeIcon from "../../assets/icons/home.png";
import tabletIcon from "../../assets/icons/tablet.png";
import emailIcon from "../../assets/icons/email.png";
import { StyledTable } from "./AddressStyles";

type DataType = {
  enterMessage: string;
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
      <Container>
        <div id="flex">
          <div id="width">
            <form id="gap" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <MainTitle style={{ fontFamily: "Playfair Display, serif" }}>
                  Get in Touch
                </MainTitle>
              </div>
              <div>
                <textarea
                  placeholder="Enter Message"
                  {...register("enterMessage", {
                    required: {
                      value: true,
                      message: "Message cannot be empty",
                    },
                  })}
                  style={
                    errors.enterMessage?.message
                      ? { outline: "2px solid #FF7979" }
                      : { outline: "none" }
                  }
                />
                <label>
                  {errors.enterMessage?.message
                    ? "um...yea, you have to write something to send this form."
                    : ""}
                </label>
              </div>
              <div className="flex-input">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
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
                  <label>
                    {errors.firstName?.message
                      ? "come on, you have a name, don't you?"
                      : ""}
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email cannot be empty",
                      },
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
                  <label>
                    {errors.email?.message ? "no email, no message" : ""}
                  </label>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Subject"
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
                <p>
                  {errors.subject?.message
                    ? "come on, you have a subject, don't you?"
                    : ""}
                </p>
              </div>
              <button type="submit" className="submitButton">
                Send
              </button>
            </form>
          </div>
          <StyledTable>
            <li>
              <img src={homeIcon} alt="" />
              <div>
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </li>
            <li>
              <img src={tabletIcon} alt="" />
              <div>
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </li>
            <li>
              <img src={emailIcon} alt="" />
              <div>
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </li>
          </StyledTable>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
