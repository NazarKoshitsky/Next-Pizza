import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Filter checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New products" value="2" />
      </div>

      {/* Price range */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <Input type="number" min={5} max={100} placeholder="100" />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Cheese Sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickled Cucumbers",
            value: "4",
          },
          {
            text: "Red Onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Cheese Sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickled Cucumbers",
            value: "4",
          },
          {
            text: "Red Onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
          {
            text: "Cheese Sauce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Garlic",
            value: "3",
          },
          {
            text: "Pickled Cucumbers",
            value: "4",
          },
          {
            text: "Red Onion",
            value: "5",
          },
          {
            text: "Tomatoes",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
