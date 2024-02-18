import { useState } from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  TextContainer,
  Wrapper,
} from "./MovieTextsStyles";

const MovieTexts = () => {
  const [showText, setShowText] = useState("description");

  const textHandler = (text: string) => {
    setShowText(text);
  };

  return (
    <Wrapper>
      <StyledButtonsContainer>
        <StyledButton
          onClick={() => textHandler("description")}
          style={
            showText === "description"
              ? { background: "red", color: "white" }
              : { background: "inherit" }
          }
        >
          Description
        </StyledButton>
        <StyledButton
          onClick={() => textHandler("comments")}
          style={
            showText === "comments"
              ? { background: "red", color: "white" }
              : { background: "inherit" }
          }
        >
          Comments
        </StyledButton>
        <StyledButton
          onClick={() => textHandler("review")}
          style={
            showText === "review"
              ? { background: "red", color: "white" }
              : { background: "inherit" }
          }
        >
          Review
        </StyledButton>
      </StyledButtonsContainer>
      <TextContainer>
        <p>
          {showText === "description"
            ? "Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office."
            : showText === "comments"
            ? "No Comments"
            : showText === "review"
            ? "No Review"
            : null}
        </p>
      </TextContainer>
    </Wrapper>
  );
};

export default MovieTexts;
