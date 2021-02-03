import React, { useMemo } from 'react';
import { makeStyles, createStyles, useTheme, Box } from '@material-ui/core';
import clsx from 'clsx';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/*
  Note, using a dynamic className such as useFlexSpacing did not work when applying specificity with a selector such as '&$useFlexSpacing'. Note sure why, but the workaround is to simply apply the className as a string.

  [TODO] Using flexSpacing with <RowBox responsive/> is very opinionated with it's current setup. It assumes the same top and left margin will be used with Flex Column and Flex Row layouts respectively. In addition, generally, using flexWrap with <RowBox responsive/> will be avoided due to use of top margin's with <ChildBox/>. The workaround in both cases is to simply not use <RowBox responsive/> and use
   <RowBox flexDirection={{xs: 'column', sm: 'row'}} /> with custom top margins passed in as props while using the flexSpacing prop to control left margins.
*/

/*
  See links for more info:
  https://www.w3schools.com/cssref/css3_pr_flex.asp
  Useful terminology/abbreviations from https://github.com/angular/flex-layout/wiki/fxFlex-API
  alias 	    Equivalent CSS:
  initial 	  flex: 0 1 auto
  auto 	      flex: <grow> <shrink> 100%
  none 	      flex: 0 0 auto
  grow 	      flex: 1 1 100%
  nogrow 	    flex: 0 1 auto
  noshrink 	  flex: 1 0 auto
*/

const useEnhancedFlexProp = flexProp => {
  const flex = useMemo(() => {
    switch (flexProp) {
      case true:
        return 'auto';
      // Or '1 1 auto'

      case false:
        return '0 0 auto';
      // Or 'none'

      case 'grow':
        return '1 1 100%';

      case 'nogrow':
        return '0 1 auto';
      // Or 'initial'

      case 'noshrink':
        return '1 0 auto';

      default:
        return flexProp;
    }
  }, [flexProp]);
  return flex;
};

const useRowBoxStyles = makeStyles(theme => createStyles({
  respRowBox: ({
    flexSpacing,
    wrapSpacing,
    respBreakAt,
    respElseAt
  }) => ({
    [theme.breakpoints.down(respBreakAt)]: _extends({}, typeof flexSpacing === 'number' && {
      marginTop: theme.spacing(flexSpacing) * -1,
      '& > .flexBox__child': {
        marginTop: theme.spacing(flexSpacing) // This bit is redundant with Column layout
        // ...(flexWrap && {
        //   marginTop: theme.spacing(flexSpacing)
        // })

      }
    }),
    [theme.breakpoints.up(respElseAt)]: _extends({}, typeof flexSpacing === 'number' && {
      marginLeft: theme.spacing(flexSpacing) * -1
    }, typeof wrapSpacing === 'number' && {
      marginTop: theme.spacing(wrapSpacing * -1)
    }, {
      '& > .flexBox__child': _extends({}, typeof flexSpacing === 'number' && {
        marginLeft: theme.spacing(flexSpacing)
      }, typeof wrapSpacing === 'number' && {
        marginTop: theme.spacing(wrapSpacing)
      })
    })
  }),
  rowBox: ({
    flexSpacing,
    wrapSpacing
  }) => _extends({}, typeof flexSpacing === 'number' && {
    marginLeft: theme.spacing(flexSpacing) * -1
  }, typeof wrapSpacing === 'number' && {
    marginTop: theme.spacing(wrapSpacing * -1)
  }, {
    '& > .flexBox__child': _extends({}, typeof flexSpacing === 'number' && {
      marginLeft: theme.spacing(flexSpacing)
    }, typeof wrapSpacing === 'number' && {
      marginTop: theme.spacing(wrapSpacing)
    })
  })
}));
const useColBoxStyles = makeStyles(theme => createStyles({
  colBox: ({
    flexSpacing
  }) => _extends({}, typeof flexSpacing === 'number' && {
    marginTop: theme.spacing(flexSpacing) * -1,
    '& > .flexBox__child': {
      marginTop: theme.spacing(flexSpacing)
    }
  })
}));

const EnhancedBox = (_ref) => {
  let {
    children,
    flex: flexProp
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "flex"]);

  const flex = useEnhancedFlexProp(flexProp);
  return /*#__PURE__*/React.createElement(Box, _extends({
    flex: flex
  }, rest), children);
};

const FlexBox = (_ref2) => {
  let {
    children,
    child = false,
    className: classNameProp
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "child", "className"]);

  return /*#__PURE__*/React.createElement(EnhancedBox, _extends({
    display: "flex",
    className: clsx([{
      ['flexBox__child']: child
    }, classNameProp])
  }, rest), children);
};

const RowBox = (_ref3) => {
  let {
    children,
    flexSpacing,
    className: classNameProp,
    responsive = false,
    flexWrap,
    wrapSpacing: wrapSpacingProp
  } = _ref3,
      rest = _objectWithoutPropertiesLoose(_ref3, ["children", "flexSpacing", "className", "responsive", "flexWrap", "wrapSpacing"]);

  const respBreakAt = useMemo(() => !responsive || responsive === true ? 'xs' : responsive, [responsive]);
  const theme = useTheme();
  const breakpoints = useMemo(() => // For typescript reference see https://fettblog.eu/typescript-better-object-keys
  Object.keys(theme.breakpoints.values).map(k => ({
    key: k,
    value: theme.breakpoints.values[k]
  })).sort((a, b) => a.value - b.value), [theme]);
  const respElseAt = useMemo(() => {
    const idx = breakpoints.findIndex(a => a.key === respBreakAt);
    return breakpoints[idx + 1].key;
  }, [breakpoints, respBreakAt]);
  const isFlexWrap = flexWrap === 'wrap';
  const wrapSpacing = !isFlexWrap ? undefined : typeof wrapSpacingProp === 'number' ? wrapSpacingProp : flexSpacing;
  const classes = useRowBoxStyles({
    flexSpacing,
    respBreakAt,
    respElseAt,
    wrapSpacing
  });
  const flexDirection = useMemo(() => {
    switch (responsive) {
      case false:
        return 'row';

      case true:
      case 'xs':
        return {
          xs: 'column',
          sm: 'row'
        };

      case 'sm':
        return {
          xs: 'column',
          md: 'row'
        };

      case 'md':
        return {
          xs: 'column',
          lg: 'row'
        };

      case 'lg':
        return {
          xs: 'column',
          xl: 'row'
        };

      default:
        return 'row';
    }
  }, [responsive]);
  return /*#__PURE__*/React.createElement(FlexBox, _extends({
    flexDirection: flexDirection,
    className: clsx([{
      [classes.respRowBox]: responsive,
      [classes.rowBox]: !responsive
    }, classNameProp]),
    flexWrap: flexWrap
  }, rest), children);
};

const ColumnBox = (_ref4) => {
  let {
    children,
    flexSpacing,
    className: classNameProp
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "flexSpacing", "className"]);

  const classes = useColBoxStyles({
    flexSpacing
  });
  return /*#__PURE__*/React.createElement(FlexBox, _extends({
    flexDirection: "column",
    className: clsx([classes.colBox, classNameProp])
  }, rest), children);
};

const ChildBox = (_ref5) => {
  let {
    children,
    className: classNameProp
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, ["children", "className"]);

  return /*#__PURE__*/React.createElement(EnhancedBox, _extends({
    className: clsx(['flexBox__child', classNameProp])
  }, rest), children);
};

export default FlexBox;
export { ChildBox, ColumnBox, FlexBox, RowBox };
//# sourceMappingURL=index.modern.js.map
