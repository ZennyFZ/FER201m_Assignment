import { Slider, Slide, Caption } from "react-materialize";
export default function Banner() {
  return (
    <div className="Main">
      <h4 style={{ color: "white" }}>Hot Seasonal Anime</h4>
      <div className="bottom-line2"></div>
      <Slider>
        <Slide
          image={
            <img
              alt=""
              className="opa"
              src="https://img1.ak.crunchyroll.com/i/spire3/a3bc7ccd6bbb2e675eecc2b65bd626311641742073_main.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3 style={{ color: "black" }}>
              Arknights Animation: Prelude to Dawn
            </h3>
            <h5 style={{ color: "black" }}>Oct 29, 2022</h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              className="opa"
              src="https://globalcastingresources.com/wp-content/uploads/2022/10/image-20-1024x576.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3 style={{ color: "black" }}>Bleach: Thousand-Year Blood War</h3>
            <h5 style={{ color: "black" }}>Oct 11, 2022</h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              className="opa"
              src="https://assets-prd.ignimgs.com/2022/08/05/chainsaw-man-1659703999934.jpg?width=1000&height=390"
            />
          }
        >
          <Caption placement="center">
            <h3 style={{ color: "black" }}>Chainsaw Man</h3>
            <h5 style={{ color: "black" }}>Oct 12, 2022</h5>
          </Caption>
        </Slide>
      </Slider>
    </div>
  );
}
