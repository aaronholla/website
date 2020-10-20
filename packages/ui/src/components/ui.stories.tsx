import React from 'react';
import { CodeBlock } from './code-block';
import { Comparison as Compare } from './comparison';

export default { title: '@compiled/ui' }

export const Code = () =>  <CodeBlock>{'console.log(hello)'}</CodeBlock>

export const Comparison = () => <Compare

before="console.log('hello')" after="console.log('there')" />
