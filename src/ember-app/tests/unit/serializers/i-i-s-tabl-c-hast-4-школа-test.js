import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabl-c-hast-4-школа', 'Unit | Serializer | i-i-s-tabl-c-hast-4-школа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tabl-c-hast-4-школа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
