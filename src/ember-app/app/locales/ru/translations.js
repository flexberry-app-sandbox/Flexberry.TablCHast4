import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tabl c hast_4',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl c hast_4',
          title: 'Tabl c hast_4'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
