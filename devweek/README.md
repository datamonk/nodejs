README.md
##

# References
http://github.com/themattwilliams/developer-week
http://slides.com/themattwilliams/developer-week-2017

# Init node proj and install dependencies
npm init -y
npm install --save express knex pg body-parser
npm install --save -g nodemon

# Start local server & init/create db
initdb --pgdata=data
pg_ctl -D data -l logfile start
createdb swords
psql
CREATE TABLE swords (
    id serial PRIMARY KEY,
    type text,
    is_magical boolean,
  attack int,
  sp_attack int
);

# Example json object
[
  {
    "id": int,
    "type": string,
    "is_magical": boolean,
    "attack": int,
    "sp_attack": int
  }
]

# CRUD tests
curl -XGET "http://localhost:8080/api/swords/$id"
curl -XPOST "http://localhost:8080/api/swords/$id" '
[
  {
    "id": int,
    "type": string,
    "is_magical": boolean,
    "attack": int,
    "sp_attack": int
  }
]'
curl -XPUT "http://localhost:8080/api/swords/$id" '
[
  {
    "id": int,
    "type": string,
    "is_magical": boolean,
    "attack": int,
    "sp_attack": int
  }
]'
curl -XDELETE "http://localhost:8080/api/swords/$id"
