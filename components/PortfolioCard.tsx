import { PortfolioProps } from "@/types/portfolio";
import Image from "next/image";
import React, { useState } from "react";

type PortfolioCardProps = {
  portfolio: PortfolioProps;
  showInfo?: boolean;
};

const PortfolioCard = (props: PortfolioCardProps) => {
  const { portfolio } = props;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div
      key={portfolio?.id}
      className="relative portfolio-card bg-white rounded-xl hover:shadow-lg ring-1 mt-4 ring-gray-200 overflow-hidden"
      data-category={portfolio?.catagory}
    >
      <div className="bg-gray-50">
        <div className="px-5 pt-5">
          <img
            alt=""
            className="rounded-md mx-auto h-[50px]"
            src={"/assets/images/portfolio/" + portfolio?.icon}
          />
          <p className="text-center mt-3 uppercase font-bold">
            {portfolio?.title}&nbsp;
          </p>
          <p className="text-center mt-3 uppercase text-sm">
            {portfolio?.subTitle}&nbsp;
          </p>
          <div className="min-h-48 flex items-center justify-center mt-3">
            <Image
              height={291}
              width={portfolio?.catagory === "mobile" ? 182 : 407}
              alt=""
              className="rounded-md"
              src={"/assets/images/portfolio/" + portfolio?.image}
            />
          </div>
        </div>
        <div className="p-6 bg-white">
          <p className="text-gray-600 mb-2 line-clamp-2 font-semibold">
            {portfolio?.description}{" "}
          </p>
          <p
          className="cursor-pointer mb-4 text-blue-600"
          onClick={() => setShowInfo(true)}>
            Read more...
          </p>
          <p className="text-red-600 text-xs">{portfolio?.techStack} </p>
        </div>
      </div>
      <div className={"absolute top-0 w-full h-full bg-gray-900 bg-opacity-75 text-white p-6 overflow-auto" + (!showInfo ? ' left-[100%]' : ' left-0')}>
        <p>
          {portfolio?.description}
        </p>
        {
          portfolio?.keyFeature &&
          <ul className="my-5">
            <li className="font-bold mt-3">Key Features:</li>
            {portfolio?.keyFeature?.map((feature, index) => (
              <li key={index} className="ml-4">
                {feature}
              </li>
            ))}
          </ul>
        }
        {
          portfolio?.tools &&
          <ul className="my-5">
            <li className="font-bold mt-3">Tech & Tools:</li>
            {portfolio?.keyFeature?.map((feature, index) => (
              <li key={index} className="ml-4">
                {feature}
              </li>
            ))}
          </ul>
        }
        <button
          className="border px-3 py-1 mt-3 w-full rounded-lg bg-white cursor-pointer mb-4 text-black"
          onClick={() => setShowInfo(false)}>
            Close
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
