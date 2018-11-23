import * as React from 'react';

export class OutsideClick extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      timeout: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.isLink = this.isLink.bind(this);
  }

  render() {
    const { children } = this.props;

    return <div ref={ref => (this.container = ref)}>{children}</div>;
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handleClick, true);
    document.addEventListener('click', this.handleClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handleClick, true);
    document.removeEventListener('click', this.handleClick, true);
    const { timeout } = this.state;
    if (!!timeout) {
      clearTimeout(timeout);
    }
  }

  isLink(target) {
    const { trackAClick } = this.props;
    return trackAClick && target.nodeName.toLowerCase() === 'a';
  }

  handleClick(e) {
    const { onClick } = this.props;
    const el = this.container;
    const target = e.target;
    if (
      !el.contains(target) ||
      (el.contains(target) && this.isLink(target)) ||
      this.isLink(target.parentNode)
    ) {
      this.setState({ timeout: setTimeout(onClick, 100) });
    }
  }
}
