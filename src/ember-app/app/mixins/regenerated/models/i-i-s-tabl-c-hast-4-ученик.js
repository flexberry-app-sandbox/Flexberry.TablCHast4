import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  улица: DS.hasMany('i-i-s-tabl-c-hast-4-улица', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-ученик.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-tabl-c-hast-4-ученик.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-tabl-c-hast-4-ученик', {
    назв: attr('Назв', { index: 0 }),
    улица: hasMany('i-i-s-tabl-c-hast-4-улица', 'Улица', {
      назв: attr('Назв', { index: 0 }),
      дом: belongsTo('i-i-s-tabl-c-hast-4-дом', 'Дом', {
        номер: attr('Номер', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('УченикL', 'i-i-s-tabl-c-hast-4-ученик', {
    назв: attr('Назв', { index: 0 })
  });
};
