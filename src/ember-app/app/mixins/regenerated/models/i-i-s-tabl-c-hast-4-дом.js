import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-дом.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДомE', 'i-i-s-tabl-c-hast-4-дом', {
    номер: attr('Номер', { index: 0 })
  });

  modelClass.defineProjection('ДомL', 'i-i-s-tabl-c-hast-4-дом', {
    номер: attr('Номер', { index: 0 })
  });
};
