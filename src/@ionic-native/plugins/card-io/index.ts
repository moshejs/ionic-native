import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface CardIOOptions {
  /**
   * Set to true to require expiry date
   */
  requireExpiry?: boolean;

  /**
   * 	The user will be prompted for the card CVV
   */
  requireCVV?: boolean;

  /**
   * The user will be prompted for the card billing postal code.
   */
  requirePostalCode?: boolean;

  /**
   * 	Removes the keyboard button from the scan screen.
   */
  suppressManual?: boolean;

  /**
   * The postal code will only collect numeric input. Set this if you know the expected country's postal code has only numeric postal codes.
   */
  restrictPostalCodeToNumericOnly?: boolean;

  /**
   * The theme for the card.io Activity's will be set to the theme of the application.
   */
  keepApplicationTheme?: boolean;

  /**
   * The user will be prompted for the cardholder name
   */
  requireCardholderName?: boolean;

  /**
   * Used to display instructions to the user while they are scanning their card.
   */
  scanInstructions?: string;

  /**
   * 	If set, the card will not be scanned with the camera.
   */
  noCamera?: boolean;

  /**
   * If scanExpiry is true, an attempt to extract the expiry from the card image will be made.
   */
  scanExpiry?: boolean;

  /**
   * The preferred language for all strings appearing in the user interface. If not set, or if set to null, defaults to the device's current language setting.
   */
  languageOrLocale?: string;

  /**
   * Changes the color of the guide overlay on the camera. The color is provided in hexadecimal format (e.g. `#FFFFFF`)
   */
  guideColor?: string;

  /**
   * The user will not be prompted to confirm their card number after processing.
   */
  supressConfirmation?: boolean;

  /**
   * The card.io logo will not be shown overlaid on the camera.
   */
  hideCardIOLogo?: boolean;

  /**
   * The card.io logo will be shown instead of the PayPal logo.
   */
  useCardIOLogo?: boolean;

  /**
   * Once a card image has been captured but before it has been processed, this value will determine whether to continue processing as usual.
   */
  supressScan?: boolean;
}

export interface CardIOResponse {
  /**
   * Card type
   */
  cardType: string;

  /**
   * Masked card number, showing only last 4 digits
   */
  redactedCardNumber: string;

  /**
   * Full card number
   */
  cardNumber: string;

  /**
   * Expiry month
   */
  expiryMonth: number;

  /**
   * Expiry year
   */
  expiryYear: number;

  /**
   * CVV
   */
  cvv: string;

  /**
   * Postal code
   */
  postalCode: string;

  /**
   * Cardholder name
   */
  cardholderName: string;
}

/**
 * @name Card IO
 * @description
 * @usage
 * This plug-in exposes card.io credit card scanning.
 * 
 * **NOTE**: If you would like to actually process a credit card charge, you might be interested in the [PayPal Cordova Plug-in](https://github.com/paypal/PayPal-Cordova-Plugin).
 * 
 * Requires Cordova plugin: `card.io.cordova.mobilesdk`. For more info, please see the [Card IO plugin docs](https://github.com/card-io/card.io-Cordova-Plugin).
 * 
 * Note: For use with iOS 10 + When building your app with the iOS 10 SDK +, you have to add some info to the info.plist file. This is due to increased security in iOS 10. Go to your app directory and search for the <your app name>Info.plist file. Add the following lines in the main <dict> element.
 * ```xml
 *<key>NSCameraUsageDescription</key>
 *<string>To scan credit cards.</string>
 *```
 * ```typescript
 * import { CardIO } from '@ionic-native/card-io';
 *
 * constructor(private cardIO: CardIO) { }
 *
 * ...
 *
 *
 * this.cardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCVV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * CardIOOptions
 * CardIOResponse
 */
@Plugin({
  pluginName: 'CardIO',
  plugin: 'card.io.cordova.mobilesdk',
  pluginRef: 'CardIO',
  repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class CardIO extends IonicNativePlugin {
  /**
   * Check whether card scanning is currently available. (May vary by
   * device, OS version, network connectivity, etc.)
   *
   * @returns {Promise<boolean>}
   */
  @Cordova()
  canScan(): Promise<boolean> {
    return;
  }

  /**
   * Scan a credit card with card.io.
   * @param {CardIOOptions} [options] Options for configuring the plugin
   * @returns {Promise<any>}
   */
  @Cordova()
  scan(options?: CardIOOptions): Promise<CardIOResponse> {
    return;
  }

  /**
   * Retrieve the version of the card.io library. Useful when contacting support.
   * @returns {Promise<string>}
   */
  @Cordova()
  version(): Promise<string> {
    return;
  }
}
