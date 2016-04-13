import React, {Component} from 'react';
import Radium from 'radium';
import SVGRenderer from './SVGRenderer';

import {Text, Path, Rect, Circle, Image} from './objects';

class Preview extends Component {
  static defaultProps = {
    objectTypes: {
      'text': Text,
      'rectangle': Rect,
      'circle': Circle,
      'polygon': Path,
      'image': Image
    }
  };

  componentWillMount() {
    this.objectRefs = {};
  }

  render() {
    let {width, height, objects, objectTypes, background} = this.props;

    let style = {
      ...styles.container,
      ...this.props.style,
      width: width,
      height: height,
      padding: 0
   };

   let canvas = {
      width,
      height,
      canvasWidth: width,
      canvasHeight: height
   };

    return (
      <div className={'container'} style={style}>
        <SVGRenderer
          background={background}
          width={width}
          height={height}
          objects={objects}
          objectRefs={this.objectRefs}
          objectTypes={objectTypes}
          onRender={(ref) => this.svgElement = ref}
          canvas={canvas} />
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative"
  }
};

export default Radium(Preview);
