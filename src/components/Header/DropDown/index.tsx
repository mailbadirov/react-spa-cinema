import { MouseEvent, useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NearMeIcon from "@mui/icons-material/NearMe";

import { getChosenCitySelector } from "redux/selectors/authSelectors";

import { setCity } from "redux/slices/authSlice";

import { useAppDispatch, useAppSelector } from "redux/store";

import { ClickAwayListener } from "@mui/material";

import { Cities } from "app/constants";

const DropDown = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const cityId = useAppSelector(getChosenCitySelector);

  const dispatch = useAppDispatch();

  const handleClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(currentTarget);

  const handleClickAway = () => setAnchorEl(null);

  const handleSelectCity = (id: number) => () => {
    dispatch(setCity(id));

    handleClickAway();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Button onClick={handleClick}>
          {Cities[cityId]} <NearMeIcon />
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClickAway}
        >
          {Object.values(Cities)
            .filter((v) => !isNaN(Number(v)))
            .map((id) => {
              return (
                <MenuItem
                  key={id}
                  value={id}
                  onClick={handleSelectCity(id as number)}
                >
                  {Cities[id as number]}
                </MenuItem>
              );
            })}
        </Menu>
      </div>
    </ClickAwayListener>
  );
};

export default DropDown;
