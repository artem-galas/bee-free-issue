import React, { useEffect, useState, Fragment } from 'react';
// @ts-ignore
import Bee from '@mailupinc/bee-plugin';
import { Button } from '@rmwc/button';

import { postData } from '../utils/post';

import defaultTemplate from './default_template.json';

import styles from './Editor.module.scss';
import { Typography } from '@rmwc/typography';

const testID = '123';
const beeFreeConfig = {
  username: 'YOUR_CLIENT',
  secret: 'YOUR_SECRET'
}

type EditorProps = {
  templateName: string;
  onSaveHandler: ({jsonContent, htmlContent}: { jsonContent: string; htmlContent: string}) => void;
}

const Editor = ({onSaveHandler, templateName}: EditorProps) => {
  const rootContainer = 'bee-editor';
  const [beePluginInstance, setBeePluginInstance] = useState<any>();
  const jsonContent = defaultTemplate;

  const saveTemplate = (jsonFile: string, htmlFile: string) => {
    const payload = {
      jsonContent: jsonFile,
      htmlContent: htmlFile,
    };

    onSaveHandler(payload);
  };

  useEffect(() => {
    postData('https://auth.getbee.io/apiauth', {
      client_id: beeFreeConfig.username,
      client_secret: beeFreeConfig.secret,
    })
      .then(token => {
        setBeePluginInstance(new Bee(token));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    const beeConfig = {
      uid: `id-${testID}`,
      language: 'en-US',
      container: rootContainer,
      onSave: saveTemplate,
    };

    if (beePluginInstance) {
      beePluginInstance.start(beeConfig, jsonContent);
    }
  }, [beePluginInstance]);


  return (
    <Fragment>
      <div className={styles.content}>
        <header>
          <Typography use="headline6" tag="h2">{templateName}</Typography>
          <Button raised onClick={() => beePluginInstance.save()}>Save</Button>
        </header>
        <div
          id={rootContainer}
          style={{height: '500px'}}
        />
      </div>
    </Fragment>
  )
}

export default Editor;
