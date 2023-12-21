import "./FilterByRatingStiles.css";
import { Select, Space } from "antd";

type Props = {
  ratingHandler: (firstRating: number, secondRating: number) => void;
};

const FilterByRating = ({ ratingHandler }: Props) => {
  const handleChange = (value: string) => {
    if (value === "all") {
      ratingHandler(0, 20);
    } else if (value === "3") {
      ratingHandler(3, 4);
    } else if (value === "4") {
      ratingHandler(4, 5);
    } else if (value === "5") {
      ratingHandler(5, 6);
    } else if (value === "6") {
      ratingHandler(6, 7);
    } else if (value === "7") {
      ratingHandler(7, 8);
    } else if (value === "8") {
      ratingHandler(8, 9);
    } else if (value === "9") {
      ratingHandler(9, 10);
    } else if (value === "10") {
      ratingHandler(10, 20);
    }
  };
  return (
    <div>
      <h2>Filter by Rating</h2>
      <Space wrap>
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "all", label: "Filter by Rating" },
            { value: "10", label: "10 Star Rating" },
            { value: "9", label: "9 Star Rating" },
            { value: "8", label: "8 Star Rating" },
            { value: "7", label: "7 Star Rating" },
            { value: "6", label: "6 Star Rating" },
            { value: "5", label: "5 Star Rating" },
            { value: "4", label: "4 Star Rating" },
            { value: "3", label: "3 Star Rating" },
          ]}
        />
      </Space>
    </div>
  );
};

export default FilterByRating;
