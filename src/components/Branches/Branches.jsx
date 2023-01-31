import axios from "axios";
import { useEffect, useState } from "react";
import Tables from "../Table/Table";

const Branches = () => {
  const [branches, setBranches] = useState([]);

  const onDeleteClick = (id) => {
    axios
      .delete(
        `https://63d7b682afbba6b7c942aa0d.mockapi.io/api/v1/branches/${id}`
      )
      .then(() => {
        axios
          .get("https://63d7b682afbba6b7c942aa0d.mockapi.io/api/v1/branches")
          .then((res) => setBranches(res.data))
          .catch((err) => console.log(err));
      });
  };

  useEffect(() => {
    axios
      .get("https://63d7b682afbba6b7c942aa0d.mockapi.io/api/v1/branches")
      .then((res) => setBranches(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Tables data={branches} onDeleteClick={onDeleteClick} />
    </div>
  );
};

export default Branches;
