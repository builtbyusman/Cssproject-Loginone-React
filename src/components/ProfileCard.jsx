import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="con">
      <div className="blu"></div>

      <div className="img">
        <img src="/2.jpg" alt="profile" />
      </div>

      <div className="wth">
        <div className="fr">
          <p className="r2">codingLab</p>
          <p className="r3">youtuber & blogger</p>
        </div>

        <div className="sc">
          <span><i className="fa-brands fa-facebook-f t1"></i></span>
          <span><i className="fa-brands fa-twitter t2"></i></span>
          <span><i className="fa-brands fa-instagram t3"></i></span>
          <span><i className="fa-brands fa-youtube t4"></i></span>
        </div>

        <div className="th">
          <button>subscribe</button>
          <button>message</button>
        </div>

        <div className="frr">
          <span><i className="fa-regular fa-heart"></i> 30k</span>
          <p>|</p>
          <span><i className="fa-regular fa-comment"></i> 20k</span>
          <p>|</p>
          <span><i className="fa-solid fa-share"></i> 12k</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;