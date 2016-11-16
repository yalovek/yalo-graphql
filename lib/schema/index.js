import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import page from './page';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      page,
    },
  }),
});
