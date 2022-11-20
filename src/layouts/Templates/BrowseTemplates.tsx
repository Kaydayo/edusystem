import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { TemplateList } from "../../constants/data";
import sectionStyle from "../../styles/Template/browseTemplates.module.css";
import { FiArrowRight } from "react-icons/fi";

const BrowseTemplates = () => {
  const navigate = useNavigate();
  const templatesPreview = TemplateList.slice(0, 3);
  return (
    <div className={sectionStyle.section_container}>
      <h2>Templates</h2>
      <p className={sectionStyle.intro}>
        Build a Culture of performance and synergy through our productivity,
        engagement, and recognition templates and tools, all integrated with
        Slack, Teams and Google Workspace.{" "}
      </p>
      <div className={sectionStyle.templatelist_container}>
        {templatesPreview.map((template, i) => {
          return (
            <div key={i} className={sectionStyle.template_Card}>
              <div>
                <img src={template.icon} alt="icon" />
                <h4 className={sectionStyle.template_title}>
                  {template.title}
                </h4>
                <span
                  className={sectionStyle.template_tag}
                  onClick={() =>
                    navigate(`/templates/category/${template.tag}`)
                  }
                >
                  {template.tag}
                </span>
                <p>{template.description}</p>
              </div>

              <Button
                className={sectionStyle.template_CardBtn}
                onClick={() => navigate(`/templates/${template.slug}`)}
              >
                See details
              </Button>
            </div>
          );
        })}
      </div>
      <div className={sectionStyle.browseBtnContainer}>
        <Button
          className={sectionStyle.browseBtn}
          onClick={() => navigate("/templates")}
        >
          <span> Browse all templates</span>
          <FiArrowRight fontSize={25} />
        </Button>
      </div>
    </div>
  );
};

export default BrowseTemplates;
