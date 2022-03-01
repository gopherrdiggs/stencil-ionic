import { actionSheetController, ActionSheetOptions } from "@ionic/core";

class ActionSheetController {

  async create(options: ActionSheetOptions) {

    return actionSheetController.create(options);
  }
}
export const ActionSheetService = new ActionSheetController();