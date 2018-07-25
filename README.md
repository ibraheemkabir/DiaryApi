[![Build Status](https://travis-ci.org/ibraheemkabir/DiaryApi.svg?branch=master)](https://travis-ci.org/ibraheemkabir/DiaryApi)

[![Coverage Status](https://coveralls.io/repos/github/ibraheemkabir/DiaryApi/badge.svg?branch=ft-getspecificentry-%23159179157)](https://coveralls.io/github/ibraheemkabir/DiaryApi?branch=ft-getspecificentry-%23159179157) 

[![Maintainability](https://api.codeclimate.com/v1/badges/26e3517bc3052f064239/maintainability)](https://codeclimate.com/github/ibraheemkabir/DiaryApi/maintainability)

## MyDiary
MyDiary is an application that allows a user to owna virtual diaary where they can post daily life experiences and also get daily notifications.

**View UI template:** [Click]()

## Features

### Entries

- Add a Diary Entry
- Delete a DiaryEntry
- Modify an Diary Entry
- View Particular Diary Entry
- Delete a Diary Entry
- View All User Diary Entries

### User

- Pending Functionality

## Installation

Clone repo to your local machine:

```git
git clone https://github.com/ibraheemkabir/DiaryApi.git
```

**Install dependencies and run locally**<br/>
*Note>> Install npm if not already installed on local machine*

Then run:

```npm
npm install
```
Now start the server:

```npm
npm start
```

## Testing

To run tests:

```npm
npm test          /* Runs Mocha test */
```

## API

API is deployed at [here](https://mydiaryapi.herokuapp.com/) on heroku.

### API Routes

<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/entry/</td> 
		<td>Get all Entries</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/entry/</td> 
		<td>Add an Entry to your Diary</td>
	</tr>
	<tr>
		<td>GET single entry</td>
		<td>/api/v1/entry/id</td> 
		<td>Get a particular Entry with id</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/entry/id</td> 
		<td>Delete an Entry with id </td>
	</tr>
	<tr>
		<td>PUT</td>
			<td>/api/v1/entry/id</td> 
		<td>UPDATE an Entry</td>
	</tr>
</table>
