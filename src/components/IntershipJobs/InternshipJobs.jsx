import React from 'react'
import Header from '../Govt/Header'
import JobSearch from '../SoftwareJobs/JobSearch'
import JobListingHeader from '../SoftwareJobs/JobListingHeader'
import JobListingCard from '../SoftwareJobs/JobListingCard'

const InternshipJobs = () => {
  return (
    <div>
        <Header />
        <JobSearch header={"Internship Jobs"} />
        <JobListingHeader />
        <section className="flex flex-col gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <JobListingCard key={index} />
        ))}
      </section>
    </div>
  )
}

export default InternshipJobs