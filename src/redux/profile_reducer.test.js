import React from "react";
import profileReducer, {addPostActionCreator} from "./profile_reducer";
import {deletePost} from "./profile_reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: ' 10'},
        {id: 2, message: 'Its my first post', likesCount: ' 5'},
        {id: 3, message: 'My project', likesCount: ' 2'},
        {id: 4, message: 'My project', likesCount: ' 0'},
    ]
};

it ('length of posts should be incremented', () => {
    // 1.test data
    let action = addPostActionCreator("it.com");
    // 2.action
    let newState = profileReducer(state, action);
    // 3.expectation
    expect(newState.posts.length).toBe(4);
});

it ('message of new post should be corrected', () => {

    let action = addPostActionCreator("it.com");
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe("it.com");
});

it ('after deleting length of message should be decrement', () => {

    let action = deletePost(4);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it ('after deleting length shouldn be decrement if id is incorrect', () => {

    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});
