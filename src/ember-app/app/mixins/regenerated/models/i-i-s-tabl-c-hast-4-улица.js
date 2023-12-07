import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  дом: DS.belongsTo('i-i-s-tabl-c-hast-4-дом', { inverse: null, async: false }),
  ученик: DS.belongsTo('i-i-s-tabl-c-hast-4-ученик', { inverse: 'улица', async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-улица.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-улица.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-улица.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-tabl-c-hast-4-улица', {
    назв: attr('Назв', { index: 0 }),
    дом: belongsTo('i-i-s-tabl-c-hast-4-дом', 'Дом', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });
};
