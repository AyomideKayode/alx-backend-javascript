#!/usr/bin/node

// Constants are block-scoped, much like variables defined using the let statement.
// The value of a constant cannot change through re-assignment, and it can't be redeclared.

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
