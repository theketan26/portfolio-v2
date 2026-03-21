import React from 'react';
import styled from 'styled-components';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  gradientColorOne: string;
  gradientColorTwo: string;
  backgroundColor: string;
  textColor: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, gradientColorOne, gradientColorTwo, backgroundColor, textColor, ...props }) => {
  return (
    <StyledWrapper
      style={{
        '--gradient-color-one': gradientColorOne,
        '--gradient-color-two': gradientColorTwo,
        '--btn-background-color': backgroundColor,
        '--btn-text-color': textColor,
      }}
    >
      <button className="btn" {...props}>
        <div className="btn-inner">{children}</div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    cursor: pointer;
    padding: 0.2em;
    border: 0;
    position: relative;
    border-radius: 1.6em;
    overflow: hidden;
    background: transparent;
    transition: all 0.1s linear;
  }

  .btn::before {
    content: "";
    aspect-ratio: 1 / 1;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: linear-gradient(
      0deg,
      var(--gradient-color-one) 25%,
      var(--gradient-color-two) 75%
    );
    z-index: -1;
    animation: rotating-border 2s linear infinite;
    transform: translate(-50%, -50%);
    will-change: transform;
  }

  .btn-inner {
    padding: 0.5em 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5em;
    background-color: var(--btn-background-color);
    color: var(--btn-text-color);
    z-index: 2;
    transition: all 0.1s linear;
  }

  .btn:hover,
  .btn:focus {
    padding: 0.3em;
  }
  .btn:hover .btn-inner,
  .btn:focus .btn-inner {
    border-radius: 1.2em;
    padding: 0.4em 1.4em;
  }

  .btn:active {
    padding: 0.4em;
  }
  .btn:active .btn-inner {
    padding: 0.3em 1.3em;
  }

  @keyframes rotating-border {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }`;

export default AnimatedButton;
