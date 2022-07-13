import React from 'react';
import {WHITE_OPACITY60} from '../consts/COLOURS';
import {SPACE_SMALL, WRAPPER_MARGIN} from '../consts/LAYOUT';
import Box from './Box';
import TemplateText from './TemplateText';

const TableHeader = ({header}) => {
  return (
    <Box row spaceBetween width="90%" selfCenter mt={SPACE_SMALL}>
      {header.map((item, index) => (
        <Box key={index} width={item?.width} style={item?.style}>
          <TemplateText bold size={13}>
            {item?.title}
          </TemplateText>
        </Box>
      ))}
    </Box>
  );
};

export default TableHeader;
