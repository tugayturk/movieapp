import  { useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/About.scss";
import AOS from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])
  return (
    <div className="about__page">
      <Navbar />
      <div className="about__container">
        <h1 className="about__title">About Us</h1>
        <section className="about__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          faucibus, felis id consectetur scelerisque, magna mi consectetur
          magna, et tristique nisl leo ut erat. Etiam maximus nisl nec cursus
          facilisis. Proin vel aliquet enim. Ut id tortor lectus. Sed et
          pharetra turpis. Suspendisse aliquet efficitur tellus eget tempor.
          Quisque rhoncus iaculis diam, sit amet tempor massa tincidunt vitae.
          Sed tempus gravida venenatis. Nullam mollis eleifend est a laoreet.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nec lorem rutrum, porttitor sem vitae,
          finibus turpis. Ut nulla enim, ornare non elementum quis, ullamcorper
          eget felis. Aenean vitae lorem et lectus gravida sagittis.
          Pellentesque venenatis interdum felis, eget vulputate leo tempus
          consectetur. Nullam vel nisi a purus mattis suscipit vel eu dui. Donec
          iaculis, lorem eu lacinia fringilla, mi nibh cursus metus, eu
          convallis felis orci sit amet nulla. Suspendisse non justo pulvinar,
          mollis elit eget, viverra est. Suspendisse hendrerit erat mi, sit amet
          dignissim lacus posuere non. Mauris nec massa vulputate, tristique
          velit non, efficitur nulla. Nulla sed imperdiet lacus, a tempor quam.
          Sed erat lectus, pretium ut elit in, bibendum placerat tellus. Ut at
          nisl auctor, scelerisque nunc at, rhoncus justo. Morbi iaculis viverra
          mauris, ut finibus eros. Quisque ac neque nibh. Morbi imperdiet urna
          enim, vulputate fermentum enim commodo vitae. Nulla finibus magna ut
          augue blandit varius. Morbi risus sapien, varius non massa a, laoreet
          fermentum ante. Nulla quis consequat nibh. Proin pretium ipsum sit
          amet dui egestas interdum. Morbi porttitor, tortor in tempor
          malesuada, ligula tortor tempor metus, non tincidunt sapien nisi quis
          metus. Nullam euismod hendrerit est vel semper. Quisque ac lorem vel
          odio viverra bibendum. Vestibulum turpis orci, pellentesque et mi sit
          amet, tempor aliquam nibh. Sed ac turpis et tellus luctus hendrerit a
          eu orci. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. 
        </section>
        <footer className="about__footer">
          <div  data-aos="fade-right" className="about__footer__Address">
            <div >
            <FontAwesomeIcon size="xl" color="#091E37" icon={faLocationDot} />
              <p>
                Addres:Yeşilköy Sb. Mh. Havaalanı Sk. No:1/55 Bakırköy /
                İstanbul - TURKEY
              </p>
            </div>
            <div >
            <FontAwesomeIcon size="xl" color="#091E37" icon={faLocationDot} />
              <p>
                Address:Florya Mh. Kartal Sk. No:19A Avcılar / İstanbul -TURKEY
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="about__footer__Info">
            <div >
            <FontAwesomeIcon size="xl" color="#091E37" icon={faEnvelope} />
              <p> Mail:loremipsum@gmail.com</p>
            </div>
            <div >
            <FontAwesomeIcon size="xl" color="#091E37" icon={faPhone} />
              <p>Phone:+905376378355</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
