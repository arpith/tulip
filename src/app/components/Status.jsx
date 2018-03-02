import React, { Component } from 'react';
import { active, inactive } from '../styles/status';

export default function({ isActive }) {
  let style = inactive;
  if (isActive) {
    style = active;
  }
  return <div style={style}></div>
};
