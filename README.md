# Event Management System

## Description
This is a full stack application project I have created with Ruby on Rails and ReactJS.

Users may sign up, and log in to accounts with secure - encrypted passwords.

Once logged in, users may be able to create events, view events created by others, edit, and register events they wish to attend.

When a user registers for an event, the registration info will be displayed in the profile page where the user can un-register events, or change the amount of partcipants they wish to include.

Link to deployment: 
https://event-management-system-qmse.onrender.com/

Blog:
https://dev.to/fusion407/creating-an-event-manager-with-ruby-on-rails-26m2

Video:
https://youtu.be/LvWfjn7Q2KU

## Usage

The following are required:

- Ruby 2.7.4
- NodeJS (v16)
- Postgresql

Ruby can be installed with following command:

```$ rvm install 2.7.4 --default```

Install latest version of bundler and rails:

```$ gem install bundler```
```$ gem install rails```

Install NodeJS:

```$ npm i -g npm```

Install Postgres:

```$ sudo apt update```
```$ sudo apt install postgresql postgresql-contrib libpq-dev```

Run Postgres service:

```$ sudo service postgresql start```

Creating database user so it can connect to rails:

First check operating system username:

```$ whoami```

You must use the same name to create Postgres user:

```$ sudo -u postgres -i```

```$ createuser -sr <username>```

Running rails server and react application:

```$ rails s```
```$ npm start --prefix client```

