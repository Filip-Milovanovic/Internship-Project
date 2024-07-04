import db from "./_db.js";

export const resolvers = {
  Query: {
    users() {
      return db.users;
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
  },

  Mutation: {
    addUser(_, args) {
      let user = {
        ...args.user,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      const emailTest = user.name.toLowerCase() + "@gmail.com";
      if (emailTest !== user.email) return user;
      else db.users.push(user);
      return user;
    },
    deleteUser(_, args) {
      db.users = db.users.filter((user) => user.id !== args.id);
      return db.users;
    },
  },
};
