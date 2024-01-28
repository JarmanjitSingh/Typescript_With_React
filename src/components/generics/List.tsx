import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// we can also able to restrict the generic like <T extends string | number> that means T is only the array of numbers or strings or we can able to specify the object always have the key id with <T extends {id: string}>
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as ReactNode}
          </div>
        );
      })}
    </div>
  );
};

export default List;
