# PHZ questionnaire project questionnaire widget

## 1. Project Description

Business College Helsinki school project with PHZ Full Stack. Embeddable questionnaire widget with React and CSS to collect information about the employees satisfaction at the work place.

### 1.1. Business Vision

To make simple widget to be embedded easily to different webpages.

### 1.2. Task Management

- Jira
- Slack
- Teams
- GitHub

### 1.3. Personas

- Mahalete Haile @Mahalete
- Rakhi Chirayil Chandran @rakhicc
- Trang Nguyen @nguyenminhtrang2206
- Maria Rosenholm @MariaRosenholm

### 1.4. Use Cases

Data collection for Promoter score for HR personelle in PHZ Full Stack.

- Employees are asked a question once a month how likely are you to reccommend this company to friend or relative?
- They can respond by choosing number between 1-10. Not likely 1 to Very likely 10
- Based on their responses they are placed into three categories: Neutrals, Promotors and Detractors.
- NPS Score is calculated by Subtracting the percentage of Detractors from the percentage of Promoters.

[Read more!](https://www.netpromoter.com/know/)

## 2. Architecture

### 2.1. Technologies

Coding languages/frameworks/testing

- React
- CSS
- Jest

Production

- Heroku --> can be deployed many other ways too

## 3. Information collection from users

There is no cookie policy needed with this survey.

The survey collects only the score 1-10 and an optional feedback from the respondent. This information is stored into the database with a generated timestamp and id (id cannot be tracked down to the respondent).

When a respondent clicks submit button there will an item with an current date set into the browser localStorage. This prevents the same respondent sending multiple survey answers. When the next month comes the respondent is able to answer the survey again.

If a respondent does not want to answer the survey right now and clicks the X button, an item with an current date is set into the browser localStorage. The survey will appear again to the respondent after 6 days. There will also small button where the respondent can access the survey earlier as well.

## 4. Development Environment

### 4.1. Prerequisites

In the environmental variables you should have key REACT_APP_URL and as an value the backend url.

- `http://backendURL/api/npsdata`

### 4.2. Start the Application

After pulling the newest code from Git.

- npm install
- .env file in the root
- npm start

### 4.3. Run Tests

- npm test

## 5. Deployment

### 5.1. Prerequisites

To deploy you need to have:

- npm
- node

In the environmental variables you should have key REACT_APP_URL and as an value the backend url.

- `http://backendURL/api/npsdata`

## 6. Problems

- After clicking X button from the survey the iFrame height and width should be smaller

### 6.1. Environments

### 6.2. Coding

### 6.3. Dependencies

Add here TODO and blockers that you have found related to upgrading to newer versions.
List the library/framework/service, version, and then the error message.
