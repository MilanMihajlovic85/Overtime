import { Injectable } from '@angular/core';
import {
  ActionSheetController,
  PopoverController,
  ModalController,
  ToastController,
  AlertController
} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutocloseOverlaysServiceService {

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastController: ToastController
  ) { }

  async trigger() {

      // close toast
      try {
        const element = await this.toastController.getTop();
        if (element) {
          element.dismiss();
          return;
        }
      } catch (error) {

      }

    // close alert
    try {
      const element = await this.alertCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {

    }

    // close action sheet
    try {
      const element = await this.actionSheetCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {

    }

    // close popover
    try {
      const element = await this.popoverCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {

    }

    // close modal
    try {
      const element = await this.modalCtrl.getTop();
      if (element) {
        element.dismiss();
        return;
      }
    } catch (error) {

    }

  }

}
