import React from "react";
import "./products.scss";
import  maple from  "../../assets/maple2.gif";


const Products = () => {
  return (
    <section className="products">
      <div className="products__wrapper">
        <div className="products__image">
          <div>
            <h1 className="products__image-title">Our Products
            <img className="products__logo" src={maple} alt="maple leaf"/>
            </h1>
          </div>
        </div>
        <h2 className="products__list-title">
            Contact Us for the Specifications and Pricing
          </h2>
        <div className="products__list">
          
          <h3 className="products__item">
            ALGINIC ACID
            <h4 className="products__subTitle">(IP/BP)</h4>
          </h3>
          <h3 className="products__item">
            BETACAROTENE 30%
            <h4 className="products__subTitle">(BASF)</h4>
          </h3>
          <h3 className="products__item">
            CALCIUM AGLINATE
            <h4 className="products__subTitle">(IP/BP)</h4>
          </h3>
          <h3 className="products__item">
            CALCUM CARBONATE
            <h4 className="products__subTitle">(IP/BP/USP)</h4>
          </h3>
          <h3 className="products__item">
            CARBOXYMETHYL CELLULOSE CALCIUM
            <h4 className="products__subTitle">(IP/BP/USP/EP)</h4>
          </h3>
          <h3 className="products__item">
            CARMELLOSE CALCIUM
            <h4 className="products__subTitle">( IP/BP/USP/EP)</h4>
          </h3>
          <h3 className="products__item">
            CROSCARMELLOSE SODIUM
            <h4 className="products__subTitle">(IP/BP/USP/EP)</h4>
          </h3>
          <h3 className="products__item">
            DICALCIUM PHOSPHATE
            <h4 className="products__subTitle">(DI BASIC /TRI BASIC/ ANHYDROUS ) IP/BP/USP/EP </h4>
          </h3>
          <h3 className="products__item">
            GLYCERINE USP
            <h4 className="products__subTitle">( IP/BP/USP/EP)</h4>
          </h3>
          <h3 className="products__item">
            SODIUM STARCH GLYCOLATE
          </h3>
          <h3 className="products__item">
            HERBAL EXTRACTS
            {/* <h4>(IP/BP)</h4> */}
          </h3>
          <h3 className="products__item">
            Lactitol monohydrate
            {/* <h4>(IP/BP)</h4> */}
          </h3>
          <h3 className="products__item">
            LYCOPENE 10% DC
            <h4 className="products__subTitle">(BASF)</h4>
          </h3>
          <h3 className="products__item">
            MANNITOL EXCEPIENT GRADE
            <h4 className="products__subTitle">(IP/BP/USP)</h4>
          </h3>
          <h3 className="products__item">
            MANNITOL SPRAY DRIED GRADE
            <h4 className="products__subTitle">(IP/BP/USP)</h4>
          </h3>
          <h3 className="products__item">
            MCC SPHERES USP
            <h4 className="products__subTitle">(NF/PH EUR)</h4>
          </h3>
          <h3 className="products__item">PHARMA GRADE SUCROSE.</h3>
          <h3 className="products__item">
            PREGELATINISE STARCH
            <h4 className="products__subTitle">(IP/BP/USP)</h4>
          </h3>{" "}
          <h3 className="products__item">
            PURIFIED TALC
            <h4 className="products__subTitle">(IP/BP)</h4>
          </h3>{" "}
          <h3 className="products__item">
            SODIUM AGLINATE
            <h4 className="products__subTitle"> (IP/BP/USP/EP)</h4>
          </h3>{" "}
          <h3 className="products__item">
            SODIUM CARBOXYMETHYL CELLULOSE
            <h4 className="products__subTitle">IP /BP/USP/EP( TYPE –A/B) - POTATO /CORN BASED</h4>
          </h3>
          <h3 className="products__item">
            SUGAR SPHERES
            <h4 className="products__subTitle"> ( BP/USP/EP)</h4>
          </h3>
          <h3 className="products__item">
            TITANIUM DIOXIDE
            <h4 className="products__subTitle"> (KRONOS)</h4>
          </h3>
          <h3 className="products__item">Triethyl citrate</h3>
          <h3 className="products__item">
            5-Amino-O-Cresol
            <h4 className="products__subTitle">(2835-95-2)</h4>
          </h3>
          <h3 className="products__item">
            2,6-bis<br/>
            (Hydroxyethylamino)<br/>
            toluene sulfate
            <h4 className="products__subTitle"> (144930-25-6)</h4>
          </h3>
          <h3 className="products__item">
            5-nitro-O-Toludine
            <h4 className="products__subTitle">(99-55-8)</h4>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Products;
