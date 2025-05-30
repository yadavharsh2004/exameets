import React from "react";

const ExamGrid = ({ exams = [] }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="border border-blue-700 rounded shadow-md flex flex-col justify-between h-32"
          >
            <div className="flex-1 flex items-center justify-center text-lg font-semibold text-center px-2">
              {exam.name}
            </div>
            <a
              href={exam.link || "#"}
              className="bg-sky-800 text-white py-2 w-full text-center hover:bg-blue-900"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamGrid;
