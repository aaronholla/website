import { ColoredText } from './styled';
import { EmphasisText } from './styled-invalid';
import { EmphasisText as EmphasisTextCssProp } from './css-prop';
import { EmphasisText as EmphasisTextCssPropString } from './css-prop-string';
import { ZoomOnHover } from './class-names';
import { ZoomOnHoverCAF } from './class-names-caf';
import { StylusBuiltInFunctions } from './stylus-built-in-functions';

export const styled = {
  ColoredText,
  EmphasisText,
};

export const cssProp = {
  EmphasisText: EmphasisTextCssProp,
  EmphasisTextString: EmphasisTextCssPropString,
};

export const classNames = {
  ZoomOnHover,
  ZoomOnHoverCAF,
};

export const stylus = {
  StylusBuiltInFunctions,
};
