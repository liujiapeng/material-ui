import * as React from 'react';
import { expect } from 'chai';
import { createMount, describeConformanceV5, createClientRender } from 'test/utils';
import Container from './Container';
import classes from './containerClasses';

describe('<Container />', () => {
  const render = createClientRender();
  const mount = createMount();
  const defaultProps = {
    children: <div />,
  };

  describeConformanceV5(<Container {...defaultProps} />, () => ({
    classes,
    inheritComponent: 'div',
    mount,
    refInstanceof: window.HTMLElement,
    muiName: 'MuiContainer',
    skip: ['componentsProp'],
    testVariantProps: { fixed: true },
  }));

  describe('prop: maxWidth', () => {
    it('should support different maxWidth values', () => {
      const { container: firstContainer } = render(<Container {...defaultProps} />);
      expect(firstContainer.firstChild).to.have.class(classes.maxWidthLg);
      const { container: secondsContainre } = render(
        <Container {...defaultProps} maxWidth={false} />,
      );
      expect(secondsContainre.firstChild).not.to.have.class(classes.maxWidthLg);
    });
  });
});
