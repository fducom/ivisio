import React from 'react';
import Editor from '@antv/g6-editor';
import { pick } from '@utils';
import { MINIMAP_CONTAINER } from '@common/constants';
import BaseComponent from '../Base';

class Minimap extends BaseComponent {
  componentDidMount() {
    const { editor } = this.context;
    const {
      container = MINIMAP_CONTAINER,
      width,
      height,
      viewportWindowStyle,
      viewportBackStyle,
    } = this.props;

    const { clientWidth, clientHeight } = document.getElementById(container);

    editor.add(new Editor.Minimap({
      container,
      width: width || clientWidth,
      height: height || clientHeight,
      viewportWindowStyle,
      viewportBackStyle,
    }));
  }

  render() {
    const { container } = this.props;

    if (container) {
      return null;
    }

    return (
      <div id={MINIMAP_CONTAINER} {...pick(this.props, ['style', 'className'])} />
    );
  }
}

export default Minimap;
