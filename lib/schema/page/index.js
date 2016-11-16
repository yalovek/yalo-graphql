import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import Type from './type';
import Model from './model';

export default {
  type: Type,
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve(root, params) {
    return Model.findOne({
      name: params.name,
    });
  },
};
