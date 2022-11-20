import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { TemplateList } from "../../constants/data";
import { RiArrowRightSLine } from "react-icons/ri";
import rocket from "../../Assets/Images/Rocket.svg";
import templateStyle from "../../styles/Template/templateFeature.module.css";
import Nav from "../../components/Nav";

const textContent = [
  "Team members are required to share what they worked on daily, and blockers they had and what they plan to work on the following day.",
  "Lorem ipsum dolor sit amet consectetur. Non suspendisse sit a eget eu. Molestie molestie pellentesque dui bibendum in nibh tristique sit posuere. Elementum massa ut aenean suspendisse ut pharetra quis.",

  " Tortor amet consectetur ullamcorper sem aliquam amet. Auctor sapien lorem tincidunt risus enim blandit volutpat scelerisque in. Auctor eu egestas ullamcorper consequat venenatis massa id pulvinar.",

  " Orci massa maecenas urna tortor. Scelerisque vestibulum dictumst praesent malesuada tristique aliquam. Non vestibulum ac mauris malesuada egestas lectus. Porttitor sed vitae laoreet sit id habitant a. Imperdiet varius sed arcu ipsum enim lacus. Nam ac arcu quis diam nulla sem pellentesque. Vulputate at tincidunt nullam ipsum leo aenean consequat commodo.",

  " Eget ultrices integer eget quam. Faucibus sit lorem ipsum odio. Nullam ut ipsum blandit turpis orci blandit eu quam.",
];

interface TemplateFeature {
  icon: any;
  title: string;
  slug: string;
  tag: string;
  description: string;
}

const TemplateFeature = () => {
  //   const params = useParams();
  const navigate = useNavigate();
  //   const [content, setContent] = React.useState({});

  //   React.useState(() => {
  //     const data = TemplateList.filter((template) => template.slug === params.id);

  //     console.log(data);
  //     setContent(data[0]);
  //   });

  return (
    <>
      <Nav />
      <div className={templateStyle.main}>
        <div className={templateStyle.feature_container}>
          <div className={templateStyle.feature_content}>
            <div className={templateStyle.feature_nav}>
              <span onClick={() => navigate(-1)}>Templates</span>
              <RiArrowRightSLine fontSize={20} />
              {/* <span>{content?.title}</span> */}
              <span>Team sum up</span>
            </div>

            <div className={templateStyle.feature_title}>
              <img src={rocket} alt="rocket" />
              <div>
                <h3>Team Sum Up</h3>
                <span>Productivity</span>
              </div>
            </div>

            <div>
              {textContent.map((txt, i) => (
                <p key={i}>{txt}</p>
              ))}
            </div>
            <Button className={templateStyle.featureBtn}>Get Started</Button>
          </div>
          <div>ijuhjnkl</div>
        </div>
      </div>
    </>
  );
};

export default TemplateFeature;
