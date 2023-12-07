import {
  defineNamespace,
  defineProjections,
  Model as УченикMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast-4-ученик';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УченикMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
