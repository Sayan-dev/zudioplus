import { Box, Chip, Group } from '@mantine/core';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';

interface Props {
  size: string[];
  selectSize: (size: string) => void;
  selectedSize: string;
  className: string;
}

const Size = ({ size, selectedSize, selectSize, className }: Props) => {
  const handleSetValue = (val: string) => {
    selectSize(val);
  };

  return (
    <Box className={className}>
      <p className="mb-2">Size:</p>
      <Chip.Group multiple={false} value={selectedSize} onChange={handleSetValue}>
        <Group>
          {size.map(e => (
            <Chip variant="filled" radius="xs" value={e}>
              {e}
            </Chip>
          ))}
        </Group>
      </Chip.Group>
    </Box>
  );
};

export default Size;
