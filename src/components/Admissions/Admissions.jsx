import React from 'react'
import Header from '../Govt/Header'
import JobSearch from '../SoftwareJobs/JobSearch'
import AdmissionsHeader from './AdmissionsHeader'
import AdmissionsCard from './AdmissionsCard'

const Admissions = () => {
  return (
    <div>
    <Header />
    <JobSearch header={"Admissions Page"} />
    <AdmissionsHeader />
    <section className="flex flex-col gap-2">
    {Array.from({ length: 8 }).map((_, index) => (
      <AdmissionsCard key={index} />
    ))}
  </section>
</div>
  )
}

export default Admissions