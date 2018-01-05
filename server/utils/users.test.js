const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Will',
      room: 'office'
    }, {
      id: 2,
      name: 'Will1',
      room: 'office fans'
    }, {
      id: 3,
      name: 'Will-3',
      room: 'office'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: 123,
      name: 'Andrew',
      room: 'The Office Fans'
    };

    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let userId = 1;
    let user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let userId = 99;
    let user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let userId = 2;
    let user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    let userId = 99;
    let user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for office', () => {
    let userList = users.getUserList('office');

    expect(userList).toEqual(['Will', 'Will-3']);
  });

  it('should return names for The Office Fans', () => {
    let userList = users.getUserList('office fans');

    expect(userList).toEqual(['Will1']);
  });
});
