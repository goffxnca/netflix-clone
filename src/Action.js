import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import "./Action.css";

function Action({ Icon, solidStyle = false }) {
  return (
    <div class="action">
      <Tooltip title="Delete">
        <IconButton
          className={`${solidStyle && "action--solid"}`}
          aria-label="delete"
        >
          <Icon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Action;
