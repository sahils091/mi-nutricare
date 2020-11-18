import React from "react";
import "./main.scss";
import  maple from  "../../assets/maple2.gif";

const Main = () => {
  return (
    <section className="main">
      <div className="main__wrapper">
        <div className="main__image">
          <div>
            <h1 className="main__image-title">
              Welcome to Minutri Care&reg;
              <img className="main__logo" src={maple} alt="maple leaf"/>
              
            </h1>
          </div>
        </div>
        <div className="main__blurb">
          <p>
            MiNutri Care is a trading firm catering to Pharma, Nutra, Feed and
            Food industries. We are a leading exporter, importer and stockist of
            raw material, solvents, food colors and flavors. Our clients range
            from large corporate organizations to stand alone manufacturing
            units. Our ethos is simple, providing quality with responsible
            sourcing at the most competitive prices possible.
          </p>
        </div>
        <div className="main__mission">
          <h2 className="main__mission-title"> Our Mission</h2>
          <p>
            MiNutri Care is a proprietary firm owned by Mr. Manoj Singh. He has
            been in the Indian pharmaceutical industry for more than two
            decades. In his long career, he has managed a major manufacturing
            unit and also been a head honcho in purchase and sourcing for many
            pharma corporates. MiNutri Care is the brain child of years of
            experience gained by hard work in the field and an unshakable belief
            in quality and perfection.
          </p>
          <p>
            MiNutri Care as a firm is in existence because of two words
            perfection and quality. Our mission is ethical business while
            ensuring the best quality possible. We strive for perfection every
            time a product leaves out doorstep. It starts from the order itself
            to timely delivery of the product.
            <br />
            MiNutri Care aims to be a one stop shop for any requirements of our
            clients thus easing the process of purchase. All our endeavors have
            the customer at the focal point, resulting in total customer
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
