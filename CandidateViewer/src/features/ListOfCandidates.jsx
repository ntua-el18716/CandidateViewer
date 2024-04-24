// import { Link } from "react-router-dom";
// import Home from "../../../public/images/home.svg?react";
import { useEffect, useState } from "react";

function ListOfCandidates({ candidates }) {
  console.log(candidates);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    if (filter === "all") setFilteredCandidates(candidates);
    else {
      let f = candidates.filter(
        (candidate) => candidate.candidateParty === filter
      );
      setFilteredCandidates(f);
    }
  }, [candidates, filter]);
  // }, []);

  // console.log(filteredCandidates);
  const sortedCandidates = filteredCandidates.sort((a, b) =>
    a.candidateParty.localeCompare(b.candidateParty)
  );

  // function handleFilter(party) {
  //   setFilter(filter);
  //   if (party === "all") {
  //     setFilteredCandidates(candidates);
  //     return;
  //   }
  //   let f = candidates.filter(
  //     (candidate) => candidate.candidateParty === party,
  //   );
  //   setFilteredCandidates(f);
  // }
  return (
    <ul className="no-scrollbar max-h-screen h-full flex flex-col gap-4 overflow-hidden overflow-y-auto whitespace-nowrap rounded-lg py-2 px-0.5">
      <div className="flex justify-between px-2 flex-col sm:flex-row ">
        <div className="flex gap-2">
          <h1 className="text-2xl text-white text-center py-3 font-bold font-serif hidden">
            List of Candidates
          </h1>
        </div>
        <h1 className="text-3xl text-white text-center py-3 font-bold font-serif hidden sm:block">
          List of Candidates
        </h1>
        <div className="flex flex-c gap-1">
          <button
            className={`bg-[#242424] flex px-2 py-3 rounded-lg text-lg font-bold uppercase text-white ${
              filteredCandidates.length < 7 ? "block" : "hidden"
            }`}
            // onClick={() => handleFilter("all")}
            onClick={() => setFilter("all")}
          >
            Clear Filter
          </button>
          <select
            className=" bg-indigo-700 flex px-2 py-3 rounded-lg text-lg font-bold uppercase text-white "
            defaultValue="all"
            value={filter}
            // onChange={(e) => handleFilter(e.target.value)}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Filter</option>
            <option value="disy">DISY</option>
            <option value="akel">AKEL</option>
            <option value="diko">DIKO</option>
            <option value="elam">ELAM</option>
            <option value="edek">EDEK</option>
            <option value="depa">DEPA</option>
            <option value="greens">greens</option>
            <option value="volt">VOLT</option>
          </select>
        </div>
      </div>
      {sortedCandidates.map((candidate) => (
        <button
          key={candidate.candidateId}
          className={`grid grid-cols-11 place-items-center gap-4 justify-venly p-1 bg-[#1a1a1a] text-white hover:bg-indigo-700 rounded-xl font-semibold hover:from-emerald-500 hover:via-sky-600 hover:to-indigo-500 `}
          // onClick={() => {
          //   onCandidateId(candidate.candidateId);
          // }}
        >
          <img
            src={`/images/candidateImages/${candidate.candidateImg}.jpg`}
            alt="Your Image"
            style={{ maxHeight: "60px", width: "auto" }}
            loading="lazy"
            className="col-span-4 sm:col-span-2"
          />
          <p className="sm:col-span-2 sm:block hidden">
            {candidate.candidateName.el}
          </p>
          <p className="sm:col-span-2 col-start-5 col-end-11">
            {candidate.candidateName.en}
          </p>
          <p className="uppercase col-span-1 sm:block hidden">
            {candidate.candidateParty}
          </p>
          <p className="uppercase col-span-1 sm:block hidden">
            {candidate.candidateWebsite}
          </p>
          <img
            src={`/images/partyLogos/${candidate.candidateParty}.png`}
            alt="Your Image"
            style={{ maxHeight: "60px", width: "auto" }}
            loading="lazy"
            className="col-span-4 sm:col-span-2 bg-whitse"
          />
        </button>
      ))}
    </ul>
  );
}

export default ListOfCandidates;
