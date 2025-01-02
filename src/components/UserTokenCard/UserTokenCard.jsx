import React, { useState } from "react";
import CardBox from "./CardBox";

const UserTokenCard = () => {
  const tokenArray = [
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 1",
      tokenDisc: "Description of Token 1",
      tokenUrl: "https://www.example.com/token1",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 2",
      tokenDisc: "Description of Token 2",
      tokenUrl: "https://www.example.com/token2",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 3",
      tokenDisc: "Description of Token 3",
      tokenUrl: "https://www.example.com/token3",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 4",
      tokenDisc: "Description of Token 4",
      tokenUrl: "https://www.example.com/token4",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 5",
      tokenDisc: "Description of Token 5",
      tokenUrl: "https://www.example.com/token5",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 6",
      tokenDisc: "Description of Token 6",
      tokenUrl: "https://www.example.com/token6",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 7",
      tokenDisc: "Description of Token 7",
      tokenUrl: "https://www.example.com/token7",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 8",
      tokenDisc: "Description of Token 8",
      tokenUrl: "https://www.example.com/token8",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 9",
      tokenDisc: "Description of Token 9",
      tokenUrl: "https://www.example.com/token9",
    },
    {
      tokenLogoURL: "https://via.placeholder.com/150",
      tokenName: "Token 10",
      tokenDisc: "Description of Token 10",
      tokenUrl: "https://www.example.com/token10",
    },
  ];

  // State for managing current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the current set of items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tokenArray.slice(indexOfFirstItem, indexOfLastItem);

  // Next and Previous button handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(tokenArray.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {" "}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 place-items-center">
        {currentItems.map((item, index) => (
          <CardBox tokenData={item} key={index} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-evenly w-[20%] m-auto mt-6 gap-3">
        <button
          onClick={prevPage}
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition duration-300 hover:bg-blue-700"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm transition duration-300 hover:bg-blue-700"
          disabled={currentPage === Math.ceil(tokenArray.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UserTokenCard;
