# mock-website
Mocking out a website with titles, subtitles, content, and links.

## Usage

### Running
Listens on port 3101.

```sh
$ npm install
$ npm start
```

### Configuration

Determine the pages to return. See `pages.json` for examples.
```
curl -X POST http://localhost:3100/_configure/pages --data '[{}, {}]'
```
