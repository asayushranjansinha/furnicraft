"use client";
import {
  productCategories,
  productListViewOptions,
  sortOptions,
} from "@/data/constants";
import { ProductListViewNameEnum } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductListControlProps {
  currentView: ProductListViewNameEnum;
  onChangeViewOption: (option: ProductListViewNameEnum) => void;
}

const ProductListControls: React.FC<ProductListControlProps> = ({
  currentView,
  onChangeViewOption,
}) => {
  return (
    <section aria-labelledby="product-list-controls" id="product-list-controls">
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-end sm:justify-between">
        <div
          className="hidden sm:block"
          aria-label="Category filters"
          id="category-filters"
        >
          <CategorySelect aria-label="Select a category" />
        </div>

        <div
          className="flex justify-between sm:justify-end items-center space-x-3"
          aria-label="Sorting and view options"
          id="sorting-and-view-options"
        >
          <SortBySelect aria-label="Select a sorting option" />
          <ViewOptions
            selected={currentView}
            onSelect={onChangeViewOption}
            aria-label="Select a view option"
          />
        </div>
      </div>
    </section>
  );
};
export default ProductListControls;

interface ViewOptionsProps {
  selected: ProductListViewNameEnum;
  onSelect: (option: ProductListViewNameEnum) => void;
}
const ViewOptions: React.FC<ViewOptionsProps> = ({ selected, onSelect }) => {
  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label="View options"
    >
      {productListViewOptions.map((option) => {
        const isSelected = selected === option.name;
        const buttonVariant = isSelected ? "outline" : "ghost";

        return (
          <Button
            key={option.name}
            onClick={() => onSelect(option.name)}
            variant={buttonVariant}
            aria-label={option.name}
            aria-pressed={isSelected}
            className={`
              ${
                option.name === ProductListViewNameEnum.GridView
                  ? "sm:hidden lg:inline-flex"
                  : ""
              }
              ${
                option.name === ProductListViewNameEnum.CompactView
                  ? "hidden sm:inline-flex"
                  : ""
              }
              ${
                option.name === ProductListViewNameEnum.ListView
                  ? "hidden lg:inline-flex"
                  : ""
              }
              ${
                option.name === ProductListViewNameEnum.DetailedView
                  ? "inline-flex"
                  : ""
              }
            `}
          >
            <span className="sr-only">{option.name}</span>
            {option.icon}
          </Button>
        );
      })}
    </div>
  );
};

const CategorySelect = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="category-select" className="mb-2 text-sm font-medium">
        Category
      </label>
      <Select>
        <SelectTrigger id="category-select" className="">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent side="bottom" className="w-[180px]">
          {productCategories.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const SortBySelect = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="sort-select" className="sr-only">
        Sort By
      </label>
      <Select>
        <SelectTrigger className="border-none">
          <SelectValue placeholder="Sort By:" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
