import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import sectionStyle from "../../styles/Template/templateCategory.module.css";
import { TemplateCategories } from "../../constants/data";

interface TemplateFeatureData {
  data: TemplateFeature;
}

interface TemplateFeature {
  title: string;
  desc: string;
  templates: BlockTag[];
}

interface BlockTag {
  icon: any;
  title: string;
}

const TemplateCategory = () => {
  const params = useParams();

  function renderView() {
    switch (params.id) {
      case "Productivity":
        return (
          <TemplateCategoryPreview data={TemplateCategories.Productivity} />
        );

      case "Engagements":
        return <TemplateCategoryPreview data={TemplateCategories.Engagement} />;

      case "Motivation":
        return <TemplateCategoryPreview data={TemplateCategories.Motivation} />;

      default:
        return null;
    }
  }

  return (
    <>
      <Nav />
      <div className={sectionStyle.templateTag_Container}>{renderView()}</div>
    </>
  );
};

export default TemplateCategory;

const TemplateCategoryPreview = ({ data }: TemplateFeatureData) => {
  return (
    <div className={sectionStyle.main}>
      <h2>{data.title}</h2>
      <p>{data.desc}</p>

      <h4>Templates </h4>
      {data.templates.map((template, i) => {
        return (
          <div className={sectionStyle.tag_card}>
            <img src={template.icon} alt={template.title} />
            <p>{template.title} </p>
          </div>
        );
      })}
    </div>
  );
};
