import React, { Component } from 'react';
import { Optional } from './Optional';
import { EUR, GBP } from './Flags';

const flagsPath = './assets/flags/';

export default class Flag extends Component {
  render() {
    const { currency } = this.props;
    const renderFlag = currency === 'EUR' ? <EUR /> : currency === 'GBP' ? <GBP /> : null;
    return <Optional renderIf={!!currency} component={() => renderFlag} />;
  }
}
