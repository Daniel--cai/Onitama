/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { useState, useCallback } from 'react';
import { Input } from '../../components/dixit/input/Input';
import { Button } from '../../components/dixit/button';

export const Lobby = () => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <div sx={{ p: 'lg' }}>
        <Input placeholder="Placeholder" />
      </div>
      <div></div>
      <div sx={{ p: 'lg' }}>
        <Input placeholder="Placeholder" />
      </div>
      <Button>Create Game</Button>
      <Button>Enter Code</Button>
    </Flex>
  );
};
