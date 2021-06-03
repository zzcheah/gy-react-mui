// @ts-nocheck
import { Chip } from "@material-ui/core";
import React from "react";

export const STATUS_CHIPS = {
  NEW: <Chip label="Pending" />,
  COMPLETED: <Chip label="Completed" color="success" />,
  PROCESSING: <Chip label="Processing" color="info" />,
  ERROR: <Chip label="Error" color="error" />,
  DEFAULT: <Chip label="Unknown" color="warning" />,
};
