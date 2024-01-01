import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const ErrorLink = () => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/");
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, Something went wrong! Please retun to Home page!!!"
      extra={
        <Button onClick={navigationHandler} type="primary">
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorLink;
