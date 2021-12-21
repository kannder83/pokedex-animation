const Lower = ({ handleClick }) => {
  return (
    <section className="lower_box" onClick={handleClick}>
      <div className="middle_circle_down">
        <div className="middle_circle_down_in"></div>
      </div>
      <div className="lower_circle_left">
        <div className="outside_lower_cirlce_left">
          <div className="outside_lower_circle_left_2">
            <div className="outside_lower_circle_left_3"></div>
          </div>
        </div>
      </div>
      <div className="lower_circle_right">
        <div className="outside_lower_cirlce_right">
          <div className="outside_lower_circle_right_2">
            <div className="outside_lower_cirlce_right_3"></div>
          </div>
        </div>
      </div>
      <div className="lower_center_circle">
        <div className="center_circle_blink"></div>
      </div>
    </section>
  );
};

export { Lower };
