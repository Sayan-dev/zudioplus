import { Accordion, Box, Button, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import React, { MutableRefObject } from 'react';

type SummaryProps = {
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  gotoCart: () => void;
  showIcon: boolean;
};

const Summary = ({ buttonRef, gotoCart, showIcon }: SummaryProps) => (
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
                <Text className="text-sm font-medium text-dark-grey">$ 300.00 </Text>
              </Box>
              <Box className="flex justify-between mt-2">
                <Text className="text-sm font-medium text-dark-grey">Shipping Price:</Text>
                <Text className="text-sm font-medium text-dark-grey">$ 0.00</Text>
              </Box>
              <Box className="flex justify-between py-2 mt-4 border-b-2">
                <Text className="text-sm font-medium text-dark-grey">Order Total:</Text>
                <Text className="text-lg font-semibold ">$ 156.00</Text>
              </Box>
            </Box>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>

    <Button
      ref={buttonRef}
      onClick={gotoCart}
      fullWidth
      variant="filled"
      color="dark"
      className="p-4 h-11"
    >
      {showIcon ? <IconCheck height={24} /> : <Text>Proceed to Checkout</Text>}
    </Button>
  </Box>
);

export default Summary;
