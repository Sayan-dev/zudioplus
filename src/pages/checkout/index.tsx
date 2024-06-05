import { Box, Button, Stepper, Text, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened } from '@tabler/icons-react';
import React, { useState } from 'react';

import AppWrapper from '../../components/layouts/AppWrapper';
import { NextPageWithLayout } from '../../types';

const CheckoutPage: NextPageWithLayout = () => {
  const [active, setActive] = useState(0);

  return (
    <Box>
      <Stepper
        className="mb-8"
        color="dark"
        active={active}
        onStepClick={setActive}
        iconPosition="left"
        classNames={{
          step: 'p-0',
          steps: 'items-center',
          separator: 'mx-[-0.4rem] translate-y-[-1rem]',
        }}
      >
        <Stepper.Step
          classNames={{
            step: 'flex-col',
            stepBody: 'm-0 py-2',
          }}
          label="Shipping"
          icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
        >
          <Box className="border-b-[1px] py-5">
            <Box className="flex flex-row justify-between">
              <Box className="flex flex-col">
                <Text>Estimated Total</Text>
                <Text>$156.00</Text>
              </Box>
              <Box className="flex border-2 border-dark-grey px-5 items-center">14 items</Box>
            </Box>
          </Box>
          <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
            <Box className="flex flex-row justify-between">
              <Box className="flex flex-col">
                <Text>Shipping Address</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
            <Box className="flex flex-row justify-between">
              <Box className="flex flex-col">
                <Text>Shipping Methods</Text>
              </Box>
            </Box>
          </Box>
          <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
            <Box className="flex flex-row justify-between">
              <Box className="flex flex-col">
                <Text>In-Store Pickup</Text>
              </Box>
            </Box>
          </Box>
          <Button
            onClick={() => setActive(1)}
            variant="filled"
            color="dark"
            fullWidth
            className="mb-8 h-auto p-4 text-md"
          >
            Next
          </Button>
        </Stepper.Step>
        <Stepper.Step
          classNames={{
            step: 'flex-col justify-center',
            stepBody: 'm-0 py-2',
          }}
          label="Payments"
          icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
        >
          <Box>
            <Box className="border-b-[1px] py-5">
              <Box className="flex flex-row justify-between">
                <Box className="flex flex-col">
                  <Text>Estimated Total</Text>
                  <Text>$156.00</Text>
                </Box>
                <Box className="flex border-2 border-dark-grey px-5 items-center">14 items</Box>
              </Box>
            </Box>
            <Box className="border-b-[1px] border-dark-grey pt-5 pb-2 mt-5">
              <Box className="flex flex-row justify-between">
                <Box className="flex flex-col">
                  <Text>Payment Method</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stepper.Step>
      </Stepper>
    </Box>
  );
};

CheckoutPage.getLayout = page => <AppWrapper>{page}</AppWrapper>;
export default CheckoutPage;
