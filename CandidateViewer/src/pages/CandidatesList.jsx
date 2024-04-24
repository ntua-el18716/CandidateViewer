import { useEffect, useState } from "react";
import { getCandidates } from "../services/getCandidates";
import ListOfCandidates from "../features/ListOfCandidates";

function CandidatesList() {
  const [candidates, setCandidates] = useState([]);
  //const [candidateId, setCandidateId] = useState(-1);

  useEffect(() => {
    async function fetchCandidates() {
      const candidatesArray = await getCandidates();
      setCandidates(candidatesArray);
    }
    fetchCandidates();
  }, []);

  return (
    <div className=" bg-[#242424] min-h-screen">
      <ListOfCandidates candidates={candidates} />;
    </div>
  );
}

export default CandidatesList;
