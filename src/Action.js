import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import "./Action.css";

function Action({ Icon, tooltip, solidStyle = false }) {
  return (
    <div className="action">
      <Tooltip title={tooltip} placement="top">
        <IconButton className={`${solidStyle && "action--solid"}`}>
          <Icon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Action;
