import { Resolvers } from './.mesh';

const resolvers: Resolvers = {
  Country: {
    title: {
      selectionSet: /* GraphQL */ `
        {
          name
        }
      `,
      async resolve(root) {
        return 'ss';
      },
    },
  },
};

export default resolvers;
