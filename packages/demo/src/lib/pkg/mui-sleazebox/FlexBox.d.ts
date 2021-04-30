import React from 'react';
import { BoxProps } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
declare type EnhancedFlexProp = BoxProps['flex'] | boolean | 'grow' | 'nogrow' | 'noshrink';
declare type Props = {
    flexSpacing?: number;
    wrapSpacing?: number;
    children?: React.ReactNode;
    child?: boolean;
    flex?: EnhancedFlexProp;
} & Omit<BoxProps, 'flex'>;
export declare type RowBoxProps = Props & {
    responsive?: boolean | Breakpoint;
    halfRespSpacing?: boolean;
};
export declare type ChildBoxProps = {
    children?: React.ReactNode;
    flex?: EnhancedFlexProp;
} & BoxProps;
export type { Props as FlexBoxProps };
export type { Props as ColumnBoxProps };
declare const FlexBox: ({ children, child, className: classNameProp, ...rest }: Props) => JSX.Element;
declare const RowBox: ({ children, flexSpacing, halfRespSpacing, className: classNameProp, responsive, flexWrap, wrapSpacing: wrapSpacingProp, ...rest }: RowBoxProps) => JSX.Element;
declare const ColumnBox: ({ children, flexSpacing, className: classNameProp, ...rest }: Props) => JSX.Element;
declare const ChildBox: ({ children, className: classNameProp, ...rest }: ChildBoxProps) => JSX.Element;
export { RowBox, ColumnBox, ChildBox, FlexBox };
export default FlexBox;
