import React, { useContext, useRef, useEffect } from "react";
import { ContextCoctail } from "../context/ContextCoctail";
import { Input } from 'antd';

const SearchForm = () => {
  const { searchTerm ,setSearchTerm } = useContext(ContextCoctail);
  const searchValue = useRef("");
 
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktail = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <h2 style = {{textAlign:'center'}}>Search Coctails</h2>
      <form onSubmit={handleSubmit} style ={{width:'90%', margin:'auto'}}>
          <Input
            placeholder = "Search your favourite cocktail"
            size ="large"
            value = {searchTerm}
            onChange={searchCocktail}
            ref={searchValue}
          />
      </form>
    </section>
  );
};

export default SearchForm;
