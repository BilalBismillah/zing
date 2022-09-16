import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
const PLUGIN_NAME = 'AddDirectoryPlugin';
import Configuration from './components/Configuration';
import { Icon } from '@twilio/flex-ui';
import { App } from './components/App';
import {  namespace, reducers} from "./states/App"


export default class AddDirectoryPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    this.registerReducers(manager);
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.ViewCollection.Content.add(
      <Flex.View name="my-custom-page" key="my-custom-page-key">
         <App />
      </Flex.View>
      
    );
    Flex.MainHeader.Content.add(<Configuration key="a" />, { sortOrder: -1, align: "end"} )
    Flex.SideNav.Content.add(
      <Flex.SideLink
        showLabel={ true }
        icon="Directory"
        isActive={true}
        onClick={() => { Flex.Actions.invokeAction("HistoryPush", `/my-custom-page`); } }
        key="MyCustomPageSideLink"
      ></Flex.SideLink>
    );
  }
  registerReducers(manager:Flex.Manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on `);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }

}
