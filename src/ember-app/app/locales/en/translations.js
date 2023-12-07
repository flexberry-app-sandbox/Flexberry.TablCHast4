import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTablCHast_4ДомLForm from './forms/i-i-s-tabl-c-hast-4-дом-l';
import IISTablCHast_4УченикLForm from './forms/i-i-s-tabl-c-hast-4-ученик-l';
import IISTablCHast_4ШколаLForm from './forms/i-i-s-tabl-c-hast-4-школа-l';
import IISTablCHast_4ДомEForm from './forms/i-i-s-tabl-c-hast-4-дом-e';
import IISTablCHast_4УченикEForm from './forms/i-i-s-tabl-c-hast-4-ученик-e';
import IISTablCHast_4ШколаEForm from './forms/i-i-s-tabl-c-hast-4-школа-e';
import IISTablCHast_4ДомModel from './models/i-i-s-tabl-c-hast-4-дом';
import IISTablCHast_4УлицаModel from './models/i-i-s-tabl-c-hast-4-улица';
import IISTablCHast_4УченикModel from './models/i-i-s-tabl-c-hast-4-ученик';
import IISTablCHast_4ШколаModel from './models/i-i-s-tabl-c-hast-4-школа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabl-c-hast-4-дом': IISTablCHast_4ДомModel,
    'i-i-s-tabl-c-hast-4-улица': IISTablCHast_4УлицаModel,
    'i-i-s-tabl-c-hast-4-ученик': IISTablCHast_4УченикModel,
    'i-i-s-tabl-c-hast-4-школа': IISTablCHast_4ШколаModel
  },

  'application-name': 'Tabl c hast_4',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tabl c hast_4',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl c hast_4',
          title: 'Tabl c hast_4'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'tabl-c-hast-4': {
          caption: 'TablCHast_4',
          title: 'TablCHast_4',
          'i-i-s-tabl-c-hast-4-школа-l': {
            caption: 'Школа',
            title: ''
          },
          'i-i-s-tabl-c-hast-4-дом-l': {
            caption: 'Дом',
            title: ''
          },
          'i-i-s-tabl-c-hast-4-ученик-l': {
            caption: 'Ученик',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tabl-c-hast-4-дом-l': IISTablCHast_4ДомLForm,
    'i-i-s-tabl-c-hast-4-ученик-l': IISTablCHast_4УченикLForm,
    'i-i-s-tabl-c-hast-4-школа-l': IISTablCHast_4ШколаLForm,
    'i-i-s-tabl-c-hast-4-дом-e': IISTablCHast_4ДомEForm,
    'i-i-s-tabl-c-hast-4-ученик-e': IISTablCHast_4УченикEForm,
    'i-i-s-tabl-c-hast-4-школа-e': IISTablCHast_4ШколаEForm
  },

});

export default translations;
