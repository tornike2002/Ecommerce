type Props = {
  historyList: (genre: string) => void;
};

const Filter = ({ historyList }: Props) => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <div>
        <h2>Filter by Genres</h2>
        <ul>
          <li>
            <input type="checkbox" onClick={() => historyList("History")} />
            <span>History</span>
          </li>
          <li>
            <input
              type="checkbox"
              onClick={() => historyList("History-Thriller")}
            />
            <span>History-Thriller</span>
          </li>
          <li>
            <input type="checkbox" onClick={() => historyList("Love Story")} />
            <span>Love Stories</span>
          </li>
          <li>
            <input
              type="checkbox"
              onClick={() => historyList("Science Fiction")}
            />
            <span>Science Fiction</span>
          </li>
          <li>
            <input type="checkbox" onClick={() => historyList("Biography")} />
            <span>Biography</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
