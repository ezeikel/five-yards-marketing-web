import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type IconProps = {
  name?: IconName;
  type?: IconPrefix;
  color?: string;
  size?: string;
};

const Icon = ({
  name,
  type = "fal",
  color = "var(--color-black)",
  size = "lg",
  ...props
}: IconProps) => <FontAwesomeIcon icon={[type, name]} {...props} />;

export default Icon;
