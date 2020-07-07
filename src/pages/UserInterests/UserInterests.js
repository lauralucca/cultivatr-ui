import React from "react";

const handleSubmit = async (event) => {
  event.preventDefault();
  event.target.reset();
};

const UserInterests = ({ onSubmit = handleSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" data-testid="teaching-interest" placeholder="Interesse" />
      <input type="button" data-testid="add-interest" value="Adicionar"/>
      <input type="submit" data-testid="submit" label="Salvar" />
    </form>
  );
};

export default UserInterests;
