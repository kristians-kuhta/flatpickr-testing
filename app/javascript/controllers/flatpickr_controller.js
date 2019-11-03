import Flatpickr from 'stimulus-flatpickr';
import { French } from 'flatpickr/dist/l10n/fr.js'

import 'flatpickr/dist/themes/material_blue'

export default class extends Flatpickr {
  static targets = [ 'field' ]

  initialize() {
    this.config = {
      allowInput: true,
      locale: French,
      onClose: (_selectedDates, _dateStr, instance) => {
        this.setDateFromInput(instance);
      },
      onOpen: (_selectedDates, _dateStr, instance) => {
        this.setDateFromInput(instance);
      }
    }
  }

  setDateFromInput(instance) {
    if(!instance.input.value) {
      instance.setDate(null);
    }
    if(/^\d{4}-\d{2}-\d{2}$/.test(instance.input.value)) {
      var date = new Date(instance.input.value);

      if(date.getTime()) {
        instance.setDate(instance.input.value);
      }
    }
  }
}
