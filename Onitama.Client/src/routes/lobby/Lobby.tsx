/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React, { useState, useCallback } from 'react';
import { Input } from '../../components/dixit/input/Input';
import { Button } from '../../components/dixit/button';
import { Card } from '../../components/sequence/card';

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
      <Card rank={1} suit={1} size="small" />
      <Card rank={1} suit={2} size="small" />
      <Card rank={11} suit={3} size="small" />
      <Button>Create Game</Button>
      <Button>Enter Code</Button>
    </Flex>
  );
};
