import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  ученик: DS.belongsTo('i-i-s-tabl-c-hast-4-ученик', { inverse: null, async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-школа.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-школа.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ШколаE', 'i-i-s-tabl-c-hast-4-школа', {
    назв: attr('Назв', { index: 0 }),
    ученик: belongsTo('i-i-s-tabl-c-hast-4-ученик', 'Ученик', {
      назв: attr('Назв', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'назв' })
  });

  modelClass.defineProjection('ШколаL', 'i-i-s-tabl-c-hast-4-школа', {
    назв: attr('Назв', { index: 0 }),
    ученик: belongsTo('i-i-s-tabl-c-hast-4-ученик', 'Назв', {
      назв: attr('Назв', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
