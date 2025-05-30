import React from 'react';

type cardProps = {
  title: string;
  amount: string;
  description: string;
  total: string;
  icon: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
};

const DashboardCard = ({
  title,
  amount,
  description,
  total,
  icon: Icon,
  className = '',
  style = {},
}: cardProps) => {
  return (
    <div className={`relative p-5 h-[7rem] rounded-[15px] w-full sm:w-[15rem] md:w-full shadow-lg  ${className}`} style={style}>
      <h5 className="text-[14px] text-white ">{title}</h5>
      <span className="font-bold font-bolder text-[19px] text-white">{amount}</span>
      <p className="text-gray-100 text-[13px]">
        {description}: <span className="text-white font-bold text-[14px]">{total}</span>
      </p>
      <Icon className="absolute top-3 right-3 border w-[2rem] h-[2rem] p-1 bg-white opacity-25 rounded-[8px]"/>
    </div>
  );
};

export default DashboardCard;
