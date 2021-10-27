import gmail from './gmail.svg';
import github from "./github.svg";
import linkedIn from './linkedIn.svg';

export default function Home() {
  return (
    <>
      <div className="section">
        <div className="hero">
          <div className="hero_text">
            <h2>Aung Paing</h2>
            <p className="hero_text_job">
              Developer (Front End, Machine Learning)
            </p>
          </div>
          <div className="hero_img"></div>
        </div>
      </div>
      <div className="section">
        <div className="about">
          <h2 className="subtitle">About</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            corrupti! Soluta maiores velit non, quas odio porro repellendus
            dolore, recusandae dignissimos neque saepe amet? Doloremque, neque
            totam laboriosam amet, eos expedita exercitationem natus recusandae,
            eveniet aliquam eaque hic. Temporibus commodi incidunt atque enim
            accusamus ad qui consequatur adipisci fugit? Optio!
          </p>
        </div>
      </div>
      <div className="section">
        <div className="contact">
          <h2 className="subtitle">Contact</h2>
          <div className="contacts">
            <a href="aungpaingcha1@gmail.com" className="contact_item">
              <img className="contact_way" src={gmail} alt="Aung Paing Gmail Account" />
              <p>@aungpaing98</p>
            </a>
            <a href="https://github.com/aungpaing98" className="contact_item">
              <img className="contact_way" src={github} alt="Aung Paing Github Account" />
              <p>@aungpaingcha1</p>
            </a>
            <a href="https://linkedin.com/aungpaing98" className="contact_item">
              <img className="contact_way" src={linkedIn} alt="Aung Paing LinkedIn Account" />
              <p>@aungpaing98</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
