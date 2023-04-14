import Product from "../../subcomponents/Product";

// import PRODUCTS_DATA from "../../data";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./Category.scss";

const Category = () => {
  const { dbProductsList } = useSelector((state) => state.dbProducts);

  const urlId = useParams().id;

  const products = dbProductsList.filter(
    (product) =>
      product.category[0] === urlId ||
      product.category[1] === urlId ||
      product.category[2] === urlId
  );

  return (
    <main className="section-narrow category-page">
      <h1>
        {urlId === "men" ? "BARBATI" : urlId === "women" ? "FEMEI" : "COPII"}
      </h1>
      <p>
        Descopera noile colectii Shauz. O varietate de tricouri cu imprimeuri
        grafice, design unic si un fit regular sau oversized. Imbracaminte
        conceputa atat pentru evenimente speciale, cat si pentru outfit-ul de zi
        cu zi.
      </p>
      <div className="products">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="text">
        <p>
          Bine-cunoscuti pentru tricourile noastre cu imprimeuri grafice in
          editii limitate si renumiti pentru fit-ul unic al produselor,
          calitatea acestora si modul in care te simti cand porti Shauz,
          produsele noastre se remarca si prin amprenta minima de carbon adusa
          planetei.
        </p>
        <p>
          Daca esti in cautare de o tinuta de strada minimalista, dar cu care sa
          iesi in evidenta, atunci ar trebui sa verifici noua noastra colectie
          "YOUTH" si sa alegi ceea ce ti se potriveste cel mai bine.
        </p>
        <p>
          Esti in cautarea unui outfit cool? Inspira-te de pe pagina noastra de
          instagram si de la clientii care ne-au dat tag in pozele lor.
        </p>
      </div>
    </main>
  );
};

export default Category;
