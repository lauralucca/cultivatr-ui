import React, { useState } from "react"
import { Interests } from "../../api"


const UserInterests = () => {
  const [interestList, setInterestList] = useState([])
  const [newInterest, setNewInterest] = useState("")
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    Interests.save({ interestList })
    event.target.reset();
  };

  const addNewInterestToInterestList = () => {
    const newList = [newInterest]
    interestList.map(i => newList.push(i))
    setInterestList(newList)
    setNewInterest("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        data-testid="teaching-interest"
        placeholder="Interesse"
        onChange={e => setNewInterest(e.target.value)}
        value={newInterest}
      />
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
