import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'page',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    components: {
      type: new GraphQLList(new GraphQLObjectType({
        name: 'component',
        fields: {
          name: {
            type: new GraphQLNonNull(GraphQLString),
          },
          data: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
      })),
    },
  },
});
