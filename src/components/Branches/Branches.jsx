import { useEffect, useState } from "react";
import { deleteItem, getAll } from "../../API/services";
import Tables from "../Table/Table";

const Branches = () => {
  const [branches, setBranches] = useState([]);

  const onDeleteClick = (id) => {
    deleteItem("branches", id).then(() => {
      getAll("branches")
        .then((res) => setBranches(res.data))
        .catch((err) => console.log(err));
    });
  };

  useEffect(() => {
    getAll("branches")
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
