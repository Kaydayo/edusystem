import React, { useState } from "react";
import FieldType from "../../components/FieldType";
import Select from "../../components/Select";
import companyStyle from "../../styles/CompanyOnboarding/Company.module.css";
import { employeeCount } from "../../constants/data";
import { CompanyFormEnum } from "../../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addValuesList, handleFormInput } from "../../redux/companyonboard";
import Button from "../../components/Button";
import { toast, ToastContainer } from "react-toastify";

const CompanyForm = () => {
  const [currValue, setCurrValue] = useState<string>("");
  const dispatch = useDispatch();
  const errors = useSelector((state: RootState) => state.companyonboard.errors);
  const form = useSelector((state: RootState) => state.companyonboard);
  const addedCompanyValues = useSelector(
    (state: RootState) => state.companyonboard.info.values
  );

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      handleFormInput({
        key: CompanyFormEnum.EMPLOYEECOUNT,
        value: e.target.value,
      })
    );
  };

  return (
    <div className={companyStyle.admin}>
      <FieldType
        type="text"
        name="Company name*"
        formType={CompanyFormEnum.COMPANYNAME}
      />
      <Select
        data={employeeCount}
        tittle="Employee Count"
        name="employeeCount"
        placeHolder="Please Select"
        value={form.info.employeeCount}
        change={selectOption}
      />

      <div className="lowFieldInput">
        <label htmlFor="mission">Mission</label>
        <textarea
          name="mission"
          id="mission"
          rows={10}
          placeholder="Mission"
          value={form.info.mission}
          onChange={(e) => {
            dispatch(
              handleFormInput({
                key: CompanyFormEnum.MISSION,
                value: e.target.value,
              })
            );
          }}
        ></textarea>
      </div>
      <div className="lowFieldInput">
        <label htmlFor="vision">Vision</label>
        <textarea
          name="vision"
          id="vision"
          rows={10}
          placeholder="Vision"
          value={form.info.vision}
          onChange={(e) =>
            dispatch(
              handleFormInput({
                key: CompanyFormEnum.VISION,
                value: e.target.value,
              })
            )
          }
        ></textarea>
      </div>
      {/* <div className="fieldInput">
        <label htmlFor="values">Values</label>
        <textarea
          name="values"
          id="values"
          rows={10}
          placeholder="Values"
          value={form.info.values}
          onChange={(e) => {
            dispatch(
              handleFormInput({
                key: CompanyFormEnum.VALUES,
                value: e.target.value,
              })
            );
          }}
        ></textarea>
      </div> */}
      <div className="fieldInput">
        <label htmlFor="aboutCompany">About Your Company</label>
        <textarea
          name="aboutCompany"
          id="aboutCompany"
          rows={10}
          placeholder="About Your Company"
          value={form.info.aboutCompany}
          onChange={(e) => {
            dispatch(
              handleFormInput({
                key: CompanyFormEnum.ABOUTCOMPANY,
                value: e.target.value,
              })
            );
          }}
        ></textarea>
      </div>
      <div className="fieldInput">
        <label htmlFor="values">Values</label>
        {addedCompanyValues &&
          addedCompanyValues.map((value: string, index: any) => {
            return (
              <div className={companyStyle.values} key={index}>
                <input
                  value={value}
                  onChange={(e) => {
                    const updateValue = addedCompanyValues.map(
                      (item: string, idx: any) => {
                        if (idx === index) {
                          return e.target.value;
                        } else {
                          return item;
                        }
                      }
                    );

                    if (e.target.value === "") {
                      const newList = addedCompanyValues.filter(
                        (currValue: string) => currValue !== value
                      );
                      dispatch(addValuesList(newList));
                    } else {
                      dispatch(addValuesList(updateValue));
                    }
                  }}
                />
                <button
                  className={companyStyle.removeBtn}
                  onClick={() => {
                    const newList = addedCompanyValues.filter(
                      (currValue: string) => currValue !== value
                    );
                    dispatch(addValuesList(newList));
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        <div className={companyStyle.values}>
          <input
            value={currValue}
            onChange={(e) => setCurrValue(e.target.value)}
          />
          <button
            onClick={() => {
              if (currValue !== "") {
                dispatch(addValuesList([...addedCompanyValues, currValue]));
                setCurrValue("");
              } else {
                toast("Values field Cannot be empty");
              }
            }}
          >
            Add More
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CompanyForm;
