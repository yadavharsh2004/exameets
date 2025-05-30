import React from "react";
import Header from "./Header";
import GovJobsSearch from "./GovJobsSearch";
import OrganizationHeader from "./OrganisationHeader";
import JobPostingRow from "./JobPostingRow";
import JobSearch from "../SoftwareJobs/JobSearch";

const Main = () => {
  return (
    <div>
      <Header />
      <JobSearch header={"Government Jobs/ Notification/ Updates"} />
      <OrganizationHeader />
      <section className="flex flex-col gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <JobPostingRow key={index} />
        ))}
      </section>
      <JobPostingRow />
    </div>
  );
};

export default Main;
