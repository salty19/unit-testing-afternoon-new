const {shortenText} = require('../utils/functions')
const {wordCount, attachUserName} = require('../../server/utils')
const {shortText, longText, posts, users} = require('./__data__/testData')
const { text } = require('express')


test('shortenText will not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText will shorten text over 100 characters as well as add 3 periods at the end', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('Function wordCount will check the posts array and return a total word count', () => {
    expect(wordCount(posts)).toBe(233)
})

test('Function attachUserName will check to see if the first post return has a property called displayName', () => {
    expect(attachUserName(users, posts)[0]).toHaveProperty('displayName')
})