import React, { FunctionComponent } from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
}

export const Searchbar: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  searchTerm
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={searchTerm} />
    <button type="submit" placeholder="Search...">Search</button>
  </form>
);

export default Searchbar;
