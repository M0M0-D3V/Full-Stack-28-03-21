const MessageDisplay = (props) => {
  return (
    <>
                  <h1>Current Message</h1>
                  <pre>{props.message}</pre>
      <ul>
        {props.messageList.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
              
    </>
  );
};

export default MessageDisplay;
