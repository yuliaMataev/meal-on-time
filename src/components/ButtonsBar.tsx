import { Categories } from "../pages/Home/types";

interface Props {
  updateDiaplay: Function;
  selectdCategory: Categories;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  search: string;
  handleSearch: Function;
}

function ButtonsBar({
  updateDiaplay,
  selectdCategory,
  handleCategoryChange,
  search,
  handleSearch,
}: Props) {
  const catgories = Object.values(Categories);

  return (
    <div className="d-flex px-5">
      <div>
        <button
          onClick={() => updateDiaplay("grid")}
          className="btn btn-light mx-1"
        >
          <i className="bi-grid-3x3-gap-fill"></i>
        </button>

        <button onClick={() => updateDiaplay("list")} className="btn btn-light">
          <i className="bi-list-ul"></i>
        </button>
      </div>

      <div className="d-flex align-items-center">
        <label className="mx-3">Category:</label>
        <select
          value={selectdCategory}
          onChange={handleCategoryChange}
          className="form-select"
        >
          {catgories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input
          value={search}
          onChange={(e) => handleSearch(e)}
          placeholder="Search"
          className="form-control ms-3"
        />
      </div>
    </div>
  );
}

export default ButtonsBar;
