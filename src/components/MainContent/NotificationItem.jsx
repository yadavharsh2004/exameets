import React from "react";

function NotificationItem({ text }) {
  return (
    <article className="text-xl text-slate-700">
      <span aria-hidden="true">&gt;&gt;</span> {text}
    </article>
  );
}

export default NotificationItem;
