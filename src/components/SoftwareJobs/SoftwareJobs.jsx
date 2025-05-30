import React from 'react'
import Header from '../Govt/Header'
import JobSearch from './JobSearch'
import JobListingHeader from './JobListingHeader'
import JobListingCard from './JobListingCard'

const SoftwareJobs = () => {
  return (
    <div>
        <Header />
        <JobSearch header={"Software Jobs"} />
        <JobListingHeader />
        <section className="flex flex-col gap-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <JobListingCard key={index} />
        ))}
      </section>
    </div>
  )
}

export default SoftwareJobs