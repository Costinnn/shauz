import blaster from "../../assets/sizes/blaster.png";
import changer from "../../assets/sizes/changer.png";
import creator from "../../assets/sizes/creator.png";
import cruiser from "../../assets/sizes/cruiser.png";
import fringer from "../../assets/sizes/fringer.png";
import fuser from "../../assets/sizes/fuser.png";
import miniCreator from "../../assets/sizes/mini-creator.png";
import sparker from "../../assets/sizes/sparker.png";
import stroller from "../../assets/sizes/stroller.png";

import "./Sizes.scss";

const Sizes = () => {
  return (
    <main className="section-narrow sizes-page">
      <h1>TABELE CU MARIMI</h1>
      <p>Marimi pentru: Tricou 1, Tricou 2</p>
      <img src={fuser} alt="shauz" />
      <p>Marimi pentru: Tricou 3, Tricou 4</p>
      <img src={creator} alt="shauz" />
      <p>Marimi pentru: Tricou 5, Tricou 6</p>
      <img src={blaster} alt="shauz" />
      <p>Marimi pentru: Tricou 7</p>
      <img src={sparker} alt="shauz" />
      <p>Marimi pentru: Tricou 8, Tricou 9</p>
      <img src={fringer} alt="shauz" />
      <p>Marimi pentru bluze</p>
      <img src={stroller} alt="shauz" />
      <p>Marimi pentru hanorace</p>
      <img src={cruiser} alt="shauz" />
      <p>Bluza copii</p>
      <img src={changer} alt="shauz" />
      <p>Tricou copii</p>
      <img src={miniCreator} alt="shauz" />
    </main>
  );
};

export default Sizes;
