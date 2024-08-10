import React from "react";
import Zoom from "react-reveal/Zoom";
const SkillCards = (props) => {
  return (
    <Zoom big distance="-10%" duration={1000}>
      <>
        <div class="card py-5 px-4">
          <div class="card-body d-flex flex-column align-items-center">
            <div className="round">
              <img src={props.image} class="card-img-top" alt="..." />
            </div>
            <h3 class="card-title">{props.heading}</h3>
            <p class="card-text">{props.content}</p>
          </div>
        </div>
      </>
    </Zoom>
  );
};

export default SkillCards;
