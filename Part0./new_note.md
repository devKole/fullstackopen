sequenceDiagram
      browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
      server-->>browser: The server asks the browser to do a new HTTP GET request to the address defined in the header's Location - the address notes.
      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
      server-->>browser: HTML document.
      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
      server-->>browser: the css file.
      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
      server-->>browser: the JavaScript file.
      browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
      server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ].
