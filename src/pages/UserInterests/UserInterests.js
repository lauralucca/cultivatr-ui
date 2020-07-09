import React, { useState, useEffect } from "react";

const handleSubmit = async (event) => {
  event.preventDefault();
  event.target.reset();
};



const UserInterests = ({ onSubmit = handleSubmit }) => {
  const [interestList, setInterestList] = useState([])
  const [newInterest, setNewInterest] = useState()

  const addNewInterestToInterestList = () => {
  
    const newList = [newInterest]
    interestList.map(i => newList.push(i))
    setInterestList(newList)
  }


  return (
    <form onSubmit={onSubmit}>
      <input type="text" data-testid="teaching-interest" placeholder="Interesse" onChange={e => setNewInterest(e.target.value)} />
      <input
        type="button"
        data-testid="add-interest"
        onClick={addNewInterestToInterestList}
        value="Adicionar" />
      <ul data-testid="interest-list">
        {
          interestList.map((interest, index) => <li key={index}>{interest}</li>)
        }
      </ul>
      <input type="submit" data-testid="submit" label="Salvar" />
    </form>
  );
};

export default UserInterests;
