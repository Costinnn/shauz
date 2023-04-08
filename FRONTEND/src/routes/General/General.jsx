import { useParams } from "react-router-dom";

import GENERAL_DATA from "../../generalData";

import "./General.scss";

const General = () => {
  const urlId = useParams().id;
  const data = GENERAL_DATA.filter((element) =>
    element.id === urlId ? element : ""
  );
  const addSpace = (text) => {
    return text.replace(/\n/g, "<br>");
  };

  return (
    <div className="section-narrow general-page">
      <h1>{data[0].title}</h1>
      <p dangerouslySetInnerHTML={{ __html: addSpace(data[0].desc) }} />
    </div>
  );
};

export default General;
