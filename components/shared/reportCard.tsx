import React, { ReactNode } from 'react';

const ReportCard = (props: { title: string; children: ReactNode }) => {
  return (
    <div className="w-fit h-fit">
      <div className="rounded-tl-md rounded-tr-md bg-primary text-white p-1">
        <h1 className="font-semibold">{props.title}</h1>
      </div>
      <div className="p-2 bg-secondary">{props.children}</div>
    </div>
  );
};

export default ReportCard;
