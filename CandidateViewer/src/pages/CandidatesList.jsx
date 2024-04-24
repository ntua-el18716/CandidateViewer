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
    // fetchCandidates();
    setCandidates([
      {
        candidateId: 29,
        candidateName: {
          el: "Πόλυς Ανωγυριάτης",
          en: "Polys Anoyiratis ",
        },
        candidateParty: "elam",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "",
        candidateWebPage: "",
        candidateImg: "polysAnoyiratis",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 10,
        candidateName: {
          el: "Χριστιάνα Ξενοφώντος",
          en: "Christiana Xenofontos",
        },
        candidateParty: "disy",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "",
        candidateWebPage: "",
        candidateImg: "christianaXenophontos",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 37,
        candidateName: {
          el: "Ελένη Θεοχάρους",
          en: "Eleni Theocharous",
        },
        candidateParty: "diko",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "",
        candidateWebPage: "",
        candidateImg: "eleniTheocharous",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 33,
        candidateName: {
          el: "Κατερίνα Χριστοφίδου",
          en: "Katerina Christofidou",
        },
        candidateParty: "diko",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "katerinachristo@gmail.com",
        candidateWebPage: "",
        candidateImg: "katerinaChristofidou",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 8,
        candidateName: {
          el: "Λουκάς Φουρλάς",
          en: "Loukas Fourlas",
        },
        candidateParty: "disy",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "",
        candidateWebPage: "",
        candidateImg: "loukasFourlas",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 27,
        candidateName: {
          el: "Νικόλας Φιλίππου",
          en: "Nicolas Philippou",
        },
        candidateParty: "edek",
        candidateBallotNumber: 0,
        candidateMobileNumber: "97770010",
        candidateEmail: "info@nicolasphilippou.com",
        candidateWebPage: "https://nicolasphilippou.com",
        candidateImg: "nicolasPhilippou",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
      {
        candidateId: 11,
        candidateName: {
          el: "Γιώργος Γεωργίου",
          en: "Giorgos Georgiou",
        },
        candidateParty: "akel",
        candidateBallotNumber: 0,
        candidateMobileNumber: "",
        candidateEmail: "",
        candidateWebPage: "",
        candidateImg: "giorgosGeorgiou",
        candidateCode: null,
        candidateCustomAnswers: null,
        candidateConsent: null,
      },
    ]);
  }, []);

  console.log(candidates);
  return (
    <div className=" bg-[#242424] min-h-screen">
      <ListOfCandidates candidates={candidates} />;
    </div>
  );
}

export default CandidatesList;
