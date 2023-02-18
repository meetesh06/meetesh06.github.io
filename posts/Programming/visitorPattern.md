<!-- The Visitor Pattern -->
<!-- Programming -->
<!-- Dispatch -->
<!-- The Visitor Pattern can be particularly useful in cases where a large and complex object hierarchy needs to be modified or extended with new functionality over time, without disrupting existing code that uses the hierarchy. -->
<!-- 11-02-2023 -->

## What is the visitor pattern?

The Visitor Pattern is a design pattern in object-oriented programming that allows for adding new behaviors or operations to existing classes or object structures without changing their structure.
The pattern defines two main components.

1. A set of **visitor classes** that define the new behavior or operation to be performed on the elements of the object structure.
2. A set of elements or classes that **accept visitors** and provide access to their internal state.

With this pattern, the visitor object is passed to the element object, and the element object accepts the visitor object and invokes its methods to perform the operation. This way, the element object can be processed in a way that is specific to the visitor object's behavior, without the need to modify the element object's code.

If you are still confused, don't worry, I have a video explaining it in detail that should make it crystal clear and intuitive to understand.

[Youtube: The Visitor Pattern and Multiple Dispatch](https://www.youtube.com/watch?v=8SNVSRarXSA)

