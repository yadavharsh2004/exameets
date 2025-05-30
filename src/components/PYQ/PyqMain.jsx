import React from "react";
import Header from "../Govt/Header";
import JobSearch from "../SoftwareJobs/JobSearch";
import ExamGrid from "./ExamGrid";

const PyqMain = () => {
  const exams = [
    { name: "BPSC CCE", link: "/downloads/bpsc.pdf" },
    { name: "SSC GD", link: "/downloads/ssc.pdf" },
    { name: "JEE Mains", link: "/downloads/jee.pdf" },
    { name: "NEET", link: "/downloads/neet.pdf" },
    { name: "UPSC", link: "/downloads/upsc.pdf" },
    { name: "TCS NQT", link: "/downloads/tcs.pdf" },
    { name: "MET", link: "/downloads/met.pdf" },
    { name: "Google", link: "/downloads/google.pdf" },
    { name: "ISRO Scientist Exam", link: "/downloads/isro.pdf" },
    { name: "DRDO CEPTAM", link: "/downloads/drdo.pdf" },
    { name: "GATE", link: "/downloads/gate.pdf" },
    { name: "CAT", link: "/downloads/cat.pdf" },
    { name: "CMAT", link: "/downloads/cmat.pdf" },
    { name: "CLAT", link: "/downloads/clat.pdf" },
    { name: "AIIMS Nursing", link: "/downloads/aiims.pdf" },
    { name: "Bank PO", link: "/downloads/bankpo.pdf" },
    { name: "NDA", link: "/downloads/nda.pdf" },
    { name: "CDS", link: "/downloads/cds.pdf" },
    { name: "SSC CGL", link: "/downloads/ssccgl.pdf" },
    { name: "Railway NTPC", link: "/downloads/ntpc.pdf" },
  ];
  

  return (
    <div>
      <Header />
      <JobSearch header={"Previous Year Question Papers"} />
      <section className="flex flex-col gap-2">
        <ExamGrid exams={exams} />
      </section>
    </div>
  );
};

export default PyqMain;
