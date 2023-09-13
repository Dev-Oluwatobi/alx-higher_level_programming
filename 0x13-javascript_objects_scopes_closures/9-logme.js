#!/usr/bin/node
/*
 * func prints the number of arguments already printed and the new argument val
 */
let counter = 0;

exports.logMe = function count (item) {
  console.log(`${counter}: ${item}`);
  counter += 1;
};
