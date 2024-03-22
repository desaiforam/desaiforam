import React from "react";
import CustomCard from "./CustomCard";
import Carousel from "react-elastic-carousel";
import Timer from "./Timer";

const ToDays = ({ posts }) => {
  return (
    <>
      <div className="container flex-column">
        <div className="name flex-row w-100">
          <svg
            width="20"
            height="40"
            viewBox="0 0 20 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="40" rx="4" fill="#DB4444" />
          </svg>
          <span className="Today"> Today’s</span>
        </div>

        <div className="d-flex flex-row w-100 justify-content-between  align-items-end">
          <div className="sales d-flex align-items-end gap-5 mb-0">
            <h3 className="mb-0 ">Flash Sales</h3>
            <div className="timer show-counter d-flex flex-row gap-4 align-items-center mb-0">
              <Timer />
            </div>
          </div>
        </div>
        <div className="carousel-wrapper  mt-4 ">
          <Carousel itemsToShow={4} pagination={false}>
            {posts.map((item, index) => (
              <div className="container d-flex">
                <div className="card_main">
                  <CustomCard
                    item={item}
                    slider
                    index={index}
                    lisoforoduct={posts}
                    key={`ti-${index}`}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center">
        <button
          className="btn btn-danger mt-5"
          style={{ height: "20", width: "20", align_item: "center" }}
        >
          View All Products
        </button>
      </div>
    </>
  );
};

export default ToDays;
