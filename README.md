# README

## Regarding the index.html
The index.html in the dist-folder is the "true" index, the one in the src-folder is simply a template used for generation.

## Notes to errors
With the help of the example solution and some trial and error, the tools are now properly configured!

## Components
The components have now been separated properly.

## Notes to styling with styled Components
For the theme, a string state is used. With only two themes, a boolean could be used, but a string allows for more themes to be added later.
I am not a designer, and the styling was done to show that switching the theme makes a difference, not to be pretty.

## Styling oddities
If the dark theme is selected, a white border surrounds the application. Not sure why.
If the dark theme is selected, no message has been sent and the "Messages" section is shown, there is a white bar directly under the heading. It disappears as soon as at least one message was sent. Again, not sure why.