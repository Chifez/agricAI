import React, { ReactNode } from 'react';

const ReportCard = (props: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`overflow-hidden flex flex-col h-full rounded-md ${props.className}`}
    >
      <div className=" bg-green-600 text-white p-2">
        <h1 className="font-semibold">{props.title}</h1>
      </div>
      <div className="p-4 bg-secondary flex-1">{props.children}</div>
    </div>
  );
};

export default ReportCard;
