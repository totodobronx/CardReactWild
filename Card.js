/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const Card = ({ title, body }) => (
  <div css={cardStyle}>
    <h2 css={titleStyle}>{title}</h2>
    <p css={bodyStyle}>{body}</p>
  </div>
);

const cardStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

const titleStyle = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const bodyStyle = css`
  font-size: 18px;
  color: #666;
`;

export default Card;
