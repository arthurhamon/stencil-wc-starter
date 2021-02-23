import { Component, Prop, h } from '@stencil/core';
import { IWcConfig } from '@/interfaces/wc-config';
import { Boot } from '@/utils/boot';
import i18n from "@/utils/i18n";
import { format } from '@/utils/utils';

/**
 * This is the first component
 *
 * @export
 * @class MyComponent
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The web component configuration
   * pass via props to get the environment from the mother app
   */
  @Prop() wcconfig: IWcConfig;

  private _appBoot: Boot;

  private _getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>{i18n.t('welcome')}, World! I'm {this._getText()}</div>;
  }

  componentWillLoad() {
    console.log('WC rendered with config :', this.wcconfig);
    // Boot the app, you can add a custom env, default is prod
    this._appBoot = new Boot(this.wcconfig?.env);
    // Call this to init Sentry
    this._appBoot.initSentry();
  }

  componentWillRender() {
    console.log('I18Next :', i18n.getDataByLanguage(i18n.language));
  }
}
