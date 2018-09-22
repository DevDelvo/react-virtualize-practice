Based off of https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3

Playing around with React Virtualize to deal with large amounts of data. Without react virtualize, there can be laggy scrolling and slow initial rendering due to the large amount of elements in the DOM. 
For this case, it's not laggy because the data isnt complicated. But if you inspect the page with the Chrome Dev Tools and look at the rendering with FPS meter enabled, the FPS drops dramatically as you scroll.
WIth React Virtualize you can control what is loaded based on what the user can see. It can be set so you only load what the user will see, rather than loading everything at once. And as you scroll, the elements that go out of sight are replaced by the elements that should be visible.
