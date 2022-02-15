import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Toolbar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { debounce } from "underscore";

import SearchIcon from "@material-ui/icons/Search";

import { actions } from "../../../core/services/search";

import bindActionCreators from "react-redux/lib/utils/bindActionCreators";

import { useStyles } from "./useStyle";

const Header = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const { isBlur } = useSelector((state) => state.data);

  const history = useHistory();
  const dispatch = useDispatch();

  const { setSearchValue } = bindActionCreators(actions, dispatch);

  const searchInput = useRef();

  const classes = useStyles();

  useEffect(() => {
    searchInput.current.value = searchValue;
  }, [searchValue]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  var debounceOnSearch = debounce(onSearch, 300);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const value = new FormData(e.target).get("search-value");
    if (value.trim().length > 0) history.push(`/products/`);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={`${classes.header} ${Boolean(isBlur) && style.blur}`}
    >
      <Toolbar
        classes={{
          root: classes.MuiToolbar,
          gutters: classes.MuiToolbarGutters,
        }}
      >
        <Link to="/" className={classes.logo}>
          Application Logo
        </Link>
        <Box width="100%" maxWidth={785} mr={18}>
          <form onSubmit={onSearchSubmit}>
            <FormControl
              className={classes.search}
              variant="outlined"
              size="small"
              fullWidth
            >
              <OutlinedInput
                placeholder="Search"
                name={"search-value"}
                fullWidth
                onChange={debounceOnSearch}
                inputRef={searchInput}
              />
              <Button
                variant="contained"
                size="small"
                color="primary"
                type={"submit"}
              >
                <SearchIcon />
              </Button>
            </FormControl>
          </form>
        </Box>
        <div className={style.authorization}>
          <Link to={"/sign-in"}>Sign In</Link>
          <Link to={"/sign-up"}>Create an account</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
