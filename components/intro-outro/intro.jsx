import styled, { css } from 'styled-components';
import { Starry } from '../starry';
import { MyButton } from '../anybutton';
import Link from 'next/link';
import { MobileAlertIntro } from '../mobile-warn-intro';

export function Intro() {
  return (
    <>
      <MyMain>
        <Starry />
        <Headline>lush:3000</Headline>
        <Link href="/how-to-play">
          <a>
            <MyButton text="play 1st time" color="puremint" />
          </a>
        </Link>
        <Link href="/levels/levelone">
          <a>
            <MyButton text="play again" color="puremint" />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <MyButton text="about / contribute" color="puremint" />
          </a>
        </Link>
        <MobileHello>
          <MobileAlertIntro />
        </MobileHello>
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
`;

const MobileHello = styled.div`
  @media only screen and (min-width: 500px) {
    display: none;
  }
`;
