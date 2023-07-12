#!/usr/bin/python3
"""
describes the class BaseGeometry
"""


class BaseGeometry:
    """A class with public attribute area"""
    def area(self):
        """func will an exception when called"""
        raise Exception("area() is not implemented")
