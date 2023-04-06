/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    image: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { image } = this.props;

    return (
      <div className="carousel">
        <img src={image[active]} alt="animal" />
        <div className="carousel-smaller">
          {image.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Carousel;
