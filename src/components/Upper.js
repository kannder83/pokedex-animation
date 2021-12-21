const Upper = ({ handleClick }) => {
  return (
    <section className="upper_box" onClick={handleClick}>
      <div className="upper_circle_left">
        <div className="outside_upper_cirlce_left">
          <div className="outside_upper_circle_left_2">
            <div className="outside_upper_circle_left_3"></div>
          </div>
        </div>
      </div>
      <div className="upper_circle_right">
        <div className="outside_upper_cirlce_right">
          <div className="outside_upper_cirlce_right_2">
            <div className="outside_upper_cirlce_right_3"></div>
          </div>
        </div>
      </div>
      <div className="upper_center_circle">
        <div className="center_circle_blink"></div>
      </div>
    </section>
  );
};

export { Upper };
