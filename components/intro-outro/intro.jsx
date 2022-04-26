import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Starry } from '../starry';
import { MyButton } from '../anybutton';
import Link from 'next/link';

export function Intro() {
  return (
    <>
      <MyMain>
        <Starry />
        <Headline>lush:3000</Headline>
        <Link href="/levels/levelone">
          <a>
            <MyButton text="play" color="puremint" />
          </a>
        </Link>
        <Link href="/how-to-play">
          <a>
            <MyButton text="instruction" color="puresky" />
          </a>
        </Link>
      </MyMain>
    </>
  );
}

const MyMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: var(--darkbg);
`;

const Headline = styled.div`
  color: white;
  font-size: 3rem;
  :&hover  {
    color: blue;
  }
`;