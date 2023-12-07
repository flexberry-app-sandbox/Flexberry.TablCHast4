import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-tabl-c-hast-4-ученик-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-tabl-c-hast-4-улица+дом':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номер',
            required: true,
            relationName: 'дом',
            projection: 'ДомL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
