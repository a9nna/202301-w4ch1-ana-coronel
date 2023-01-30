# Data

## Data layer

- List of Gentleman:
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data modifications

- Toggle selected property of gentleman
- Selected all gentleman
- Delete a gentleman

# Components

## App

- Contains list of Gentleman
- Contains the function "select all"
- Contains the function "toggle"
- Contains the function "delete"

- Sends the List of Gentlemen to Info
- Sends the function "select all" to Button
- Sends the function "toggle" to Gentleman
- Sends the function "delete" to Gentleman

## Info

- Receives the List of Gentleman
- Display the number of selected gentlemen

## Button

- Receives the function to "select all"

## Gentleman

- Receives the function "toggle"
- Receives the function "delete"
- Receives a Gentlemen
