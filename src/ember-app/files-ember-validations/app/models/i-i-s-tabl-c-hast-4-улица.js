import {
  defineNamespace,
  defineProjections,
  Model as УлицаMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast-4-улица';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УлицаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
