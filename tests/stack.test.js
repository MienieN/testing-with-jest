const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

// add unti test here:
test('pop on empty stack returns undefined', () => {
    stack.pop();                            // this builds off of the previous tests and will return "wow"
    expect(stack.pop()).toBeUndefined();    // this fails the test because it returns "wow" rather than "undefined"
});