import { Box, Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

import classes from '../../../styles/app.module.scss';

const Subscribe = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: value => /^\S+@\S+$/.test(value),
    },
  });
  return (
    <Box>
      <TextInput
        className="mb-6 border-black border-b-2"
        required
        classNames={{ input: classes.input }}
        variant="unstyled"
        aria-label="Email"
        placeholder="Email"
        error={form.errors.email && 'Please specify valid email'}
        value={form.values.email}
        onChange={event => form.setFieldValue('email', event.currentTarget.value)}
      />
      <Button variant="filled" color="dark" fullWidth className="mb-8 h-auto p-5 text-md">
        Subscribe
      </Button>
    </Box>
  );
};

export default Subscribe;
