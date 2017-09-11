const ObjectId = require('mongodb').ObjectID;
const CryptoJS = require('crypto-js');

const BaseData = require('./base/base.data');
const User = require('../models/user.model');

class UsersData extends BaseData {
  constructor(db) {
    super(db, User, User);
  }

  create(user) {
    if (!this._isModelValid(user)) {
      return Promise.reject('Invalid user');
    }
    return this.collection.findOne({
      name: user.name,
    }).then((userExists) => {
      if (userExists) {
        return Promise.reject('Username already taken!');
      }
      user.password = CryptoJS.SHA1(user.password).toString();
      return this.collection.insert(user);
    }).then(() => {
      return this.ModelClass.toViewModel(user);
    });
  }

  checkPassword(user, password) {
    if (!user) {
      return Promise.reject('Invalid user');
    }

    if (user.password !== CryptoJS.SHA1(password).toString()) {
      return Promise.reject('Invalid password');
    }
    return Promise.resolve(user);
  }

  updateProfilePicture(id, photo) {
    return this.collection.update({_id: ObjectId(id)},
      {
        $set: {photo: photo},
      });
  }

  updateWeight(id, weight) {
    return this.collection.update({_id: ObjectId(id)},
      {
        $set: {weight: weight},
      });
  }

  updateAge(id, age) {
    return this.collection.update({_id: ObjectId(id)},
      {
        $set: {age: age},
      });
  }

  updateHeight(id, height) {
    return this.collection.update({_id: ObjectId(id)},
      {
        $set: {height: height},
      });
  }

  addToLiked(currentUserId, searchedUser) {
    return this.collection.update({_id: ObjectId(currentUserId)},
      {
        $addToSet: {liked: searchedUser}
      })
  }

  removeFromLiked(currentUserId, searchedUser) {
    return this.collection.update({_id: ObjectId(currentUserId)},
      {
        $pull: {liked: searchedUser}
      })
  }

  likeUser(likedUser) {
    return this.collection.update({_id: ObjectId(likedUser)},
      {
        $inc: {likes: 1}
      })
  }

  unlikeUser(userId) {
    return this.collection.update(
      {_id: ObjectId(userId), likes: {$gt: 0}},
      {
        $inc: {likes: -1},
      });
  }

  isLiked(currentUserId, searchedUser) {
    return this.collection.findOne({_id: ObjectId(currentUserId)})
      .then((user) => {
        return Promise.resolve(user.liked.findIndex((u) => u === searchedUser));
      }).then((index) => {
        if (index !== -1) {
          return Promise.resolve(true);
        }
        return Promise.resolve(false);
      })
  }
}

module.exports = UsersData;
