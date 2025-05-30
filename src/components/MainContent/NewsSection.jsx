import React from "react";
import NotificationItem from "./NotificationItem";

function NewsSection() {
  const notifications = Array(9).fill(
    "Important notification : Entrance exam for IITs - JEE Advanced schedueled on May 3"
  );

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-semibold underline text-slate-700">
        What's New
      </h2>
      <div className="flex flex-col gap-5">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} text={notification} />
        ))}
      </div>
      <div className="mt-5 text-2xl font-semibold text-slate-700">
        <a href="#" className="hover:text-slate-900">
          View All &gt;&gt;
        </a>
      </div>
    </section>
  );
}

export default NewsSection;
