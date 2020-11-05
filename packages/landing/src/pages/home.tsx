import React, { useState } from 'react';
import { styled } from '@compiled/core';
import {
  Hero,
  Heading,
  Terminal,
  Content,
  RootLayout,
  HeaderSpacing,
  VerticalStack,
  HideSmall,
  Example,
} from '@compiled/website-ui';
import { cssProp, styled as styledExamples } from '@compiled/website-examples';
import { readFileSync } from 'fs';

const cssPropBefore = readFileSync(
  __dirname + '../../../../examples/dist/jsx/css-prop.js',
  'utf-8'
);
const cssPropAfter = readFileSync(
  __dirname + '../../../../examples/dist/js/css-prop.js',
  'utf-8'
);

const styledBefore = readFileSync(
  __dirname + '../../../../examples/dist/jsx/styled-invalid.js',
  'utf-8'
);
const styledAfter = readFileSync(
  __dirname + '../../../../examples/dist/js/styled-invalid.js',
  'utf-8'
);

const TerminalStripe = styled.div`
  background-color: rgba(39, 40, 34, 0.8);
`;

const TabButton = (props: { children: React.ReactNode; onClick: any }) => {
  return (
    <button
      {...props}
      css={{
        padding: '8px 12px',
        margin: 0,
        cursor: 'pointer',
        opacity: props['aria-selected'] ? 0.9 : 0.5,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        ':hover, :focus': {
          outline: 'none',
        },
        backgroundColor: 'transparent',
        border: 'none',
        '&&& *': {
          color: props['aria-selected'] ? 'inherit' : '#272822',
        },
        ':disabled': {
          cursor: 'not-allowed',
        },
      }}>
      <Heading as="span" look="h500">
        {props.children}
      </Heading>
    </button>
  );
};

const CodeExamples = () => {
  const [shown, setShown] = useState<'css' | 'styled' | 'class'>('css');

  return (
    <div>
      <TabButton
        aria-selected={shown === 'css'}
        onClick={() => setShown('css')}>
        Css prop
      </TabButton>
      <TabButton
        aria-selected={shown === 'styled'}
        onClick={() => setShown('styled')}>
        Styled component
      </TabButton>

      {shown === 'css' && (
        <Example variant="fixed" before={cssPropBefore} after={cssPropAfter}>
          <cssProp.EmphasisText massive>Hello world</cssProp.EmphasisText>
        </Example>
      )}
      {shown === 'styled' && (
        <Example variant="fixed" before={styledBefore} after={styledAfter}>
          <styledExamples.ColoredText color="#FF5630">
            Hello world
          </styledExamples.ColoredText>
        </Example>
      )}
    </div>
  );
};

export default () => (
  <RootLayout>
    <Hero>
      <Content>
        <HeaderSpacing aria-hidden="true" />
        <VerticalStack spacing={12} gap={3}>
          <Heading look="h100">
            <span css={{ maxWidth: '75%', display: 'block' }}>
              <HideSmall>
                Build time atomic CSS in JS without the runtime cost.{' '}
              </HideSmall>
              Bake, consume, extract. Everywhere.
            </span>
          </Heading>
          <CodeExamples />
        </VerticalStack>
      </Content>

      <TerminalStripe>
        <Content>
          <Terminal language="bash">
            {`
npm i @compiled/core @compiled/babel-plugin
`}
          </Terminal>
        </Content>
      </TerminalStripe>
    </Hero>

    <Content>
      <VerticalStack align="left" spacing={10}>
        <a
          href="docs"
          css={{
            color: '#7ab2c8',
            fontSize: '1.25em',
            textDecoration: 'none',
            textAlign: 'right',
          }}>
          <Heading look="h500" as="span">
            Getting started
          </Heading>
          <br />
          <span
            css={{
              textTransform: 'capitalize',
              position: 'relative',
              ':after': {
                content: '›',
                position: 'absolute',
                right: '-2rem',
              },
            }}>
            Installation
          </span>
        </a>
      </VerticalStack>
    </Content>
  </RootLayout>
);
