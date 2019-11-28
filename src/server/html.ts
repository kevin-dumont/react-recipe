const html = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script defer crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script defer crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script defer src="main.js" defer></script>
  </html>
`;

export default html;
