import React from "react";
import {
  ChipListComponent,
  ChipsDirective,
  ChipDirective,
} from "@syncfusion/ej2-react-buttons";

const Card = ({ title, content, tags }) => {
  let tagList = tags.split(',')
  return (
    <div className="mt-2">
      <div className="e-card" id="basic">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-title">{title}</div>
          </div>
        </div>
        <div className="e-card-content">{content}</div>
        <ChipListComponent id="chip-avatar">
          <ChipsDirective className="float-left">
             {tagList.map((tag) => (
                <ChipDirective text={tag} className="float-left"></ChipDirective> 
             ))}  
          </ChipsDirective>
        </ChipListComponent>
      </div>
    </div>
  );
};

export default Card;
