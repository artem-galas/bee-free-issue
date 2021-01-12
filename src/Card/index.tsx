import React from 'react';

import {
  Card
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';

export const CardCmp = ({templateName}: {templateName: string}) => {
  return (
    <Card style={{ width: '21rem' }}>
      <Typography use="headline6" tag="h2">
        {templateName}
      </Typography>
    </Card>
  );
}
