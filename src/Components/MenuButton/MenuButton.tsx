import { IconButton, IconButtonProps, Tooltip } from "@mui/material";

import "./MenuButton.css";

interface MenuButtonProps extends IconButtonProps {
  Icon: any;
  tooltip: string;
  isActive?: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
  const { Icon, tooltip, isActive, ...rest } = props;

  return (
    <Tooltip title={tooltip}>
      <IconButton {...rest} color="inherit" disableRipple>
        <Icon className={isActive ? "active" : ""} />
      </IconButton>
    </Tooltip>
  );
};

export default MenuButton;
