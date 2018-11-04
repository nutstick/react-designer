'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Panel2 = require('./Panel');

var _Panel3 = _interopRequireDefault(_Panel2);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _PropertyGroup = require('./PropertyGroup');

var _PropertyGroup2 = _interopRequireDefault(_PropertyGroup);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _SwitchState = require('./SwitchState');

var _SwitchState2 = _interopRequireDefault(_SwitchState);

var _Columns = require('./Columns');

var _Columns2 = _interopRequireDefault(_Columns);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _webfontloader = require('webfontloader');

var _webfontloader2 = _interopRequireDefault(_webfontloader);

var _reactAutocomplete = require('react-autocomplete');

var _reactAutocomplete2 = _interopRequireDefault(_reactAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextPanel = function (_Panel) {
  _inherits(TextPanel, _Panel);

  function TextPanel(props) {
    _classCallCheck(this, TextPanel);

    var _this = _possibleConstructorReturn(this, (TextPanel.__proto__ || Object.getPrototypeOf(TextPanel)).call(this));

    _this.menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'red',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%' // TODO: don't cheat, let it flow to the bottom
    };
    _this.fontFamilies = [
    // {name: 'PT Serif', family: 'PT Serif, Arial, serif'},
    // {name: 'Arvo', family: '"Arvo", Arial, serif'},
    // {name: 'Bitter', family: 'Bitter, serif'},
    // {name: 'Cardo', family: 'Cardo, serif'},
    // {name: 'Domine', family: 'Domine, Arial, serif'},
    // {name: 'Old Standard TT', family: '"Old Standard TT", Arial, serif'},
    // {name: 'Varela Round', family:'Varela Round, serif'},
    // {name: 'Chivo', family: 'Chivo, sans-serif'},
    // {name: 'Roboto', family: 'Roboto, sans-serif'},
    // {name: 'Roboto Slab', family: 'Roboto Slab, serif'},
    // {name: 'Crimson Text', family: 'Crimson Text, serif'},
    // {name: 'Libre Bakersville', family: 'Libre Bakersville, serif'},
    // {name: 'Montserrat', family:'Montserrat, sans-serif'},
    // {name: 'Archivo Narrow', family: 'Archivo Narrow, sans-serif'},
    // {name: 'Lato', family: 'Lato, sans-serif'},
    // {name: 'Anonymous Pro', family: 'Anonymous Pro, monospace'},
    // {name: 'Merriweather', family: 'Merriweather, serif'},
    // {name: 'Neuton', family:'Neuton, serif'},
    // {name: 'Open Sans', family: 'Open Sans, sans-serif'},
    // {name: 'Poppins', family: 'Poppins, sans-serif'},
    // {name: 'Lora', family: 'Lora, serif'},
    // {name: 'Source Serif Pro', family: 'Source Serif Pro, serif'},
    // {name: 'Karla', family: 'Karla, sans-serif'},
    // {name: 'Montserrat', family:'Montserrat, serif'},
    // {name: 'Source Sans Pro', family: 'Source Sans Pro, sans-serif'},
    // {name: 'Inconsolata', family: 'Inconsolata, monospace'},
    // {name: 'Playfair Display', family: 'Playfair Display, serif'},
    // {name: 'Work Sans', family: 'Work Sans, serif'},
    // {name: 'Alegreya', family: 'Alegreya, serif'},
    // {name: 'Alegreya Sans', family: 'Alegreya Sans, sans-serif'},
    // {name: 'Fira Sans', family: 'Fira Sans, sans-serif'},
    { name: 'PT Serif', family: 'PT Serif' }, { name: 'Arvo', family: 'Arvo' }, { name: 'Bitter', family: 'Bitter' }, { name: 'Cardo', family: 'Cardo' }, { name: 'Domine', family: 'Domine' }, { name: 'Old Standard TT', family: 'Old Standard TT' }, { name: 'Varela Round', family: 'Varela Round' }, { name: 'Chivo', family: 'Chivo' }, { name: 'Roboto', family: 'Roboto' }, { name: 'Roboto Slab', family: 'Roboto Slab' }, { name: 'Crimson Text', family: 'Crimson Text' }, { name: 'Libre Baskerville', family: 'Libre Baskerville' }, { name: 'Montserrat', family: 'Montserrat' }, { name: 'Archivo Narrow', family: 'Archivo Narrow' }, { name: 'Lato', family: 'Lato' }, { name: 'Anonymous Pro', family: 'Anonymous Pro' }, { name: 'Merriweather', family: 'Merriweather' }, { name: 'Neuton', family: 'Neuton' }, { name: 'Open Sans', family: 'Open Sans' }, { name: 'Poppins', family: 'Poppins' }, { name: 'Lora', family: 'Lora' }, { name: 'Source Pro', family: 'Source Pro' }, { name: 'Karla', family: 'Karla' }, { name: 'Source Sans Pro', family: 'Source Sans Pro' }, { name: 'Inconsolata', family: 'Inconsolata' }, { name: 'Playfair Display', family: 'Playfair Display' }, { name: 'Work Sans', family: 'Work Sans' }, { name: 'Alegreya', family: 'Alegreya' }, { name: 'Alegreya Sans', family: 'Alegreya Sans' }, { name: 'Fira Sans', family: 'Fira Sans' }];

    _this.state = { value: props.object.fontFamily };
    return _this;
  }

  _createClass(TextPanel, [{
    key: 'handleFontFamilyChange',
    value: function handleFontFamilyChange(value) {
      // console.log(e, this, this.props)
      this.setState({ value: value });
      _webfontloader2.default.load({
        google: {
          families: [value]
        }
      });
      this.props.onChange('fontFamily', value);
    }
  }, {
    key: 'matchStateToTerm',
    value: function matchStateToTerm(state, value) {
      return state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 || state.family.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }
  }, {
    key: 'sortStates',
    value: function sortStates(a, b, value) {
      return a.name.toLowerCase().indexOf(value.toLowerCase()) > b.name.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var object = this.props.object;

      return _react2.default.createElement(
        _PropertyGroup2.default,
        { showIf: _lodash2.default.has(object, 'text') },
        _react2.default.createElement(
          'div',
          { style: _styles2.default.columns },
          _react2.default.createElement(
            _Column2.default,
            { style: { "float": "right", "marginRight": 15 } },
            _lodash2.default.has(object, 'fontWeight') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-bold',
              defaultValue: 'normal',
              nextState: 'bold',
              value: object.fontWeight,
              onChange: this.props.onChange.bind(this, 'fontWeight') }),
            _lodash2.default.has(object, 'fontStyle') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-italic',
              defaultValue: 'normal',
              nextState: 'italic',
              value: object.fontStyle,
              onChange: this.props.onChange.bind(this, 'fontStyle') }),
            _lodash2.default.has(object, 'textDecoration') && _react2.default.createElement(_SwitchState2.default, { icon: 'format-underline',
              defaultValue: 'none',
              nextState: 'underline',
              value: object.textDecoration,
              onChange: this.props.onChange.bind(this, 'textDecoration') })
          ),
          _react2.default.createElement(
            _Column2.default,
            { style: { "float": "right" }, label: 'font size' },
            _lodash2.default.has(object, 'fontSize') && _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.integerInput, { width: 35 }],
              value: object.fontSize,
              onChange: function onChange(e) {
                return _this2.props.onChange('fontSize', e.target.value);
              } })
          ),
          _react2.default.createElement(
            _Column2.default,
            { style: { "float": "right", marginRight: 10, padding: '3px 5px' }, label: 'choose font' },
            _react2.default.createElement(_reactAutocomplete2.default, {
              value: this.state.value,
              style: this.menuStyle,
              labelText: '',
              items: this.fontFamilies,
              getItemValue: function getItemValue(item) {
                return item.name;
              },
              shouldItemRender: this.matchStateToTerm,
              sortItems: this.sortStates,
              onChange: function onChange(event, value) {
                return _this2.setState({ value: value });
              },
              onSelect: this.handleFontFamilyChange.bind(this),
              renderItem: function renderItem(item, isHighlighted) {
                return _react2.default.createElement(
                  'div',
                  {
                    style: isHighlighted ? _styles2.default.highlightedItem : _styles2.default.item,
                    key: item.family
                  },
                  item.name
                );
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { style: [_styles2.default.row, { paddingTop: 25, paddingRight: 10 }] },
            _react2.default.createElement('input', { style: [_styles2.default.input, _styles2.default.textInput],
              onChange: function onChange(e) {
                return _this2.props.onChange('text', e.target.value);
              },
              value: object.text })
          )
        )
      );
    }
  }]);

  return TextPanel;
}(_Panel3.default);

exports.default = TextPanel;