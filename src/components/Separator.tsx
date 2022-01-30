import React from 'react';
import { View } from 'react-native';

type SeparatorProps = {
  height: number,
  width: number,
}

const Separator = ({ height, width, ...extraProps }: SeparatorProps) => {
  return (
    <View style={{ height, width, ...extraProps }} />
  )
}

Separator.defaultProps = {
  height: 0,
  width: 0,
}

export default Separator;