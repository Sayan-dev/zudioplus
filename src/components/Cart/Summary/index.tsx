import { Accordion, Box, Button, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { getActualAmount } from '../../../utils';

export type Summary_Data = {
  subtotal: number;
  shippingPrice: number;
  orderTotal: number;
};

type SummaryProps = {
  gotoCart: () => void;
  showIcon: boolean;
  summary: Summary_Data;
};

const Summary = ({ gotoCart, showIcon, summary }: SummaryProps) => {
  const isMobile = useMediaQuery('(max-width: 450px)');
  return (
    <Box className="flex border-2 border-dark-grey px-4 py-5 mb-8 justify-center  flex-col items-center">
      <Box className="w-full">
        <Box className="py-2 border-b-2 border-light">
          <Text className="text-md font-semibold ">Summary</Text>
        </Box>
        <Accordion unstyled defaultValue="Tax">
          <Accordion.Item value="Tax">
            <Accordion.Control className="border-b-2 border-light flex items-center w-full flex-row-reverse justify-between py-5 font-light">
              <Text className="text-md">Estimate Shipping and Tax</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Box className="flex flex-col py-4">
                <Box className="flex justify-between">
                  <Text className="text-sm font-medium text-dark-grey">Subtotal: </Text>
                  <Text className="text-sm font-medium text-dark-grey">
                    $ {getActualAmount(summary.subtotal)}{' '}
                  </Text>
                </Box>
                <Box className="flex justify-between mt-2">
                  <Text className="text-sm font-medium text-dark-grey">Shipping Price:</Text>
                  <Text className="text-sm font-medium text-dark-grey">
                    $ {getActualAmount(summary.shippingPrice)}
                  </Text>
                </Box>
                <Box className="flex justify-between py-2 mt-4 border-b-2">
                  <Text className="text-sm font-medium text-dark-grey">Order Total:</Text>
                  <Text className="text-lg font-semibold ">
                    $ {getActualAmount(summary.orderTotal)}
                  </Text>
                </Box>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Button
        onClick={gotoCart}
        fullWidth={!!isMobile}
        variant="filled"
        color="dark"
        className="px-10 py-2  h-full "
        classNames={{ label: 'py-2' }}
      >
        {showIcon ? <IconCheck height={24} /> : <Text>Proceed to Checkout</Text>}
      </Button>
    </Box>
  );
};

export default Summary;
