import { Serializer as ШколаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tabl-c-hast-4-школа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ШколаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
