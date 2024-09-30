/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";

function Button({ children, action, type = "button" }) {
  const color = "#ff6b0a";
  const hoverColor = "#b34d0b";

  const style = css`
    padding: 8px 16px;
    background-color: ${color};

    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-align: center;
    text-transform: uppercase;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${hoverColor};
    }
  `;

  return (
    <button css={style} onClick={action} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  action: PropTypes.func,
  button: PropTypes.string,
};

export default Button;
