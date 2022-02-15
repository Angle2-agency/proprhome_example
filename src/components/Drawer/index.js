import React, { useEffect, useState } from 'react';
import { Button, Drawer } from '@material-ui/core';
import iconClose from '../../assets/img/icon_subtract.svg';
import services from '../../core/services';
import style from './style.module.scss';
import { useSelector } from 'react-redux';

const { isBlur: setIsBlur } = services;

const CustomDrawer = ({ show, setShow, children, anchor, elevation, className, keepMounted }) => {
  const { isBlur } = useSelector((state) => state.data);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      if (show) {
        setIsBlur(isBlur + 1);
      } else {
        setIsBlur(isBlur === 0 ? 0 : isBlur - 1);
      }
    }
  }, [show]);

  return (
    <Drawer
      className={`${style.drawer} ${className && className}`}
      anchor={anchor}
      open={show}
      elevation={elevation}
      keepMounted={keepMounted || false}
      onClose={() => {
        setShow(false);
      }}>
      <div className={style.drawerWrapper}>
        <Button
          size={'small'}
          className={style.drawerClose}
          onClick={() => {
            setShow(false);
          }}>
          <img src={iconClose} alt="" />
        </Button>
        {children}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
