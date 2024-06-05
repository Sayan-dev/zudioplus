import { Box, Chip, Group } from '@mantine/core';
import React, { useEffect } from 'react';

import { selectSize } from '../../../../redux/features/itemSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';

interface Props {
  size: string[];
  data_selected_size: string;
  className: string;
}

const Size = ({ size, data_selected_size, className }: Props) => {
  const { selected_size } = useAppSelector((state: RootState) => state.item);
  const dispatch = useAppDispatch();

  const handleSetValue = (val: string) => {
    dispatch(selectSize(val));
  };

  useEffect(() => {
    dispatch(selectSize(data_selected_size));
  }, []);
  return (
    <Box className={className}>
      <p className="mb-2">Size:</p>
      <Chip.Group multiple={false} value={selected_size} onChange={handleSetValue}>
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
