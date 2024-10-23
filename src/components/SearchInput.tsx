import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch/>} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
