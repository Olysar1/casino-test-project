import CategoryFilters from "./CategoryFilters";
import Search from "./Search";

const FiltersSection = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-2.5 lg:flex-row w-full">
        <Search />
        <div className="flex-1 flex gap-2.5">
          <div className="flex-1 bg-casino-blue">collections</div>
          <div className="flex-1 bg-casino-blue">providers</div>
        </div>
      </div>
      <CategoryFilters />
    </div>
  );
};

export default FiltersSection;
