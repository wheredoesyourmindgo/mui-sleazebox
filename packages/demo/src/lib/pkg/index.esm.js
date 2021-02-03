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

var useEnhancedFlexProp = function useEnhancedFlexProp(flexProp) {
  var flex = useMemo(function () {
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

var useRowBoxStyles = makeStyles(function (theme) {
  return createStyles({
    respRowBox: function respRowBox(_ref) {
      var _ref2;

      var flexSpacing = _ref.flexSpacing,
          wrapSpacing = _ref.wrapSpacing,
          respBreakAt = _ref.respBreakAt,
          respElseAt = _ref.respElseAt;
      return _ref2 = {}, _ref2[theme.breakpoints.down(respBreakAt)] = _extends({}, typeof flexSpacing === 'number' && {
        marginTop: theme.spacing(flexSpacing) * -1,
        '& > .flexBox__child': {
          marginTop: theme.spacing(flexSpacing) // This bit is redundant with Column layout
          // ...(flexWrap && {
          //   marginTop: theme.spacing(flexSpacing)
          // })

        }
      }), _ref2[theme.breakpoints.up(respElseAt)] = _extends({}, typeof flexSpacing === 'number' && {
        marginLeft: theme.spacing(flexSpacing) * -1
      }, typeof wrapSpacing === 'number' && {
        marginTop: theme.spacing(wrapSpacing * -1)
      }, {
        '& > .flexBox__child': _extends({}, typeof flexSpacing === 'number' && {
          marginLeft: theme.spacing(flexSpacing)
        }, typeof wrapSpacing === 'number' && {
          marginTop: theme.spacing(wrapSpacing)
        })
      }), _ref2;
    },
    rowBox: function rowBox(_ref3) {
      var flexSpacing = _ref3.flexSpacing,
          wrapSpacing = _ref3.wrapSpacing;
      return _extends({}, typeof flexSpacing === 'number' && {
        marginLeft: theme.spacing(flexSpacing) * -1
      }, typeof wrapSpacing === 'number' && {
        marginTop: theme.spacing(wrapSpacing * -1)
      }, {
        '& > .flexBox__child': _extends({}, typeof flexSpacing === 'number' && {
          marginLeft: theme.spacing(flexSpacing)
        }, typeof wrapSpacing === 'number' && {
          marginTop: theme.spacing(wrapSpacing)
        })
      });
    }
  });
});
var useColBoxStyles = makeStyles(function (theme) {
  return createStyles({
    colBox: function colBox(_ref4) {
      var flexSpacing = _ref4.flexSpacing;
      return _extends({}, typeof flexSpacing === 'number' && {
        marginTop: theme.spacing(flexSpacing) * -1,
        '& > .flexBox__child': {
          marginTop: theme.spacing(flexSpacing)
        }
      });
    }
  });
});

var EnhancedBox = function EnhancedBox(_ref5) {
  var children = _ref5.children,
      flexProp = _ref5.flex,
      rest = _objectWithoutPropertiesLoose(_ref5, ["children", "flex"]);

  var flex = useEnhancedFlexProp(flexProp);
  return /*#__PURE__*/React.createElement(Box, _extends({
    flex: flex
  }, rest), children);
};

var FlexBox = function FlexBox(_ref6) {
  var _ref7;

  var children = _ref6.children,
      _ref6$child = _ref6.child,
      child = _ref6$child === void 0 ? false : _ref6$child,
      classNameProp = _ref6.className,
      rest = _objectWithoutPropertiesLoose(_ref6, ["children", "child", "className"]);

  return /*#__PURE__*/React.createElement(EnhancedBox, _extends({
    display: "flex",
    className: clsx([(_ref7 = {}, _ref7['flexBox__child'] = child, _ref7), classNameProp])
  }, rest), children);
};

var RowBox = function RowBox(_ref8) {
  var _ref9;

  var children = _ref8.children,
      flexSpacing = _ref8.flexSpacing,
      classNameProp = _ref8.className,
      _ref8$responsive = _ref8.responsive,
      responsive = _ref8$responsive === void 0 ? false : _ref8$responsive,
      flexWrap = _ref8.flexWrap,
      wrapSpacingProp = _ref8.wrapSpacing,
      rest = _objectWithoutPropertiesLoose(_ref8, ["children", "flexSpacing", "className", "responsive", "flexWrap", "wrapSpacing"]);

  var respBreakAt = useMemo(function () {
    return !responsive || responsive === true ? 'xs' : responsive;
  }, [responsive]);
  var theme = useTheme();
  var breakpoints = useMemo(function () {
    return (// For typescript reference see https://fettblog.eu/typescript-better-object-keys
      Object.keys(theme.breakpoints.values).map(function (k) {
        return {
          key: k,
          value: theme.breakpoints.values[k]
        };
      }).sort(function (a, b) {
        return a.value - b.value;
      })
    );
  }, [theme]);
  var respElseAt = useMemo(function () {
    var idx = breakpoints.findIndex(function (a) {
      return a.key === respBreakAt;
    });
    return breakpoints[idx + 1].key;
  }, [breakpoints, respBreakAt]);
  var isFlexWrap = flexWrap === 'wrap';
  var wrapSpacing = !isFlexWrap ? undefined : typeof wrapSpacingProp === 'number' ? wrapSpacingProp : flexSpacing;
  var classes = useRowBoxStyles({
    flexSpacing: flexSpacing,
    respBreakAt: respBreakAt,
    respElseAt: respElseAt,
    wrapSpacing: wrapSpacing
  });
  var flexDirection = useMemo(function () {
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
    className: clsx([(_ref9 = {}, _ref9[classes.respRowBox] = responsive, _ref9[classes.rowBox] = !responsive, _ref9), classNameProp]),
    flexWrap: flexWrap
  }, rest), children);
};

var ColumnBox = function ColumnBox(_ref10) {
  var children = _ref10.children,
      flexSpacing = _ref10.flexSpacing,
      classNameProp = _ref10.className,
      rest = _objectWithoutPropertiesLoose(_ref10, ["children", "flexSpacing", "className"]);

  var classes = useColBoxStyles({
    flexSpacing: flexSpacing
  });
  return /*#__PURE__*/React.createElement(FlexBox, _extends({
    flexDirection: "column",
    className: clsx([classes.colBox, classNameProp])
  }, rest), children);
};

var ChildBox = function ChildBox(_ref11) {
  var children = _ref11.children,
      classNameProp = _ref11.className,
      rest = _objectWithoutPropertiesLoose(_ref11, ["children", "className"]);

  return /*#__PURE__*/React.createElement(EnhancedBox, _extends({
    className: clsx(['flexBox__child', classNameProp])
  }, rest), children);
};

export default FlexBox;
export { ChildBox, ColumnBox, FlexBox, RowBox };
//# sourceMappingURL=index.esm.js.map
