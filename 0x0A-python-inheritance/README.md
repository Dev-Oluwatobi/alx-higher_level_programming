0x0A. Python - Inheritance
Python Test Cases
Allowed editors: vi, vim, emacs
All your files should end with a new line
All your test files should be inside a folder tests
All your test files should be text files (extension: .txt)
All your tests should be executed by using this command: python3 -m doctest ./tests/*
All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
All your classes should have a documentation (python3 -c 'print(__import__("my_module").MyClass.__doc__)')
All your functions (inside and outside a class) should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)' and python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)')
A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
We strongly encourage you to work together on test cases, so that you don’t miss any edge case
Documentation
Do not use the words import or from inside your comments, the checker will think you try to import some modules
Tasks
0. Lookup
mandatory
Score: 0.0% (Checks completed: 0.0%)
Write a function that returns the list of available attributes and methods of an object:

Prototype: def lookup(obj):
Returns a list object
You are not allowed to import any modul
1. My list
mandatory
Score: 0.0% (Checks completed: 0.0%)
Write a class MyList that inherits from list:

Public instance method: def print_sorted(self): that prints the list, but sorted (ascending sort)
You can assume that all the elements of the list will be of type int
You are not allowed to import any module
2. Exact same object
mandatory
Score: 0.0% (Checks completed: 0.0%)
Write a function that returns True if the object is exactly an instance of the specified class ; otherwise False.

Prototype: def is_same_class(obj, a_class):
You are not allowed to import any module
3. Same class or inherit from
mandatory
Score: 0.0% (Checks completed: 0.0%)
Write a function that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False.

Prototype: def is_kind_of_class(obj, a_class):
You are not allowed to import any module
4. Only sub class of
mandatory
Score: 0.0% (Checks completed: 0.0%)
Write a function that returns True if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise False.

Prototype: def inherits_from(obj, a_class):
You are not allowed to import any module
