import { React } from "react";
// import Allrecepies from "./Allrecepies.jsx";
import data from "../data/data.json"

const Home = ({ changeView }) => {

  return (
    <div>
      <div className="latest_trand_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="trand_info text-center">
                <h3>Discover latest trending recepies</h3>
                <a className="boxed-btn3" onClick={() => changeView("Allrecepies")}>
                  View all recepies
                  <div>
                    {data.map((item) => (
                      <ul>
                      <li>{item.recepie_Name}</li>
                      <li>{item.Cook_Time}</li>
                      <li>{item.Prep_Time}</li>
                      <li>{item.Serves}</li>
                      <li>{item.recepie_Ingredients}</li>
                      <li>{item.recepie_Image}</li>
                      <li>{item.categorie}</li>
                      <li>{item.recepie_Description}</li>
                      </ul>
                      ))} 
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
