import React from "react";
import "./services.scss";
import  maple from  "../../assets/maple2.gif";

const Services = () => {
  return (
    <section className="services">
      <div className="services__wrapper">
        <div className="services__image">
          <div>
            <h1 className="services__image-title">How We Do Business
            
            <img className="services__logo" src={maple} alt="maple leaf"/></h1>
          </div>
        </div>
        <div className="services__blurb">
          <p>
            MiNutri Care is a customer centric firm and all of our endeavors are
            dedicated towards our customer's satisfaction. We source even the
            most logistically difficult products and make it readily available
            for our customers.
            <br />
            At MiNutri Care we ensure the quality of the products to fulfill the
            needs of our customers. Our transparent communication system helps
            our customers to source and buy any product they need from around
            the world with ease. The products are often tailored to suit a
            specific request of a particular customer, once again making sure
            even the smallest needs are met. MiNutri Care has reliable logistics
            partners in India and around the world to ensure safe and timely
            delivery of the products. The packaging of the product is also
            customized as per customer request and our entire inventory is
            offered in many varied specifications.
            <br />
            At MiNutri Care the customers are at the helm of their purchase
            needs, which is evident in our loyal customer base in both India and
            abroad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
