Containers are all the rage these days. They’re fast, they make deployment easy, they handle dependencies, they slice, they dice, they make julienne fries! But... what are they? What exactly is a container and how does it work? Just how does a container differ from the “old” silver bullet, virtual machines?

Here’s a hint: It has nothing to do with boats, or whales, or shipping. That’s all marketing fluff.

Containers are simply a shorthand name for leveraging newer features of operating system kernels that let the OS lie to programs about how they’re running. In fact, all of modern software is built on lies. That’s what’s useful about it!

To understand how that works, why it’s so useful, and where it’s not, let’s dive into how software actually works on a modern Linux system to see how those kernel features fit into the big picture, building up to “containers” along the way. Pull back the veil of lies and see how your computer really works.
