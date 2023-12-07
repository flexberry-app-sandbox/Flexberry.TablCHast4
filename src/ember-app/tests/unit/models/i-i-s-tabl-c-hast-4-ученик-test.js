import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabl-c-hast-4-ученик', 'Unit | Model | i-i-s-tabl-c-hast-4-ученик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tabl-c-hast-4-дом',
    'model:i-i-s-tabl-c-hast-4-улица',
    'model:i-i-s-tabl-c-hast-4-ученик',
    'model:i-i-s-tabl-c-hast-4-школа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
