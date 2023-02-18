<!-- What is multiple dispatch ? -->
<!-- Programming -->
<!-- Dispatch -->
<!-- Multiple dispatch is a programming paradigm in which the behavior of a function or method is determined by the types of all its arguments, not just the type of the receiver object. In other words, multiple dispatch enables a function to have different behaviors depending on the runtime types of its arguments. -->
<!-- 22-11-2022 -->

I initially struggled to grasp the significance of a feature like multiple dispatch, but as with many things, the devil is in the details.
For those unfamiliar with dispatch or multiple dispatch, I believe this will be an informative read. 
While those well-versed in the subject may find this explanation incomplete, I welcome any feedback or further insights.

To illustrate the essence and broader implications of multiple dispatch, consider a simple example that has been hiding in plain sight all along. 
By exploring how multiple dispatch handles the different combinations of input parameters, we can see how it provides a powerful tool for solving complex problems in a clear and concise manner. 
With this understanding, it becomes clear why multiple dispatch is an important feature to have in any modern programming language.


## Design a game in Java with the following specification

To give an analogy, let's imagine that you are an architect designing a building with two main components: **People** and **Objects**. In this building, people can move around and interact with objects in various ways.

Let's say we have the following subclasses.
```R
People  <- Husband, Maid and Wife
Objects <- Piano, Fridge and Other
```
And we have the following interactions.
```R
1. (Husband, Piano): Play the piano
2. (Maid, Piano): Clean the piano
3. (Wife, Piano): Regret marrying a Musician
4. (Husband, Fridge): Pour a drink
5. (Maid, Fridge): Restock if empty
6. (Wife, Fridge): Update the grocery list
7. (Husband, Other): Ignore
8. (Maid, Other): Look in awe
9. (Wife, Other): Draw a sketch
```
Now in our game we are maintaining a list of People and list of Objects and we randomly pick one person from a people list and one object from objects list.

```java
List<People> people = [person1, person2...]
List<Objects> object = [obj1, obj2...]

```

Depending on the actual subclass of the People and Object we must select a unique action, this would require us to do something like:

```java
if (instanceof(person) == Husband && instanceof(object) == Piano) {
  // Play the piano
} else if (instanceof(person) == Husband && instanceof(object) == Fridge) {
  // Pour a drink
}
```

> Formally, we want to select a method to **dispatch** based on the runtime type of two arguments.
> This is a special case of multiple dispatch known as **double dispatch**.
> Even though Java doesn't natively support beyond one level of dispatch, we can simulate this using the __Visitor Pattern__.


## (Double dispatch) The Visitor Pattern in Action

We can make use of something called the [visitor pattern](/blog/The+Visitor+Pattern/) where we can simulate **double** dispatch in a language like java which does not really support it.

Let us first define the classes that we are working with.

```java
class Person {} // Base class for all people
class Objects {} // Base class for all objects

class Husband extends Person { // Husband Class
  void action(Piano p) { } // Play the piano
  // Others...
} 
class Wife extends Person {} // Wife Class
class Maid extends Person {} // Maid Class

class Piano extends Objects {} // Piano Class
class Fridge extends Objects {} // Fridge Class
class Other extends Objects {} // Other Class
```

The first thing to notice is that as we keep adding different objects to our game we will end up having to create a new methods inside each Husband, Wife, Maid Class.
This is a bad design, we will first separate out this actions like this.

#### 1) Create a ObjectVisitor interface that is accepted by all people.

```java

interface ObjectVisitor { // This ensures the all Objects do something when they match with a specific person
  void visit(Husband h);
  void visit(Wife w);
  void visit(Maid m);
}

interface Acceptor { // This ensures the all People can accept a ObjectVisitor Object
  void accept(ObjectVisitor visitor);
}

class Husband extends Person implements Acceptor { // Husband Class
  void accept(ObjectVisitor visitor) {
    visitor.visit(this); // This is the subtle part
  }
}
// ... Other people similarly
```

Notice that in this case we are sending the current runtime object **this** to the accept method, so when **visitor.accept(this)** is called, it will invoke the accept method **accept(Husband h);** automatically. Similarly when we add this to Wife and Main subclasses, the accept method triggers **accept(Wife w);** and **accept(Maid m);** respectively.


#### 2) Create Object classes with the logic separated.

```java

interface ObjectVisitor {
  void accept(Husband h);
  void accept(Wife w);
  void accept(Maid m);
}

class Piano extends ObjectVisitor {
  void accept(Husband h) { } // Play the piano
  void accept(Wife w) { } // Regret marrying a Musician 
  void accept(Maid m) { } // Clean the piano
}
// ... Other objects similarly
```

See how we were able to neatly elegantly separate out our logic, now whenever a new Object is added to the game it will automatically know what to do and what method to dispatch.

#### 3) In Action

```java

Person p1 = new Husband();
Person p2 = new Wife();
Person p3 = new Maid();
// ...
Object o1 = new Piano();
p1.accept(o1);
```

When we call the **p1.visit(o1)** the following happens.

1. The accept method of Husband Class is invoked.

```java
class Husband extends Person implements Acceptor {
  void accept(ObjectVisitor visitor) {
    visitor.visit(this); // <- This method is invoked
  }
}
```
> __Subtle Point to note:__ Inside Husband Class's accept method, the type of **this** pointer is of type Husband and not Person. 

2. When a ObjectVisitor object sees a Husband Class object it selects the accept method that takes argument of type Husband.

```java
class Piano extends ObjectVisitor {
  void accept(Husband h) { } // <- This method is invoked
  void accept(Wife w) { }
  void accept(Maid m) { }
}
```

### In summary

In double dispatch we were able to put together logic that was able to take the runtime type of 2 objects into consideration and efficiently dispatch a method based on them.

```bash 
# Given two runtime objects that are stored in their base class containers
(object1 x object2) - call function X

# Select the most precise method based on the types of both the classes
(Husband x Piano) - call function 1
(Wife x Piano) - call function 2
(Maid x Piano) - call function 3
...
```

This is usually the limit to which we can push traditional languages like Java, C++, etc. 

## (Multiple Dispatch) No efficient ways?

We saw that we can do this naively using the **instanceof** checks, even though it works it's very inefficient and rarely used in places where performance is needed.

This is where multiple dispatch comes in. With multiple dispatch, the function is called based on the types of both the person and the object, allowing for more specific and nuanced behavior. For example, if a person interacts with a chair, the function might behave differently than if they interacted with a table.

While the concept of multiple dispatch can be complex, it allows for more flexible and customizable interactions in a program, making it a valuable tool for game developers and other software engineers.

Some languages like R do support this feature, but from my experience is somewhat out of grasp of most people and rarely gets used outside the community.

```bash 
# Given two runtime objects that are stored in their base class containers
(object1 x object2 x object3 x ...) - call function X

# Select the most precise method based on the types of both the classes
(Husband x Piano x ...) - call function 1
(Wife x Piano x ...) - call function 2
(Maid x Piano x ...) - call function 3
...
```

Some languages like R do support this feature, but from my experience is somewhat out of grasp of most people and rarely gets used outside the community.
I will sometime make a post about the working on this feature and how its implemented in R.

### SOURCES

__source 1__: [wiki.c2 article on Multiple Dispatch](https://wiki.c2.com/?MultipleDispatch)

__source 2__: [Prototypes with Multiple Dispatch: An Expressive and Dynamic Object Model](https://www.cs.cmu.edu/~aldrich/papers/ecoop05pmd.pdf)
